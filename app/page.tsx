import Image from "next/image";
import TopNav from "./components/TopNav";
import Featured from "./components/Featured";

export default function Home() {
  return (
    <div className="">
      <TopNav />
      <Featured />
    </div>
  );
}
