"use client";

import Topo from "./components/topo";
import Banner from "./components/banner";
import Conteudo from "./components/conteudomain";
import Image from "next/image";
import fundo from "@/assets/misc/imagen_de_fundo.jpg";

function Home() {
  return (
    <div>
      <div className="flex">
        <div className="relative flex h-screen w-screen flex-col bg-foreground">
          <div className="z-10">
            <Topo />
          </div>
          <div className="z-10">
            <Banner />
          </div>
          <div className="z-10">
            <Conteudo />
          </div>
          <div className="absolute inset-0 opacity-35">
            <Image
              src={fundo}
              alt="image"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
