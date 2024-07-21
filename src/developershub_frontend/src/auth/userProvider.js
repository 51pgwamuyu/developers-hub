import { createContext, useContext, useState } from "react";

const AuthContext=createContext();
export const useUser=()=>useContext(UserContext);

const AuthProvider=async({children})=>{
    const id=await getAuthClient();
    return(
        <AuthContext.Provider value={ window.auth.principalText}>
            {children}
        </AuthContext.Provider>
    )
    
}