import {
  CalendarHeart,
  Command,
  Home,
  MessageCircle,
  ProjectorIcon,
} from "lucide-react";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  return (
    <div className="">
      <div className="">
        <Link to="/" className="flex mb-7">
          <Home /> <span className="ml-4 font">Home</span> 
        </Link>
        <Link to="" className="flex mb-7">
          <ProjectorIcon /> <span className="ml-4 font">MyProjects</span>
        </Link>
        <Link to="" className="flex mb-7">
          <MessageCircle /><span className="ml-4 font">Charts</span>
        </Link>
        <Link to="" className="flex mb-7">
          <Command /> <span className="ml-4 font">Communities</span>
        </Link>
        <Link to="" className="flex ">
          <CalendarHeart /> <span className="ml-4 font">Challenges</span>
        </Link>
        
      </div>
    </div>
  );
};
