"use client";
import Image from "next/image";
import Juntos from "../../assets/svg/juntos.svg";
import Logo from "../../assets/svg/logob.svg";

export default function Photo() {
  return (
    <div className="relative ">
      <div className=" absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
        <Image
          src={Logo}
          alt="logo Hugo & Thamires"
          className="opacity-20  h-32 md:h-auto"
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
