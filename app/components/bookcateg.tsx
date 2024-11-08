"use client";

import Topo from "./topo";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/components/ui/carousel";
import { Card, CardContent } from "@/app/components/ui/card";

import Image from "next/image";
import pathfinder from "@/assets/books/Pathfinder.jpg";
import cthulhu from "@/assets/books/Call of Cthulhu.jpg";
import dnd from "@/assets/books/DnD_dragonlance.png";
import ordem from "@/assets/books/Ordem.png";
import fundo from "@/assets/misc/imagen_de_fundo.jpg";

const Books = () => {
  const bookData = [
    {
      id: "1",
      imageSrc: <Image src={pathfinder} alt="image" width={250} />,
      name: "Pathfinder",
      desc: "Pathfinder é um jogo de RPG de mesa baseado em um mundo de fantasia. Criado pela Paizo Publishing, conhecido por suas regras detalhadas e pela personalização profunda dos personagens. O jogo se passa em Golarion, um mundo rico em culturas e aventuras.",
    },
    {
      id: "2",
      imageSrc: <Image src={cthulhu} alt="image" width={250} />,
      name: "Call of Cthulhu",
      desc: "Call of Cthulhu é um jogo de RPG de mesa que explora o terror cósmico e o mistério, baseado nas obras de H.P. Lovecraft. Lançado em 1981, o jogo foca em investigadores que enfrentam criaturas e entidades de outros mundos. A mecânica enfatiza a sanidade e a descoberta de segredos aterrorizantes, com menos foco em combate.",
    },
    {
      id: "3",
      imageSrc: <Image src={dnd} alt="image" width={250} />,
      name: "Dungeons & Dragons",
      desc: "Dungeons & Dragons é um jogo de RPG de mesa que se passa em mundos de fantasia. Criado por Gary Gygax e Dave Arneson, é conhecido por suas regras que definem seus desafios. Os jogadores criam personagens únicos e participam de campanhas guiadas por um mestre de jogo.",
    },
    {
      id: "4",
      imageSrc: <Image src={ordem} alt="image" width={250} />,
      name: "Ordem Paranormal",
      desc: "Ordem Paranormal é um RPG nacional criado por Fábio Yabu e ambientado em um universo onde o oculto e o sobrenatural coexistem com o mundo moderno. Os jogadores assumem o papel de agentes de uma ordem secreta que combate ameaças sobrenaturais. O jogo mistura mistério, ação e elementos de terror psicológico.",
    },
  ];

  return (
    <>
      <div className="relative flex h-screen w-screen flex-col bg-foreground">
        <div className="z-10">
          <Topo />
        </div>
        <div className="z-10 flex h-screen w-screen items-center justify-center">
          <div className="w-10/12">
            <Carousel>
              <CarouselContent>
                {bookData.map((bookData) => (
                  <CarouselItem className="basis-1/3" key={bookData.id}>
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex aspect-square p-6">
                          {bookData.imageSrc}
                          <div className="mx-2 flex flex-col justify-between text-center">
                            <h1 className="my-2 font-serif text-2xl">
                              {bookData.name}
                            </h1>
                            <p className="text-start">{bookData.desc}</p>
                            <button className="h-10 rounded-md bg-background text-white">
                              Visualizar
                            </button>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
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
    </>
  );
};

export default Books;
