import { Button } from "../../@/components/ui/button";
import developer from "../../assets/download.jpeg"
export const WelcomePageMainContent = () => {
  return (
    <div className="">
      <div className=" h-[50vh] flex flex-col justify-center mt-[60px]">
        <h1 className="text-center text-[2.5rem] font-extrabold font">
          WELCOME TO THE HOME OF  BIGGEST TECH  <br />{" "}
          <span className="text-green-700 my-5 font">
            COMMUNITY
          </span>{" "}
          <br />
         
        </h1>
        <div className="flex ">
        <p className="text-[1.175rem] font-medium leading-10 text-red-400 py-5 w-[60%]">
            where developers meet and exchange ideas build,inspire and innovate to tackle real world
            problems
          </p>
          <img src={developer} alt="" className="w-[200px] h-[190px]" />
        </div>
        <div className="flex justify-center w-full mt-10">
          <Button variant="">JOIN NOW TO SHOWCASE YOUR SKILLS</Button>
        </div>
      </div>
    </div>
  );
};
