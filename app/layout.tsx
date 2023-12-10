"use client";

import "../assets/css/globals.css";
import { Roboto_Flex as Roboto } from "next/font/google";
import { ReactNode } from "react";
import Image from "next/image";
import Logo from "../assets/svg/logoc.svg";
import Navbar from "../layouts/navBar";
import Photo from "../components/photo";
import ptBR from "dayjs/locale/pt-br";
import dayjs from "dayjs";

dayjs.locale(ptBR);

const roboto = Roboto({ subsets: ["latin"], variable: "--font-roboto" });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-Br" className="h-full antialiased" suppressHydrationWarning>
      <head>
        <title>Meu app de exemplo</title>
      </head>
      <body
        className={`${roboto.variable} overflow-x-hidden bg-primary font-sans text-white`}
      >
        <Navbar />

        <Photo />
        <div className="p-4">
          <p className=" mx-auto mr-4 mt-10 max-w-screen-md text-left text-sm text-secondary md:mr-auto md:text-lg">
            Prezado(a) convidado(a), <br />
            Caso deseje nos presentear através de um PIX para auxiliar nos
            últimos preparativos do nosso casamento, ficaríamos imensamente
            gratos.
            <br />
            <br />A seguir, disponibilizamos as informações necessárias para que
            você possa efetuar a transferência com comodidade.
          </p>
        </div>
      </body>
    </html>
  );
}
