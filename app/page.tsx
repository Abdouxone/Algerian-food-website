import Image from "next/image";
import TopNav from "./components/TopNav";
import Featured from "./components/Featured";
import Delivery from "./components/Delivery";

export default function Home() {
  return (
    <div className="">
      <TopNav />
      <Featured />
      <Delivery />
    </div>
  );
}
