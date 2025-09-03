import Profile from "./Profile";
import RecentVideos from "./RecentVideos";
import MenuList from "./MenuList";

function Menu() {
  return (
    <div>
      <Profile />
      <RecentVideos />
      <MenuList />
      <div className="relative flex flex-col gap-2 px-6 pt-6 text-sm leading-5 text-whColor-5">
        <h4 className="text-base font-bold text-white">앱정보</h4>
        <a href="#">이용약관</a>
        <a href="#">개인정보처리방침</a>
        <span className="absolute bottom-0 right-0 text-primary-4">버전:1.18.5</span>
      </div>
    </div>
  );
}

export default Menu;
