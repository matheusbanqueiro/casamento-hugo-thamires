"use client";
import { useState } from "react";
import Image from "next/image";
import pix from "../../assets/svg/pix.svg";
import Copy from "../../assets/svg/copy.svg";
import Check from "../../assets/svg/check.svg";
import Qrcode from "../../assets/svg/qrcode.svg";

export default function Pix() {
  const [cpf, setCPF] = useState("363.785.728-60");
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(cpf);
    setCopied(true);

    // Resetar a mensagem de "copiado" após alguns segundos
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="gap-6 md:flex justify-center p-10">
      <div className="flex flex-col items-center justify-center gap-4 p-6">
        <Image src={pix} alt="pix" height={40} />

        <p className="text-xl font-bold text-terciary">PIX(CPF)</p>

        {copied && (
          <span className="absolute inline-flex items-center rounded-md bg-primary px-2 py-1 text-sm font-medium text-secondary shadow-lg ring-1 ring-inset ring-gray-500/10">
            <Image src={Check} alt="copiado" className="mr-2" />
            Chave pix copiada com sucesso!
          </span>
        )}
        <div className="flex rounded-md bg-terciary p-3 text-xl font-bold">
          <span>{cpf}</span>
          <button
            className="ml-2 flex cursor-pointer"
            onClick={copyToClipboard}
          >
            <Image src={Copy} alt="copiar pix" />
          </button>
        </div>
      </div>
      <div>
        <Image src={Qrcode} alt="qrcode" className="mx-auto mt-5" height={250} />
      </div>
    </div>
  );
}
