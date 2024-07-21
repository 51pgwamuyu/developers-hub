import { Button } from "../../@/components/ui/button";
import { Input } from "../../@/components/ui/input";
import { SearchIcon, X } from "lucide-react";
import { useState } from "react";
import { Projects } from "./projects";

export const OSource = () => {
  const [value, setValue] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();

    if (!value) return;
  };
  const onClear = () => {
    setValue("");
  };
  return (
    <div className="w-full ">
      <div className="">
        <form
          className="relative w-full lg:w-[400px] mx-auto flex items-center"
          onSubmit={onSubmit}
        >
          <Input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Search"
            className="rounded-r-none focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0"
          />
          {value && (
            <X
              className="absolute top-2.5 right-14 h-5 w-5 text-muted-foreground cursor-pointer hover:opacity-75 transition"
              onClick={onClear}
            />
          )}
          <Button
            type="submit"
            size="sm"
            variant="secondary"
            className="rounded-l-none"
          >
            <SearchIcon className="h-5 w-5 text-muted-foreground" />
          </Button>
        </form>
      </div>
      <Projects/>
    </div>
  );
};
