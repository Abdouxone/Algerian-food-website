import Image from "next/image";
import TopNav from "./components/TopNav";
import Featured from "./components/Featured";
import Delivery from "./components/Delivery";
import TopPicks from "./components/TopPicks";
import Meal from "./components/Meal";

export default function Home() {
  return (
    <div className="">
      <TopNav />
      <Featured />
      <Delivery />
      <TopPicks />
      <Meal />
    </div>
  );
}
