import { useState } from "react";

import Search from "./home/HomeSearch";
import KeyWord from "./home/KeyWord";
import History from "./home/History";
import Tab from "./home/Tab";

function Home() {
  let [tab, setTab] = useState(false);

  return (
    <div className="flex flex-col justify-between flex-1">
      <Search />
      <section className="mt-auto mb-8">
        <div className="px-3.5">{tab ? <History /> : <KeyWord />}</div>
      </section>
      <Tab tab={tab} setTab={setTab} />
    </div>
  );
}

export default Home;
