import { Avatar, AvatarFallback, AvatarImage } from "../../@/components/ui/avatar";
import mainimg from "../../assets/f2.png";
import avatarimg from "../../assets/f5.png";
import { Button } from "../../@/components/ui/button";
const samples = [
  {
    mainimg: mainimg,
    avatarimg: avatarimg,
    username: "RSV",
    title: "3d metaverse project",
    description:
      "i just want to bring the world into universe of evergrowing metaverse world which hold how civilization will be doing every day and every activities life to life",
    githubUrl: "https://github.com/7144samuelG/3DMetaverse",
    lookingforFundeing: true,
    amount: 3000,
    walletAddress: "pxpd-4ccmd-45ccf-xsms-5gmmnc",
    date: "2 months ago",
  },
  {
    mainimg: mainimg,
    avatarimg: avatarimg,
    username: "RSV2",
    title: "3d metaverse project",
    description:
      "i just want to bring the world into universe of evergrowing metaverse world which hold how civilization will be doing every day and every activities life to life",
    githubUrl: "https://github.com/7144samuelG/3DMetaverse",
    lookingforFundeing: true,
    amount: 3000,
    walletAddress: "pxpd-4ccmd-45ccf-xsms-5gmmnc",
    date: "2 months ago",
  },
  {
    mainimg: mainimg,
    avatarimg: avatarimg,
    username: "RSV3",
    title: "3d metaverse project",
    description:
      "i just want to bring the world into universe of evergrowing metaverse world which hold how civilization will be doing every day and every activities life to life",
    githubUrl: "https://github.com/7144samuelG/3DMetaverse",
    lookingforFundeing: true,
    amount: 3000,
    walletAddress: "pxpd-4ccmd-45ccf-xsms-5gmmnc",
    date: "2 months ago",
  },
  {
    mainimg: mainimg,
    avatarimg: avatarimg,
    username: "RSV4",
    title: "3d metaverse project",
    description:
      "i just want to bring the world into universe of evergrowing metaverse world which hold how civilization will be doing every day and every activities life to life",
    githubUrl: "https://github.com/7144samuelG/3DMetaverse",
    lookingforFundeing: true,
    amount: 3000,
    walletAddress: "pxpd-4ccmd-45ccf-xsms-5gmmnc",
    date: "2 months ago",
  },
  {
    mainimg: mainimg,
    avatarimg: avatarimg,
    username: "RSV5",
    title: "3d metaverse project",
    description:
      "i just want to bring the world into universe of evergrowing metaverse world which hold how civilization will be doing every day and every activities life to life",
    githubUrl: "https://github.com/7144samuelG/3DMetaverse",
    lookingforFundeing: true,
    amount: 3000,
    walletAddress: "pxpd-4ccmd-45ccf-xsms-5gmmnc",
    date: "2 months ago",
  },
];
export const Following = () => {
  return (
    <div className=" grid grid-cols-4 gap-3">
      {samples.map((val) => (
        <div className="p-3 bg-gray-300 rounded-[10px]" key={val.username}>
          <div className=" flex flex-col  gap- items-center my-[10px] cursor-pointer">
            <Avatar>
              <AvatarImage src={val.avatarimg} alt="@shadcn" />
              <AvatarFallback>{val.username}</AvatarFallback>
            </Avatar>
            <h1 className="text-[#000] text-[16px] overflow-hidden my-[15px]">
              {val.title}
            </h1>
            <p className="font-normal leading-[17px] overflow-hidden text-[#666] height-[70px] text-[14px]">
              {val.description}
            </p>
          </div>
          <div className="flex justify-end">
            <Button variant="outline">Unfollow</Button>
          </div>
        </div>
      ))}
    </div>
  );
};
