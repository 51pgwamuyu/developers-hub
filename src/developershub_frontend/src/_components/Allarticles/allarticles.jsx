import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../@/components/ui/avatar";
import mainimg from "../../assets/f2.png";
import avatarimg from "../../assets/f5.png";
import { Button } from "../../@/components/ui/button";
import { LucideCakeSlice, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { useAuth } from "../../auth/auth3";
export const Articles = () => {
  const [articles, setArticles] = useState([]);
  const { callFunction, logout, login, isAuth, principal } = useAuth();
  useEffect(() => {
    const getArticles = async () => {
      try {
        const data = await callFunction.getAllArticles();
        setArticles(data);
      } catch (err) {
        setArticles([]);
      }
    };
    getArticles();
  }, []);
  console.log(articles);
  return (
    <>
      {articles.length==0 ? (
        <div className="flex items-center justify-center h-[100vh]">
          <h1 className="">No artilce found</h1>
        </div>
      ) : (
        <div className=" grid grid-cols-4 gap-3">
          {articles.map((val,_index) => (
            <div className="p-3 bg-gray-300 rounded-[10px]" key={_index}>
              <div className=" flex flex-col  gap- items-center my-[10px] cursor-pointer">
                <Avatar>
                  <AvatarImage src={val?.articleAvatar} alt="@shadcn" />
                  <AvatarFallback>{val?.by}</AvatarFallback>
                </Avatar>
                <h1 className="text-[#000] text-[16px] overflow-hidden my-[15px]">
                  {val.articleTitle}
                </h1>
                <p className="font-normal leading-[17px] overflow-hidden text-[#666] height-[70px] text-[14px]">
                  {val.articledescription}
                </p>
              </div>
              <div className="flex justify-between">
                <p className="flex items-center text-[14px] space-x-4">
                  <LucideCakeSlice size={18} />
                  <span>{val.likes.length}</span>
                </p>
                <p className="flex items-center space-x-4 text-[14px]">
                  <MessageCircle size={18} />
                  <span>{val.comments.length}</span>
                </p>
                <Button variant="destructive">Read</Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};
