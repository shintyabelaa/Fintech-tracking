import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16">
        <div className="p-3 border ">Take Control of Your Money</div>
      </main>
    </div>
  );
}
