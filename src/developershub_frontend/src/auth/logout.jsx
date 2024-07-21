import { Button } from "../@/components/ui/button";
import { useAuth } from "./auth3";
export default function Logout(){
    const {logout,callFunction}=useAuth();
    const handleClick=()=>{

    }
    return(
        <div className="">
            <Button onClick={logout} className="text-[20px]">logout</Button>
        </div>
    )
}