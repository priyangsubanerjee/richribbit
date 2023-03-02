import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Calculator from "@/sections/Calculator";
import Community from "@/sections/Community";
import Compare from "@/sections/Compare";
import Introduction from "@/sections/Introduction";
import MAQ from "@/sections/MAQ";
import Rewards from "@/sections/Rewards";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Introduction />
      <Rewards />
      <Calculator />
      <Compare />
      <MAQ />
      <Community />
      <Footer />
    </div>
  );
}
