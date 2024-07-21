import mainimg from "../../assets/oskar-yildiz-cOkpTiJMGzA-unsplash.jpg";
import avatarimg from "../../assets/logo-light.e36c5981.svg";
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
    username: "catton",
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
export const Projects = () => {
  return (
    <div className="grid grid-cols-3 mt-10 gap-4">
      {samples.map((val) => (
        <div className="" key={val.username}>
          <div className="border rounded-md p-3 cursor-pointer">
            <img src={val.mainimg} alt="" className="h-[15rem] w-full rounded-lg" />
            <h1 className="text-[2rem] font-[700] mt-2 mb-2 text-center">{val.title}</h1>
            <p className="leading-[1.73rem] text-[1.1rem] text-center font-semibold opacity-55">
              {val.description}
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <img src={val.avatarimg} alt="" className="w-[50px] h-[50px]" />
                <h1 className="">{val.username}</h1>
              </div>
              <p className="">{val.date}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
