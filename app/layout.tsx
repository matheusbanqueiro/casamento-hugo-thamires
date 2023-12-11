"use client";

import "../assets/css/globals.css";
import { Roboto_Flex as Roboto } from "next/font/google";
import { ReactNode } from "react";
import Navbar from "../layouts/navBar";
import Photo from "../components/photo";
import Pix from "../components/pix";
import ptBR from "dayjs/locale/pt-br";
import dayjs from "dayjs";

dayjs.locale(ptBR);

const roboto = Roboto({ subsets: ["latin"], variable: "--font-roboto" });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-Br" className="h-full antialiased" suppressHydrationWarning>
      <head>
        <title>Hugo & Thamires</title>
      </head>
      <body
        className={`${roboto.variable} overflow-x-hidden bg-primary font-sans text-white`}
      >
        <Navbar />

        <Photo />
     
          <p className="mt-10 text-center text-secondary text-sm md:text-lg ">
            Prezado(a) convidado(a), <br />
            Caso deseje nos presentear através de um <br />PIX para auxiliar nos
            últimos preparativos do <br />nosso casamento, ficaríamos imensamente
            gratos.
            <br />
            <br />A seguir, disponibilizamos as informações necessárias<br /> para que
            você possa efetuar a transferência com comodidade.
          </p>
          <Pix />
      </body>
    </html>
  );
}
