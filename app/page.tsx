import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import { CardSection } from "./components/CardSection";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <HeroSection />
      <main className="flex flex-1 w-full flex-col px-32 py-16">
        <CardSection />
      </main>
    </div>
  );
}
