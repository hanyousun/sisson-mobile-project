import { Link } from "react-router-dom";

function RecentVideos() {
  const imgUrl = "/img/thumbnail/menu-movie-thumbnail";
  const videosList = [
    { title: "드라이 할 때 들으면 좋은 노래", img: "0.svg" },
    { title: "미간에 주름 팍 노래", img: "1.svg" },
    { title: "복잡한 생각은 싹싹", img: "2.svg" },
  ];
  return (
    <div className="px-4 pt-6 border-b border-white/15">
      <div className="px-2 pt-1">
        <Link to="/video" className="flex items-center justify-between">
          <h3 className="text-lg font-bold">최근 본 영상</h3>
          <img src="/img/icon/icon-title-more.svg" alt="최근 본 영상 더보기" />
        </Link>
      </div>
      <ul className="grid grid-cols-3 gap-2 px-2 pb-6 mt-3 font-medium">
        {videosList.map((item, i) => (
          <li key={i}>
            <a href="#">
              <img src={`${imgUrl}${item.img}`} alt={`${item.title} 썸네일`} className="w-full" />
              <p className="mt-2 truncate">[Playlist] {item.title}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecentVideos;
