const keywords = [
  ["아이브 신곡 MV,", "text-2xl font-bold"],
  ["영화리뷰,", "text-lg text-neutral-400"],
  ["먹방,", "text-xl text-neutral-300"],
  ["여행 브이로그,", "text-xl text-neutral-300"],
  ["고양이사랑해,", "text-2xl font-bold"],
  ["PlayList,", "text-2xl font-bold"],
  ["게임,", "text-xl text-neutral-300"],
  ["지구오락실,", "text-lg text-neutral-400"],
  ["뉴스,", "text-xl text-neutral-300"],
  ["드라마1시간요약,", "text-lg text-neutral-400"],
  ["티모시샬라메", "text-2xl font-bold"],
];

function KeyWord() {
  return (
    <ul className="flex flex-wrap items-end justify-center gap-2.5 tracking-tight text-center">
      {keywords.map(([keyword, style], i) => (
        <li key={i} className={style}>
          <a href="#">{keyword}</a>
        </li>
      ))}
    </ul>
  );
}

export default KeyWord;
