
import {
  AreaChartIcon,
  DessertIcon,
  FolderClock,
  HomeIcon,
  Layers3,
  LogOut,
  NotebookPen,
  PackageOpen,
  PlusCircle,
  PowerOff,
  Projector,
  Users,
  UsersRound
} from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "../../@/lib/utils";

const routes = [
  {
    name: "Home",
    href: "/",
    icon: HomeIcon,
  },
  {
    name: "Following",
    href: "/settings/followings",
    icon: Users,
  },
  {
    name: "Followers",
    href: "/settings/followers",
    icon: UsersRound,
  },
  {
    name: "Articles",
    href: "/settings/articles",
    icon: NotebookPen,
  },
  {
    name: "your projects",
    href: "/your-projects",
    icon: Layers3,
  },
  {
    name: "AddArtlce",
    href: "/settings/add-article",
    icon: PlusCircle,
  },
  {
    name:"Profile",
    href:"/settings/profile",
    icon:UsersRound
  }
];
export const SideBar = () => {
  return (
    <div className="border-r h-[85vh] %]">
      <div className="bg-white pl-5 pt-9 pr-4 rounded-[10px]">
      {routes.map((val) => (
        <div className="" key={val.name}>
          <div
            className={cn(
              "flex items-center font space-x-5 mb-6",
              "cursor-pointer"
            )}
          >
            <val.icon />
            <Link to={val.href} className="hover:text-green-200 text-[#192325] hover:bg-gray-50 w-full">{val.name}</Link>
          </div>
        </div>
      ))}
      
      </div>
      <div className="bg-white pl-5 pt-9 pr-4 rounded-[10px]">
      <div className="flex space-x-4 mt-10 cursor-pointer opacity-40">
        <LogOut />
        <p>Log out</p>
      </div>
      </div>
    </div>
  );
};
