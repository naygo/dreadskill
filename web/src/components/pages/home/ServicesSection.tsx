import Image from "next/image";
import clsx from "clsx";

import DreadP from "@/public/images/dreadP.jpeg";
import DreadM from "@/public/images/dreadM.jpeg";
import DreadG from "@/public/images/dreadG.jpeg";

import { homePageStyles } from "./styles";

export function ServicesSection() {
  return (
    <section id="servicos" className={homePageStyles.section}>
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-5">
        <h1>Serviços oferecidos</h1>
        <div className="bg-dsOrange flex items-center justify-center py-2 px-4 rounded relative w-fit">
          <div className="absolute bg-transparent border-2 border-neutral-100 w-[96%] h-[78%] rounded"></div>
          <h2 className="text-xs md:text-sm lg:text-base text-white">
            Também cortamos cabelo!
          </h2>
        </div>
      </div>
      <div className="flex flex-col gap-5 md:gap-14 justify-center w-full h-full md:flex-row">
        <ServicesCard src={DreadP} dreadSize="P" />
        <ServicesCard src={DreadM} dreadSize="M" />
        <ServicesCard src={DreadG} dreadSize="G" />
      </div>
    </section>
  );
}

function ServicesCard({
  src,
  dreadSize,
}: {
  src: any;
  dreadSize: "P" | "M" | "G";
}) {
  return (
    <div className="shrink shadow-brown rounded relative w-11/12 md:w-full">
      <div
        className={clsx(
          "w-12 h-12 rounded-full bg-dsBrown",
          "lg:w-14 lg:h-14",
          "flex items-center justify-center",
          "absolute right-[-15px] top-[-10px]"
        )}
      >
        <div
          className={clsx(
            "w-10 h-10 rounded-full bg-transparent",
            "lg:w-12 lg:h-12",
            "border-2 border-neutral-100",
            "absolute"
          )}
        ></div>
        <h2 className="text-2xl lg:text-4xl text-neutral-100 tracking-tighter">
          {dreadSize}
        </h2>
      </div>
      <Image
        src={src}
        alt="Modelo de Dread"
        className="w-full h-full object-cover object-top rounded"
      />
    </div>
  );
}
