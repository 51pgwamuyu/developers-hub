import { LogIn, LogOut, Settings, SettingsIcon, UserPen } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../@/components/ui/button";
import { useAuth } from "../auth/auth3";
import { useEffect, useState } from "react";
import Logout from "../auth/logout";
import Login from "../auth/login";
import { Avatar, AvatarImage } from "../@/components/ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";
export const NavBar = () => {
  const router = useNavigate();
  const { result, setREsult } = useState();
  const [principalid, setPrincipalId] = useState(null);
  const { callFunction, logout, login, isAuth, principal } =useAuth();
  useEffect(() => {
    setPrincipalId(principal);
  }, [principal]);

  const handleClick = async () => {
    const id = await callFunction.getid();
    alert(id);
  };
  

  return (
    <div className="max-w-2250px mx-auto p-[2rem] border border-gray-300">
      <div className="flex items-center justify-between">
        <h1
          className="cursor-pointer text-[29px] font"
          onClick={() => router("/")}
        >
          DevHub
        </h1>
        <div className="flex items-center justify-between space-x-10">
          <a
            href="/projects"
            className="text-[28px] font-medium  font text-[#665] hover:border-b-2 hover:text-[#000]"
          >
            Projects
          </a>
          <a
            href=""
            className="text-[28px] font-medium font text-[#665] hover:border-b-2 hover:text-[#000]"
          >
            DevsCommunities
          </a>
          <a
            href=""
            className="text-[28px] font-medium  font text-[#665] hover:border-b-2 hover:text-[#000]"
          >
            DevsArticles
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage />
            <AvatarFallback></AvatarFallback>
          </Avatar>
          {isAuth ? (
            <>
              <SettingsIcon onClick={() => router("/settings")} />
            </>
          ) : (
            <></>
          )}

          {isAuth ? <Logout /> : <Login />}
        </div>
      </div>
    </div>
  );
};
