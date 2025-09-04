import { useEffect } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
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

// 로그인 안했을시 첫페이지 로그인
function RequireAuth({ children }) {
  const authed = !!localStorage.getItem("auth");
  return authed ? children : <Navigate to="/login" replace />;
}

function App() {
  const location = useLocation();

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

  // 로그인 페이지 여부
  const isLoginPage = location.pathname === "/login";

  return (
    <VideoContext.Provider value={videoList}>
      <div className="relative flex flex-col w-full min-h-screen bg-black screen-height min-w-80">
        {!isLoginPage && <Header />}
        <main className="flex flex-col flex-1 h-full px-6 pt-24 pb-8">
          <Routes>
            <Route
              path="/"
              element={
                <RequireAuth>
                  <Home />
                </RequireAuth>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route
              path="/video"
              element={
                <RequireAuth>
                  <Video />
                </RequireAuth>
              }
            />
            <Route
              path="/menu"
              element={
                <RequireAuth>
                  <Menu />
                </RequireAuth>
              }
            />
            {/* 그 외의 링크 홈으로 연결 */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </VideoContext.Provider>
  );
}

export default App;
