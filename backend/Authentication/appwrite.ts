import { Client, Account, ID, OAuthProvider } from "appwrite";
import type { SignupParams, LoginParams, Message,OAuthProps } from "../../types/AuthenticationTypes";
// const APPWRITE_ENDPOINT = process.env.APPWRITE_ENDPOINT as string;
// const APPWRITE_PROJECT_ID = process.env.APPWRITE_PROJECT_ID as string;

export const client = new Client()
  .setEndpoint("https://fra.cloud.appwrite.io/v1")
  .setProject("689676280014800c1850");

export const account = new Account(client)

//===== OAuthProvider ========
export const OAUTH_PROVIDERS = {
  GOOGLE: "google" as OAuthProvider,
  GITHUB: "github" as OAuthProvider,
} as const;

//====== Check Session ==========
export const checkSession = async () => {
  try {
    return await account.getSession("current");
  } catch {
    return null;
  }
};

//======= LogOut ===============
export  const logout = async () => {
  try {
    await account.deleteSession("current");
  } catch (err) {
    console.error("❌ Logout error:", err);
  }
};

//=======OAuth============

export  function OAuth({ provider }: OAuthProps,) {
  try {
    const redirectUrl =
    typeof window !== "undefined" ? "http://localhost:5173": "";
    
    account.createOAuth2Session(
      provider,
      redirectUrl, 
       redirectUrl  
      );

    } catch (err) {
    console.error(`❌ OAuth (${provider}) error:`, err);
  }
}

//============ SignUp / Login ===============

export async function Signup({ email, password, name, confirmPassword }: SignupParams): Promise<Message> {
  if (password !== confirmPassword) {
    return { text: "⚠️ Passwords do not match.", type: "error" };
  }

  if (!email || !password || !name || !confirmPassword) {
    return { text: "⚠️ Please fill all fields.", type: "error" };
  }

  const newUserId = ID.unique();
  console.log("User ID generated:", newUserId);

  try {
    await account.create(newUserId, email, password,name);
      
  } catch (error:any) {
     if (error.response) {
    console.error("Appwrite response error:", error.response);
  } else if (error.message) {
    console.error("Appwrite error message:", error.message);
  }
    return { text: "⚠️ Failed to create account. Please try again.", type: "error" };
  }

  return { text: "🎉 Account created! Please log in.", type: "success" };
}

export async function Login({email,password} : LoginParams) : Promise<Message>{

  try {
       const session = await checkSession()
       if(session) return ({ text: "You are already logged in.", type: "error" });
       
       if (typeof (account as any).createEmailPasswordSession === "function") {
         await (account as any).createEmailPasswordSession(email, password);
       } else {
         await (account as any).createEmailSession(email, password);
       }

       return ({ text: "✅ Logged in successfully!", type: "success" });
       
     } catch (loginErr: any) {
       console.error("❌ Login failed:", loginErr);
       
       const status = loginErr?.code ?? loginErr?.response?.status ?? loginErr?.status;
       const msg = (loginErr?.message ?? "").toString().toLowerCase();

       if (status === 401) {
         return({ text: "❌ Invalid email or password.", type: "error" });
       } else if (msg.includes("user") && (msg.includes("not found") || msg.includes("does not exist"))) {
         return({ text: "⚠️ No account found. Please sign up.", type: "error" });
       } else {
         return({ text: "❌ Login failed. Please try again.", type: "error" });
       }
     }
}
