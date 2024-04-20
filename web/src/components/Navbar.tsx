import Link from "next/link";
import Image from "next/image";

import { useState } from "react";
import { FaBars } from "react-icons/fa";

import clsx from "clsx";

import LogoImage from "@/public/images/dreadskill-logo.png";
import Button from "./Button";

interface Link {
  page: string;
  href: string;
}

export default function Navbar() {
  const [active, setActive] = useState(false);

  return (
    <header
      className={clsx(
        "flex flex-col p-4",
        "md:py-6 md:px-10",
        "lg:flex-row lg:justify-between"
      )}
    >
      <div className="flex justify-between items-center lg:justify-start">
        <div className="flex items-center gap-4 cursor-pointer">
          <Image
            src={LogoImage}
            alt="Logo DreadSkill"
            className="w-12 h-12 md:w-24 md:h-24"
          />
          <h1 className="text-4xl font-bold">
            DREAD<span className="text-dsOrange">SKILL</span>
          </h1>
        </div>

        <FaBars
          className="lg:hidden cursor-pointer"
          onClick={() => setActive(!active)}
        />
      </div>

      <Links mobile active={active} />

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
      page: "serviços",
      href: "#servicos",
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
      className={clsx(
        "flex flex-col items-end gap-4",
        "lg:flex-row lg:items-center lg:gap-4",
        "xl:gap-8",
        mobile ? (active ? "flex" : "hidden") : "flex"
      )}
    >
      {links.map((link) => (
        <Link
          className={clsx(
            "font-bold",
            "uppercase underline-offset-4 decoration-2",
            "hover:underline hover:decoration-orange-500"
          )}
          key={link.href}
          href={link.href}
        >
          {link.page}
        </Link>
      ))}

      <Button label="Agendar" />
    </nav>
  );
}
