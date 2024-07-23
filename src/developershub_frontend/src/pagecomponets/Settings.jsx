import { CameraIcon } from "lucide-react";
import { Settings } from "../_components/setttings";
import { Label } from "../@/components/ui/label";
import { useState } from "react";
import { Button } from "../@/components/ui/button";
import { developershub_backend } from "declarations/developershub_backend";
import { useAuth } from "../auth/auth3";
export default function SettingPage() {
  const [username, setUserName] = useState("");
  const [bio, setBio] = useState("'");
  const [image, setImage] = useState(null);
  const [file, setFile] = useState(null);
  const [result, setResult] = useState();
  const { callFunction, logout, login, isAuth, principal } = useAuth();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const filedata = new FileReader();
    filedata.addEventListener("load", () => {
      setFile(filedata.result);
    });
    filedata.readAsDataURL(image);
    const data = {
      username: username,
      userbio: bio,
      avatarurl: file,
    };
    console.log(typeof file);
    try {
      const returnedData = await callFunction.registerDeveloper(
        username,
        bio,
        file
      );
      console.log(returnedData);
    } catch (err) {
      console.log(err,"er");
    }

    
  };
  return (
    <div className="max-w-2250px mx-auto p-[2rem]">
      <div className="flex">
        <div className="w-1/4  p-3 rounded-sm">
          <Settings />
        </div>
        <div className="flex-1">
          <h1 className="font-bold text-[2.25em]">Your Profile settings</h1>
          <p className="mb-12 mt-6">set and update your profile info here</p>
          <div className="border-b" />
          <div className="">
            <form onSubmit={handleSubmit}>
              <div className=" mt-3  p-[30px] ">
                <div className="">
                  <label for="fileInput" className="cursor-pointer">
                    <CameraIcon size={40} />
                  </label>
                  <input
                    type="file"
                    id="fileInput"
                    onChange={(e) => setImage(e.target.files[0])}
                    className="cursor-pointer"
                  />
                  <p className="">avatar</p>
                  <div className="flex flex-col mt-6 mb-7">
                    <Label className="mb-4">Enter your username</Label>
                    <input
                      type="text"
                      value={username}
                      className="border"
                      required
                      onChange={(e) => setUserName(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col mt-6 mb-7">
                    <Label className="mb-4">Tell us About You</Label>
                    <textarea
                      rows={4}
                      className="border"
                      maxLength={200}
                      required
                      value={bio}
                      onChange={(e) => setBio(e.target.value)}
                      placeholder="your bio..."
                    ></textarea>
                  </div>
                </div>
              </div>
              <Button type="submit" variant="blue">
                Save your Changes
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
