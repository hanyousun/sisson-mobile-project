import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
//data
import { VideoContext } from "./contexts/VideoContext";
import videoList from "./mock/videoDetail.json";
// component
import Header from "./layout/Header";
import Menu from "./layout/menu/Index";
// page
import Login from "./pages/user/Login";
import Home from "./pages/Home";
import Video from "./pages/Video";

function App() {
  // 모바일 뷰포트
  useEffect(() => {
    function setVh() {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    }

    setVh();
    window.addEventListener("resize", setVh);

    return () => window.removeEventListener("resize", setVh);
  }, []);

  return (
    <VideoContext.Provider value={videoList}>
      <div className="relative flex flex-col w-full min-h-screen bg-black screen-height min-w-80">
        <Header />
        <main className="flex flex-col flex-1 h-full px-6 pt-24 pb-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/video" element={<Video />} />
            <Route path="/menu" element={<Menu />} />
          </Routes>
        </main>
      </div>
    </VideoContext.Provider>
  );
}

export default App;
