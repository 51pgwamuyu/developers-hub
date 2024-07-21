import { Button } from "../@/components/ui/button";
import { useAuth } from "./auth3";
export default function Login(){
    const {login}=useAuth()
    return(
        <div className="">
            <Button onClick={login}>login</Button>
        </div>
    )
}