/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect } from "react";

import eveImg from "../../public/eve.png";
import Image from "next/image";

export default function DiasSemEx() {
  const [dias, setDias] = useState(0);
  const [contadorAnimado, setContadorAnimado] = useState(0);
  const [emoji, setEmoji] = useState("");

  const emojis = {
    0: "😭",
    1: "😡",
    2: "😐",
    3: "😠",
    15: "😜",
    30: "😝",
    45: "👍",
    60: "😍",
    90: "🤩",
    120: "🥵",
    180: "🐦‍🔥",
  };

  useEffect(() => {
    const dataInicial = new Date("2024-11-24"); // Substitua pela data real
    const hoje = new Date();
    const diferenca = hoje.getTime() - dataInicial.getTime();
    const diasPassados = Math.floor(diferenca / (1000 * 3600 * 24));

    // Animação de contagem crescente
    let inicio = 0;
    const duracao = 1000; // 2 segundos de duração da animação
    const incremento = 50; // Atualiza a cada 50ms

    setDias(diasPassados);

    if (diasPassados === 0) setEmoji(emojis[0]);
    else if (diasPassados === 1) setEmoji(emojis[1]);
    else if (diasPassados === 2) setEmoji(emojis[2]);
    else if (diasPassados === 3) setEmoji(emojis[2]);
    else if (diasPassados > 3 && diasPassados <= 15) setEmoji(emojis[3]);
    else if (diasPassados > 15 && diasPassados <= 30) setEmoji(emojis[15]);
    else if (diasPassados > 30 && diasPassados <= 45) setEmoji(emojis[30]);
    else if (diasPassados > 45 && diasPassados <= 60) setEmoji(emojis[45]);
    else if (diasPassados > 60 && diasPassados <= 90) setEmoji(emojis[60]);
    else if (diasPassados > 90 && diasPassados <= 120) setEmoji(emojis[90]);
    else if (diasPassados > 120 && diasPassados <= 180) setEmoji(emojis[120]);
    else if (diasPassados > 180) setEmoji(emojis[180]);

    const timer = setInterval(() => {
      inicio += incremento;
      setContadorAnimado(
        Math.min(Math.floor(diasPassados * (inicio / duracao)), diasPassados)
      );

      if (inicio >= duracao) {
        clearInterval(timer);
      }
    }, incremento);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col px-6 items-center justify-center bg-gradient-to-r py-10 from-purple-400 via-pink-500 to-red-500">
      <div className="flex gap-4 items-center mb-8">
        <Image
          src={eveImg}
          alt="Eve"
          width={64}
          height={64}
          className="rounded-full shrink-0 h-full"
        />
        <h1 className="text-3xl font-bold text-white ">
          Dias que a Evellyn está sem falar com o ex
        </h1>
      </div>
      <div className="text-9xl font-bold text-white mb-8 animate-pulse">
        {contadorAnimado}
      </div>
      <p className="text-2xl text-white text-center max-w-md">
        <span className="text-4xl">{emoji}</span> Bora Evellyn, porra!
      </p>
      <div>
        <h3 className="text-xl font-semibold text-white mb-4 text-center mt-10">
          Metas
        </h3>
        <ol className="text-white [&_li]:px-4 [&_li]:py-2 [&_li]:bg-white [&_li]:rounded-md [&_li]:mb-2 [&_li]:text-gray-800 w-[250px] max-w-full flex flex-col [&_li]:w-full [&_li]:pb-3 [&_li]:flex [&_li]:gap-2 [&_li]:relative [&_span]:text-sm [&_span]:flex [&_span]:items-center [&_span]:justify-center [&_span]:bg-purple-400  [&_span]:px-2 [&_span]:rounded-md [&_span]:text-white">
          <li>
            🔒{dias} / 30 dias <span>{((dias / 30) * 100).toFixed(0)}%</span>
            <div
              className="absolute bottom-0 left-0 h-2 bg-gradient-to-r bg-purple-400 rounded-sm from-green-300  to-green-500"
              style={{
                width: `${((dias / 30) * 100).toFixed(0)}%`,
              }}
            ></div>
          </li>
          <li>
            🔒{dias > 30 && <>{dias} /</>} 60 dias{" "}
            {dias > 30 && <span>{((dias / 60) * 100).toFixed(0)}%</span>}
            <div
              className="w-1 absolute bottom-0 left-0 h-2 bg-gradient-to-r bg-purple-400 rounded-sm from-green-300  to-green-500"
              // style={{
              //   width: `${((dias / 60) * 100).toFixed(0)}%`,
              // }}
            ></div>
          </li>
          <li>
            🔒{dias > 60 && <>{dias} /</>} 90 dias{" "}
            {dias > 60 && <span>{((dias / 90) * 100).toFixed(0)}%</span>}
            <div
              className="w-1 absolute bottom-0 left-0 h-2 bg-gradient-to-r bg-purple-400 rounded-sm from-green-300  to-green-500"
              // style={{
              //   width: `${((dias / 90) * 100).toFixed(0)}%`,
              // }}
            ></div>
          </li>
          <li>
            🔒{dias > 90 && <>{dias} /</>} 120 dias{" "}
            {dias > 90 && <span>{((dias / 120) * 100).toFixed(0)}%</span>}
            <div
              className="w-1 absolute bottom-0 left-0 h-2 bg-gradient-to-r bg-purple-400 rounded-sm from-green-300  to-green-500"
              // style={{
              //   width: `${((dias / 120) * 100).toFixed(0)}%`,
              // }}
            ></div>
          </li>
          <li>
            🔒{dias > 120 && <>{dias} /</>} 180 dias{" "}
            {dias > 120 && <span>{((dias / 180) * 100).toFixed(0)}%</span>}
            <div
              className="w-1 absolute bottom-0 left-0 h-2 bg-gradient-to-r bg-purple-400 rounded-sm from-green-300  to-green-500"
              // style={{
              //   width: `${((dias / 180) * 100).toFixed(0)}%`,
              // }}
            ></div>
          </li>
        </ol>
      </div>
    </div>
  );
}
