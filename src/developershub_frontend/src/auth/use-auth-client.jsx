import { AuthClient } from "@dfinity/auth-client";
import React, { createContext, useContext, useEffect, useState } from "react";

const MAX_TIME = BigInt(7 * 24 * 60 * 60 * 1000 * 1000 * 1000);
const APP_NAME = "DevsHub";
const APP_LOGO = "https://nfid.one/icons/favicon-96x96.png";
const CONFIG_QUERY = `?applicationName=${APP_NAME}&applicationLogo=${APP_LOGO}`;
const IDENTITY_PROVIDER = `https://nfid.one/authenticate${CONFIG_QUERY}`;
const AuthContext = createContext();
let id;
export const useAuth = () => useContext(AuthContext);
export async function getAuthClient() {
  return await AuthClient.create();
}
export async function getPrincipal() {
  const authClient = await getAuthClient();
  return authClient.getIdentity()?.getPrincipal();
}

export async function getPrincipalText() {
  return (await getPrincipal()).toText();
}
export async function isAuthenticated() {
  try {
    const authClient = await getAuthClient();
    return await authClient.isAuthenticated();
  } catch (err) {
    logout();
  }
}
export async function login() {
  const authClient = await getAuthClient();
  let principalid;
  const isAuthenticated = await authClient.isAuthenticated();
  if (!isAuthenticated) {
    await authClient?.login({
      maxTimeToLIve: MAX_TIME,
      identityProvider: IDENTITY_PROVIDER,
      onSuccess: async () => {
        window.location.reload();
      },
      windowOpenerFeatures: `
      left=${window.screen.width / 2 - 525 / 2},
      top=${window.screen.height / 2 - 705 / 2}
      toolbar=0,location=0,menubar=0,width=525,height=705
      `,
    });
    
  }
}
export async function logout() {
  const authClient = await getAuthClient();
  authClient.logout();
  window.location.reload();
}
export const AuthProvider = ({ children }) => {
  id=getPrincipal();
  // const id=await getAuthClient()?.getIdentity()?.getPrincipal().toText();
  <AuthContext.Provider value={id}>{children}</AuthContext.Provider>;
};
