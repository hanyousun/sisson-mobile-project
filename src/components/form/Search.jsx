function Search() {
  return (
    <div class="relative">
      <input
        type="search"
        class="h-11 w-full rounded-full bg-whColor-11 pl-6 pr-12 placeholder-whColor-6"
        placeholder="검색"
      />
      <button class="absolute right-0 top-0 h-11 w-11">
        <img src="/img/icon/icon-search-btn.svg" alt="검색하기" />
      </button>
    </div>
  );
}

export default Search;
