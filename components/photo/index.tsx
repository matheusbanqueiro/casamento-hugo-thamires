"use client";
import Image from "next/image";
import Juntos from "../../assets/svg/juntos.svg";
import Logo from "../../assets/svg/logob.svg";

export default function Photo() {
  return (
    
    <div className="relative ">
      <div className=" absolute -left-16 md:left-48 md:top-10 top-2">
        <Image
          src={Logo}
          alt="logo Hugo & Thamires"
          className="opacity-30  h-32 md:h-auto"
        />
      </div>
      <Image
        src={Juntos}
        alt="foto Hugo & Thamires"
        className="mx-auto mt-5 rounded-xl h-36 md:h-auto"
      />
    </div>
  );
}
