import Image from "next/image";
import pathfinder from "@/assets/books/Pathfinder.jpg";
import cthulhu from "@/assets/books/Call of Cthulhu.jpg";
import dnd from "@/assets/books/DnD_dragonlance.png";
import ordem from "@/assets/books/Ordem.png";

const Conteudo = () => {
  return (
    <>
      <div className="mt-5 flex justify-between">
        <div className="mx-10 flex h-[545px] w-96 flex-col items-center rounded-2xl border-2 border-background bg-card">
          <Image className="mt-4" src={pathfinder} alt="image" width={350} />
          <h1 className="my-5 font-serif text-2xl text-background">
            Pathfinder
          </h1>
        </div>
        <div className="mx-10 flex h-[545px] w-96 flex-col items-center rounded-2xl border-2 border-background bg-card">
          <Image className="mt-4" src={cthulhu} alt="image" width={350} />
          <h1 className="my-5 font-serif text-2xl text-background">
            Call of Cthulhu
          </h1>
        </div>
        <div className="mx-10 flex h-[545px] w-96 flex-col items-center rounded-2xl border-2 border-background bg-card">
          <Image className="mt-4" src={dnd} alt="image" width={350} />
          <h1 className="my-5 font-serif text-2xl text-background">
            Dungeons & Dragons
          </h1>
        </div>
        <div className="mx-10 flex h-[545px] w-96 flex-col items-center rounded-2xl border-2 border-background bg-card">
          <Image className="mt-4" src={ordem} alt="image" width={350} />
          <h1 className="my-5 font-serif text-2xl text-background">
            Ordem Paranormal
          </h1>
        </div>
      </div>
    </>
  );
};

export default Conteudo;
