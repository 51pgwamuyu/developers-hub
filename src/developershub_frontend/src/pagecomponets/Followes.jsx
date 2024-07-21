import { FollowersIndex } from "../_components/followers";
import { Settings } from "../_components/setttings";
export default function FollowersPage() {
  return (
    <div className="max-w-2250px mx-auto p-[2rem]">
      <div className="flex">
        <div className="w-1/4  p-3 rounded-sm">
          <Settings />
        </div>
        <div className="flex-1">
          <FollowersIndex />
        </div>
      </div>
    </div>
  );
}
