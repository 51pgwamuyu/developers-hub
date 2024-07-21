import { CopyCheckIcon, PencilIcon } from "lucide-react";
import { Button } from "../@/components/ui/button";
import { ProfileMain } from "../_components/Profile/main";
import { SideBar } from "../_components/setttings/sidebar";
import avatar from "../assets/images.jpeg";
import { Link } from "react-router-dom";
export default function ProfilePage() {
  return (
    <div className="max-w-2250px mx-auto p-[2rem] bg">
      <div className="flex space-x-3 h-full">

        <div className="flex-1">
          <div className="flex justify-center">
            <div className="flex flex-col justify-center">
              <img
                src={avatar}
                alt=""
                className="rounded-full w-[200px] h-[200px]"
              />
              <Button variant="link">Samuel Gichki</Button>
              <div className="flex space-x-5">
              <p className="font bg-gray-600 p-1 rounded-md mb-5">gdgvgdvg vg=bvh bd=cv bv b vhbrbfr </p>
              <CopyCheckIcon/>
              </div>
            </div>
          </div>
          <div className="flex  justify-center space-x-4 w-3/4 mx-auto">
            
            <Link to="" className="flex  flex-col items-center ">Your Projects <span>0</span></Link>
            <Link to="" className="flex  flex-col items-center ">Your   Followers <span>0</span></Link>
            <Link to="" className="flex  flex-col items-center ">Following <span>0</span></Link>
            <Link to="" className="flex  flex-col items-center ">Your Articles <span>0</span></Link>
            <Link to="" className="flex  flex-col items-center ">Community Group Created <span>0</span></Link>

          </div>
          <div className="border-t mt-4">
            <Button variant="link">Create a notification</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
