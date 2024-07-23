import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import parse from "html-react-parser";
import { Button } from "../../@/components/ui/button";
import { Label } from "../../@/components/ui/label";
import { useAuth } from "../../auth/auth3";
export const AddArticle = () => {
  // const [title, setTitle] = useState("");
  // const [slug, setSlug] = useState("");
  // const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [File, setFile] = useState(null);
  const[user,setUser]=useState(null);
  const { callFunction, logout, login, isAuth, principal} = useAuth();
  const handleSubmit = async(e) => {
    
    e.preventDefault();
    const data= await callFunction.getdeveloperPrincipal();
    setUser(data)
    const filedata = new FileReader();
    filedata.addEventListener("load", () => {
      setFile(filedata.result);
    });
    filedata.readAsDataURL(image);
    const results=await callFunction.writeArticle(user?.ok?.userName,title,content,File)
    console.log(results)
  };
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "color", "image"],
      [{ "code-block": true }],
      ["clean"],
    ],
  };
  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "indent",
    "image",
    "code-block",
    "color",
  ];
  return (
    <div className="mt-10">
      <div className="">
        <form className="relative w-full p-4 mx-auto r" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <Label className="mb-4">Article Title</Label>
            <input
              type="text"
              className="border"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              placeholder="article title"
            />
          </div>
          <div className="flex flex-col mb-4 mt-6">
            <Label className="mb-4">Article Avatar Image</Label>
            <input type="file" onChange={(e) => setImage(e.target.files[0])} />
          </div>
          <ReactQuill
            theme="snow"
            value={content}
            onChange={setContent}
            modules={modules}
            formats={formats}
          />
          <Button type="submit" size="sm" variant="blue" className="mt-9">
            submit your article
          </Button>
        </form>
      </div>
    </div>
  );
};
