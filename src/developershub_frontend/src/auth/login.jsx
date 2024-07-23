import { useState } from "react";
import { Button } from "../@/components/ui/button";
import { useAuth } from "./auth3";
import ClipLoader from "react-spinners/ClipLoader"
export default function Login() {
    const [loading,setLOading]=useState(false);
    let [color,setColor]=useState("#00000")
  const { login ,isAuth} = useAuth();
  const override={
    display:"block",
    margin:"0 auto",
    borderColor:"red",
  }
  


  return (
    <div className="">
       
                 <Button onClick={login}>Login</Button>
           
    </div>
  );
}
