import { getAuthClient } from "./use-auth-client";
const AuthContext=createContext();
export async function intializeContract(){
    const authClient=await getAuthClient();
    window.auth={};
    window.auth.client=authClient;
    window.auth.isAuthenticated=await authClient.isAuthenticated();
    window.auth.identity=authClient.getIdentity();
    window.auth.principal=authClient.getIdentity()?.getPrincipal();
    window.auth.principalText=authClient.getIdentity()?.getPrincipal().toText();
    

}
