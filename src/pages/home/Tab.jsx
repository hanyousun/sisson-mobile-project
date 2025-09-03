import clsx from "clsx";

function Tab({ tab, setTab }) {
  const labels = ["실시간 인기 검색어", "최근 본 영상"];

  return (
    <div>
      <label
        htmlFor="switch"
        className="inline-flex items-center w-full p-1 rounded-full cursor-pointer bg-neutral-800"
      >
        <input
          id="switch"
          type="checkbox"
          className="hidden"
          checked={tab}
          onChange={(e) => {
            setTab(e.target.checked);
            // console.log(tab);
          }}
        />
        {labels.map((label, index) => {
          const isActive = tab === Boolean(index);
          return (
            <span
              key={index}
              className={clsx(
                "w-1/2 py-3 text-sm font-bold text-center rounded-full transition-colors",
                isActive ? "bg-primary-1 text-white" : "bg-neutral-800 text-neutral-400"
              )}
            >
              {label}
            </span>
          );
        })}
      </label>
    </div>
  );
}

export default Tab;
