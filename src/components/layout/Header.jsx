import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-between h-20 pt-5 pl-4 pr-5 bg-black">
      <button className="px-4 pb-2" onClick={() => navigate("/")}>
        <img src="/img/icon/icon-back-btn.svg" alt="뒤로가기" />
      </button>
      <button className="ml-auto" onClick={() => navigate("/menu")}>
        <img src="/img/icon/icon-menu.svg" alt="메뉴" />
        <p className="text-xs font-medium leading-5">menu</p>
      </button>
    </header>
  );
}
export default Header;
