import React from "react";
import { Typewriter, useTypewriter, Cursor } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
// import Image from "next/image";
type Props = {};
import ppImg from "../assets/pp.jpg";
import Link from "next/link";
import Image from "next/image";

const ppImage = ppImg;

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: [
      "Hi, my name is Murat Can Yüksel",
      "Web Developer",
      "Full Stack Developer",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className=" h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        src={ppImage}
        alt=""
        className="relative rounded-full h-32 w-32 mx-auto"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Blockchain developer
        </h2>
        <div className="">
          <h1 className="text-5xl lg:text-6xl font-semibold px-10">
            <span className="mr-3"> {text} </span>
            <Cursor cursorColor="#F7AB0A" />
          </h1>

          <div className="pt-5">
            <Link href="/#about">
              <button className="heroButton">About </button>
            </Link>
            <Link href="/#experience">
              <button className="heroButton">Experience </button>
            </Link>
            <Link href="/#skills">
              <button className="heroButton">Skills </button>
            </Link>
            <Link href="/#projects">
              <button className="heroButton">Projects </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
