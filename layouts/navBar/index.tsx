"use client";
import Image from "next/image";
import Brand from "../../assets/svg/logob.svg";


export default function navBar() {
  return (
    <div className="bg-secondary">
             <Image src={Brand} alt="logo Hugo & Thamires" className="h-20 p-3 mx-auto"/>
    </div>
  );
}