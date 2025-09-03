import { useState } from "react";

function Search() {
  let [keyWord, setKeyWord] = useState(false);
  return (
    <section>
      <div className="px-2 pb-8">
        <span className="text-sm font-bold text-neutral-400">Have a GoodDay:)</span>
        <h1 className="pt-2.5 text-[29px] font-bold leading-10 tracking-tighter ">
          오늘도 당신의
          <br />
          새로운 일상을 <span className="text-primary-2">검색</span>하세요
        </h1>
      </div>
      <div className="relative">
        <input
          type="search"
          placeholder="검색어를 입력하세요"
          className="w-full px-6 bg-black border border-white rounded-full h-14 placeholder-neutral-400 focus:border-primary-4"
          onClick={() => {
            setKeyWord(!keyWord);

            console.log(keyWord);
          }}
        />
        <button className="absolute w-6 h-6 top-3.5 right-5">
          <img src="/img/icon/icon-search-btn.svg" alt="검색하기" />
        </button>
      </div>
      <div className="absolute left-0 z-10 w-full bg-bgColor-1 rounded-b-3xl">
        <div>{keyWord ? <SearchKeyWord /> : null}</div>
      </div>
    </section>
  );
}

function SearchKeyWord() {
  let keyWords = [
    "배낭여행",
    "우정여행",
    "해외여행",
    "가이드투어",
    "관광여행",
    "비지니스여행",
    "모험여행",
    "문화여행",
    "생태여행",
    "의료관광",
    "도전적여행",
    "음식여행",
    "호화여행",
    "가족여행",
    "단체여행",
    "유적지탐방",
    "역사투어",
    "뚜벅이여행",
    "기차여행",
    "버스여행",
    "도시여행",
    "박물관투어",
    "문화투어",
    "국내여행",
  ];
  return (
    <ul className="mx-12 px-7 py-4 flex-wrap justify-start flex gap-y-1 gap-x-2 bg-whColor-13  rounded-b-3xl">
      {keyWords.map((keyWord, i) => (
        <li key={i}>
          <a href="#">{keyWord}</a>
        </li>
      ))}
    </ul>
  );
}

export default Search;
