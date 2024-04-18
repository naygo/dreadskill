import { useState } from "react";
import Link from "next/link";

import LogoImage from "@/public/images/dreadskill-logo.png";
import Image from "next/image";
import { FaBars } from "react-icons/fa";

interface Link {
  page: string;
  href: string;
}

export function Navbar() {
  const [active, setActive] = useState(false);

  return (
    <header className="flex flex-col gap-4 py-8 md:p-8 lg:flex-row lg:justify-between">
      <div className="flex justify-center items-center gap-4 lg:justify-start">
        <Image
          src={LogoImage}
          alt="Logo DreadSkill"
          className="w-12 h-12 md:w-24 md:h-24"
        />
        <h1 className="text-4xl font-bold">
          DREAD<span className="text-dsOrange">SKILL</span>
        </h1>

        <FaBars
          className="lg:hidden cursor-pointer"
          onClick={() => setActive(!active)}
        />
      </div>

      <div className="md:flex lg:hidden justify-center">
        <Links mobile active={active} />
      </div>
      <div className="hidden lg:flex">
        <Links />
      </div>
    </header>
  );
}

function Links({ active, mobile }: { active?: boolean; mobile?: boolean }) {
  const links: Link[] = [
    {
      page: "sobre",
      href: "#sobre",
    },
    {
      page: "depoimentos",
      href: "#depoimentos",
    },
    {
      page: "equipe",
      href: "#equipe",
    },
    {
      page: "estúdio",
      href: "#estudio",
    },
    {
      page: "galeria",
      href: "galeria",
    },
  ];
  return (
    <nav
      className={`flex flex-col items-center gap-8 lg:flex-row 
        ${mobile ? (active ? "flex" : "hidden") : "flex"}
      `}
    >
      {links.map((link) => (
        <Link
          className="text-sm uppercase decoration-2 underline-offset-4 font-bold hover:underline hover:decoration-orange-500 lg:text-base"
          key={link.href}
          href={link.href}
        >
          {link.page}
        </Link>
      ))}

      <button className="text-white cursor-pointer border-0 rounded bg-dsOrange hover:bg-dsOrangeDark px-4 py-2">
        Agendar
      </button>
    </nav>
  );
}
