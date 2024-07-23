
import { AllArticlesIndex } from "../_components/Allarticles";
import { ArticlesIndex } from "../_components/articles";
import { Settings } from "../_components/setttings";

export default function AllArticlesPage() {
  return (
    <div className="max-w-2250px mx-auto p-[2rem]">
      <div className="flex">
        
        <div className="flex-1">
          <AllArticlesIndex />
        </div>
      </div>
    </div>
  );
}
