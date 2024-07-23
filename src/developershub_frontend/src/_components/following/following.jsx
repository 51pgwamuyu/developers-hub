import { Avatar, AvatarFallback, AvatarImage } from "../../@/components/ui/avatar";
import mainimg from "../../assets/f2.png";
import avatarimg from "../../assets/f5.png";
import { Button } from "../../@/components/ui/button";
import { useAuth } from "../../auth/auth3";
import { useState } from "react";

export const Following = () => {
  const { callFunction, logout, login, isAuth, principal } = useAuth();
  const [user, setUser] = useState(null);
  useEffect(() => {
    const getUser = async () => {
      try {
        const data = await callFunction.getdeveloperPrincipal();;
        setUser(data);
      } catch (err) {
        setUser(null);
      }
    };
    getUser();
  }, []);
  return (
    <>
    {user?.ok?.following.length == 0 ? (
      <>
        <div className="flex justify-center items-center">
          <h1 className="">You dont have a follower</h1>
        </div>
      </>
    ) : (
      <div className=" grid grid-cols-4 gap-3">
        {user?.ok?.following.map((val, _index) => (
          <div className="p-3 bg-gray-300 rounded-[10px]" key={val.username}>
            <div className=" flex flex-col  gap- items-center my-[10px] cursor-pointer">
              <Avatar>
                <AvatarImage alt="@shadcn" />
                <AvatarFallback>
                  {val.userName.substring(0, 3)}
                </AvatarFallback>
              </Avatar>
              <h1 className="text-[#000] text-[16px] overflow-hidden my-[15px]">
                {val.userName}
              </h1>
              <p className="font-normal leading-[17px] overflow-hidden text-[#666] height-[70px] text-[14px]">
                {val.bio}
              </p>
            </div>
            <div className="flex justify-end">
              <Button variant="outline">unFollow</Button>
            </div>
          </div>
        ))}
      </div>
    )}
  </>
  );
};
