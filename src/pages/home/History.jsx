import clsx from "clsx";

function History() {
  const data = [
    { day: "Mon", date: 4, today: true },
    { day: "Tue", date: 5, today: false },
    { day: "Wed", date: 6, today: false },
    { day: "Thu", date: 7, today: false },
    { day: "Fri", date: 8, today: false },
    { day: "Sat", date: 9, today: false },
    { day: "sun", date: 10, today: false },
  ];
  const imgs = ["이미지슬라이드1", "이미지슬라이드2", "이미지슬라이드3"];
  return (
    <>
      <div className="mt-3 mb-5">
        <ul className="flex justify-between px-6 text-center">
          {data.map((item, i) => (
            <li
              key={i}
              className={clsx(
                item.today ? "border border-primary-8 rounded-[7px] bg-primary-11" : null
              )}
            >
              <a href="#" className="block px-2.5 py-1.5">
                <span className={clsx(item.today ? "text-primary-1" : "text-white/60", "text-sm")}>
                  {item.day}
                </span>
                <p className={clsx("font-bold", item.today ? "text-primary-1" : "text-white")}>
                  {item.date}
                </p>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="-mr-6 overflow-hidden">
        <ul className="flex justify-between w-screen space-x-3">
          {imgs.map((img, i) => (
            <li
              key={i}
              className="w-1/3 overflow-hidden aspect-square rounded-2xl"
              onClick={() => console.log(`클릭${i}`)}
            >
              <img
                src={`/img/main/main-slide${i}.png`}
                alt={img}
                className="object-cover w-full h-full"
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default History;
