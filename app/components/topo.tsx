import Lateral from "./menulateral";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Link from "next/link";
import { CircleUserRound } from "lucide-react";
import { Search } from "lucide-react";
import Image from "next/image";
import logo from "@/assets/misc/logo_do_projeto.png";

const Topo = () => {
  return (
    <>
      <div className="flex h-max w-max">
        <Sheet>
          <SheetTrigger>
            <CircleUserRound className="ml-20 size-16 rounded-full bg-card text-background" />
          </SheetTrigger>
          <SheetContent side="left" className="w-60 border-none">
            <Lateral />
          </SheetContent>
        </Sheet>
        <Link href="/">
          <Image
            className="mx-20"
            src={logo}
            width={125}
            height={125}
            alt="image"
          />
        </Link>
        <input
          className="mt-7 h-16 w-[1000px] rounded-l-3xl border-2 border-r-0 border-background bg-card text-lg text-background placeholder:text-background"
          type="text"
          placeholder=" Search..."
        />
        <button className="mt-7 size-32 h-16 w-14 rounded-r-3xl border-2 border-l-0 border-background bg-card text-background">
          <Search />
        </button>
      </div>
    </>
  );
};

export default Topo;
