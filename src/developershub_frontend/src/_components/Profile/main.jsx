import { z } from "zod";
import { CameraIcon, CopyCheck } from "lucide-react";
import { Input } from "../../@/components/ui/input";
import { Button } from "../../@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../@/components/ui/dialog";
import { Label } from "../../@/components/ui/label";
import { useState } from "react";
import { developershub_backend } from 'declarations/developershub_backend';
export const ProfileMain = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const handleImage=(e)=>{
    e.preventDefault();
    const data=new FileReader();
    data.addEventListener("load",()=>{
      setImage(data.result);
    })
    data.readAsDataURL(e.traget.files[0])
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const data={
      username:name,
      avatarurl:image
    }
    developershub_backend.registerDeveloper(data).then((result)=>{
      console.log(result)
    })
  };
  return (
    <div className="min-h-[60vh] px-[30px]">
      <div className=""></div>
      <form action="">
        <div className="w-[100px] h-[100px] mx-auto flex items-center justify-center  p-[30px] rounded-full border border-red-600 ">
          <div className="">
            <label for="fileInput" className="cursor-pointer">
              <CameraIcon size={40} />
            </label>

            <Input type="file" id="fileInput" className="cursor-pointer" />
            <p className="">avatar</p>
          </div>
        </div>
      </form>
      <div className="flex space-x-3 items-center justify-between my-[57px]">
        <div className="flex space-x-3 items-center">
          <Label className="text-3xl">username </Label>
          <p className="text-2xl">samuel gichuki </p>
        </div>{" "}
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Edit username</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Edit </DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <form className="space-y-4  border-red-900" onSubmit={handleSubmit}>
                  <Label htmlFor="username" className="text-right">
                    Username
                  </Label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.value.target)}
                  />

                  <Button type="submit">Save changes</Button>
                </form>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-[16px] text-[#000] font-bold my-[45px]">
          Principal
          <span className="font-[14px] text-[#666]">
            {" "}
            gdydvvchdd-dc cn dcb-dcnd cndc- uhdi3gu3ihe
          </span>
        </p>

        <CopyCheck className="cursor-pointer active:opacity-40" />
      </div>
      <div className="">
        <p className="text-[16px] text-[#000] font-bold my-[15px]">
          Balance <span className="font-[14px] text-[#666]">2icp</span>
        </p>
      </div>
    </div>
  );
};
