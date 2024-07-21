import { AuthClient } from '@dfinity/auth-client'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { createActor,canisterId } from 'declarations/developershub_backend';
import { developershub_backend } from 'declarations/developershub_backend';
import { Actor } from '@dfinity/agent';
const AuthContext=createContext();
const MAX_TIME = BigInt(7 * 24 * 60 * 60 * 1000 * 1000 * 1000);
const APP_NAME = "DevsHub";
const APP_LOGO = "https://nfid.one/icons/favicon-96x96.png";
const CONFIG_QUERY = `?applicationName=${APP_NAME}&applicationLogo=${APP_LOGO}`;
const IDENTITY_PROVIDER = `https://nfid.one/authenticate${CONFIG_QUERY}`;
const defaultOptions={
  createOptions:{
    idleOPtions:{
      disableIdle:true,
    }
  },
  loginOptions:{
    identityProvider:IDENTITY_PROVIDER,
    maxTimeToLIve: MAX_TIME,
  }
}
export const useAuthClient=(options=defaultOptions)=>{


  const[isAuth,setIsAuth]=useState(false);
  const[authUser,setAuthUser]=useState(null);
  const[principal,setPrincipal]=useState(null);
  const[callFunction,setCallFunction]=useState(null);
  const[identity,setIdentity]=useState(null);
  useEffect(()=>{
    AuthClient.create(options.createOptions).then(async(client)=>{
      updateClient(client);

    })
  },[]);
  async function updateClient(client){
    const isAuthenticated=await client.isAuthenticated();
    setIsAuth(isAuthenticated);
    const identity=client.getIdentity();
    setIdentity(identity);
    const principal=identity.getPrincipal();
    setPrincipal(principal);

    setAuthUser(client);

    const actor=createActor(canisterId,{
      agentOptions:{
        identity,
      },
    });
    setCallFunction(actor);
  }
  const login =()=>{
    authUser.login({
      ...options.loginOptions,
      onSucess:()=>{
        updateClient(authUser);
        window.location.reload();
      
      },
      windowOpenerFeatures: `
      left=${window.screen.width / 2 - 525 / 2},
      top=${window.screen.height / 2 - 705 / 2}
      toolbar=0,location=0,menubar=0,width=525,height=705
      `,
    });
    
  };
  async function logout(){
    await authUser?.logout();
    await updateClient(authUser);
    window.location.reload()
  }
  return {
    isAuth,
    login,
    logout,
    authUser,
    identity,
    principal,
    callFunction
  }
}

export const AuthProvider=({children})=>{
  const auth=useAuthClient();
  return<AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}
export const useAuth=()=>useContext(AuthContext);