function Profile() {
  return (
    <div className="flex overflow-hidden rounded-2xl bg-primary-1">
      <div className="relative w-1/2">
        <img
          src="/img/thumbnail/menu-user-img.svg"
          alt="로그인사용자이미지"
          className="object-cover w-full h-full"
        />
        <a
          href="#"
          className="absolute bottom-0 left-0 right-0 flex items-center justify-center gap-2 py-2 text-sm bg-bgColor-4"
        >
          내 채널 바로가기
          <img src="/img/menu/icon-user-channel.svg" alt="내채널바로가기" />
        </a>
      </div>
      <div className="w-1/2">
        <div className="flex flex-col justify-center h-full gap-2 pl-5">
          <h2 className="text-2xl font-bold text-[#fffdcc]">Timothee:)</h2>
          <a href="#" className="flex">
            <span className="pr-1 text-sm font-medium">개인정보수정</span>
            <img src="/img/menu/icon-user-modify.svg" alt="개인정보수정" />
          </a>
          <button className="w-20 mt-3 text-xs font-bold border border-white rounded-full h-7">
            LOGOUT
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
