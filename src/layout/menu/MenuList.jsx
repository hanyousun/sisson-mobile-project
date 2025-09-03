function MenuList() {
  const imgUrl = "/img/menu/menu-icon";
  const listItem = [
    { title: "영상검색", icon: "01.svg" },
    { title: "즐겨찾기", icon: "02.svg" },
    { title: "마이페이지", icon: "03.svg" },
    { title: "설정", icon: "04.svg" },
    { title: "고객센터", icon: "05.svg" },
  ];
  return (
    <div className="px-6 border-b border-bgColor-8">
      <ul className="flex flex-col py-4">
        {listItem.map((item, i) => (
          <li key={i} className="flex items-center h-12">
            <a href="#" className="flex flex-row items-center gap-3">
              <img src={`${imgUrl}${item.icon}`} alt={`${item.title} 아이콘`} />
              <p className="text-lg font-medium">{item.title}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MenuList;
