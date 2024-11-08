import { Button } from "./ui/button";
import Link from "next/link";
import { CircleUserRound } from "lucide-react";
import { Star } from "lucide-react";
import { BookMarked } from "lucide-react";
import { Settings } from "lucide-react";

const Lateral = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <CircleUserRound className="mt-5 size-20 rounded-full bg-card text-background" />
      </div>
      <div className="flex flex-col items-start">
        <Button className="mb-2 mt-20 text-xl text-card" variant="link">
          <Star />
          Favoritos
        </Button>
        <Button className="mb-2 text-xl text-card" variant="link">
          <Link className="flex flex-row" href="/categorias">
            <BookMarked className="mr-2" />
            Categorias
          </Link>
        </Button>
        <Button className="mb-2 text-xl text-card" variant="link">
          <Settings />
          Configurações
        </Button>
      </div>
    </>
  );
};

export default Lateral;
