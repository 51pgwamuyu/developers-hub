import { useNavigate } from "react-router-dom";
import { FollowingIndex } from "../_components/following";
import { Settings } from "../_components/setttings";
import { useAuth } from "../auth/auth3";
export default function FollowingsPage() {
  const router=useNavigate();
  const { callFunction, logout, login, isAuth, principal } = useAuth();
  if(isAuth==false){
    router("/")
 }
  return (
    <div className="max-w-2250px mx-auto p-[2rem]">
      <div className="flex">
        <div className="w-1/4  p-3 rounded-sm">
          <Settings />
        </div>
        <div className="flex-1">
          <FollowingIndex />
        </div>
      </div>
    </div>
  );
}