import { Query, Databases } from 'appwrite';
import { client ,account} from '../Authentication/appwrite';
declare const process: any;
const databases = new Databases(client);
const databaseId = "689bbc7d002506e3c547";
const collectionId = "689bbc94003da1a20db8";

export async function findByEmail(emailToFind?: any) {
    try {
        const response = await databases.listDocuments(
            databaseId,
            collectionId,
            [Query.equal("email", emailToFind)]
        );
        console.log("Search results:", response.documents);
        return response.documents;
    } catch (error) {
        console.error("Error searching documents:", error);
    }
}
async function checkUserAfterOAuth() {
    try {
        const user = await account.get();
        return user;
    } catch (err) {
        console.error("❌ No active session:", err);
    }
}


export async function CheckRegistration() {
    const AccountDtl = await checkUserAfterOAuth();
    const response = await findByEmail(AccountDtl?.email);

    if (!response) {
        alert("User Not Registered")
    }
}
