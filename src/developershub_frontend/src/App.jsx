import { useState } from "react";
import { Button } from "./@/components/ui/button";
// import { developershub_backend } from 'declarations/developershub_backend';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./_components/navbar";
import WelcomePage from "./pagecomponets/WelcomePage";
import ProfilePage from "./pagecomponets/Profile";
import SettingPage from "./pagecomponets/Settings";
import Projects from "./pagecomponets/OpenSource";
import FollowersPage from "./pagecomponets/Followes";
import FollowingsPage from "./pagecomponets/Following";
import ArticlesPage from "./pagecomponets/Artilces";
import AddArticlePage from "./pagecomponets/AddArticle";
import { Footer } from "./_components/footer";
import { AuthProvider } from "./auth/auth3";
function App() {
  const [greeting, setGreeting] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.elements.name.value;
    // developershub_backend.greet(name).then((greeting) => {
    //   setGreeting(greeting);
    // });
    return false;
  }
 
  return (
  <AuthProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/settings/profile" element={<ProfilePage />} />
          <Route path="/settings/projects" element={<Projects />} />
          <Route path="/settings" element={<SettingPage />} />
          <Route path="/settings/followers" element={<FollowersPage />} />
          <Route path="/settings/followings" element={<FollowingsPage />} />
          <Route path="/settings/articles" element={<ArticlesPage />} />
          <Route path="/settings/add-article" element={<AddArticlePage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      </AuthProvider>
   
    
  );
}

export default App;
