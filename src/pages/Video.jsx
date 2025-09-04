import { useContext, useMemo, useState } from "react";
import clsx from "clsx";
import { VideoContext } from "../contexts/VideoContext";
import Search from "../components/form/Search";

function Video() {
  // 비디오 목록 가져오기
  const videoList = useContext(VideoContext);
  // 팝업 동작
  let [popUp, setPopUp] = useState(false);
  const popUpList = [
    { title: "기본정렬(자동)", data: "id" },
    { title: "업데이트순", data: "uploadedAt" },
    { title: "조회수 많은순", data: "views" },
    { title: "좋아요 많은순", data: "like" },
  ];
  // 정렬하기
  const [order, setOrder] = useState("id");
  const sortItem = useMemo(() => {
    return [...videoList].sort((a, b) => b[order] - a[order]);
  }, [order, videoList]);
  const currentOrder = popUpList.find((item) => item.data === order)?.title;

  return (
    <>
      <Search />
      <div className="flex justify-between px-1 mt-5 mb-5 text-sm">
        <a href="#" className="flex items-center">
          {currentOrder}
          <img src="/img/icon/icon-list-align.svg" alt="리스트정렬" className="inline-block pl-1" />
        </a>
        <a href="#" className="flex items-center">
          편집
        </a>
      </div>

      <div>
        <ul>
          {sortItem.map((item, i) => (
            <li key={item.id} onClick={() => setPopUp(!popUp)} className="flex gap-3 mb-2">
              <img
                src={item.img}
                alt={item.description}
                className="w-[130px] h-[73px] object-cover rounded-lg shrink-0"
              />
              <div className="flex flex-col justify-center flex-1">
                <h4 className="font-bold text-white truncate">{item.title}</h4>
                <div className="flex items-center gap-1 text-sm text-whColor-3">
                  <p>{item.views}</p>
                  <span className="text-whColor-9">|</span>
                  <p>{item.uploadedAt}</p>
                </div>
                <p className="text-sm font-medium text-primary-8">{item.user}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {popUp ? (
        <Popup setPopUp={setPopUp} order={order} setOrder={setOrder} popUpList={popUpList} />
      ) : null}
    </>
  );
}

function Popup({ setPopUp, order, setOrder, popUpList }) {
  return (
    <div className="absolute top-0 left-0 z-50 w-full h-full bg-bgColor-2">
      <div className="fixed bottom-0 w-full px-4 py-5 space-y-2 rounded-t-2xl bg-bgColor-6">
        <div className="flex items-center justify-between pb-1 font-bold">
          <h2>영상 정렬 리스트</h2>
          <button onClick={() => setPopUp(false)}>
            <img src="/img/icon/icon-popup-close.svg" alt="팝업닫기" />
          </button>
        </div>
        {popUpList.map((item, i) => (
          <button
            className={clsx(
              "h-11 w-full rounded-full text-sm text-white",
              order === item.data ? "bg-primary-1 font-bold" : "bg-whColor-12"
            )}
            key={i}
            onClick={() => {
              setOrder(item.data);
              setPopUp(false);
            }}
          >
            {item.title}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Video;
