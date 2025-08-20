import { OAuthProvider } from "appwrite";

export interface SignupParams {
  email: string;
  password: string;
  name: string;
  confirmPassword: string;
}

export interface Message {
  text: string;
  type: "success" | "error";
}

export interface LoginParams{
  email : string,
  password : string,
}

export interface OAuthProps {
  provider:  OAuthProvider;
}