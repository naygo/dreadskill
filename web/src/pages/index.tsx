import Head from "next/head";
import Image from "next/image";

import clsx from "clsx";

import { Navbar } from "@/components/Navbar";

import LogoWithLetters from "@/public/images/dreadskill-logo-letters.png";
import Person1 from "@/public/images/person1.jpg";
import Person2 from "@/public/images/person2.jpg";
import Person3 from "@/public/images/person3.jpg";
import Person4 from "@/public/images/person4.jpg";
import DivisorImage from "@/public/images/divisor.svg";
import DreadP from "@/public/images/dreadP.jpeg";
import DreadM from "@/public/images/dreadM.jpeg";
import DreadG from "@/public/images/dreadG.jpeg";

import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import { WaveBottom, WaveTop } from "@/components/Waves";

const sectionStyle = "px-4 lg:px-10 md:py-10";
const sectionContainerStyle = "container mx-auto flex flex-col gap-5 md:gap-10";
const socialButton =
  "cursor-pointer text-4xl bg-dsOrange hover:bg-dsOrangeDark p-1.5 rounded-full fill-white";

export default function Home() {
  return (
    <>
      <Head>
        <title>DreadSkill</title>
        <meta name="description" content="Aplicação e manutenção de dreads." />
      </Head>

      <Navbar />

      <section
        className={clsx(
          "flex flex-col p-4 pt-0 gap-2",
          "lg:flex-row lg:px-10",
          "h-[calc(100vh-80px)] md:h-[calc(100vh-136px)]"
        )}
      >
        <ImageCard src={Person1} />
        <ImageCard src={Person2} />
        <ImageCard src={Person3} />
        <ImageCard src={Person4} />
      </section>

      <main className="mx-auto flex flex-col gap-10 md:gap-0 md:mt-12">
        <section
          className={clsx(
            sectionStyle,
            "relative bg-neutral-300 dot-background"
          )}
        >
          <div className="absolute dot-background"></div>
          <WaveTop />
          <WaveBottom />

          <div
            className={clsx(
              "container mx-auto flex shrink gap-10",
              "pb-12 pt-16",
              "lg:pt-44 lg:pb-36"
            )}
          >
            <div className="hidden md:block bg-neutral-100 rounded-full p-2 h-fit">
              <Image
                src={LogoWithLetters}
                alt="DreadSkill"
                className="lg:w-12/12 xl:w-11/12 mx-auto"
              />
            </div>

            <div className="flex flex-col gap-4 md:gap-5">
              <h1>Conheça nosso trabalho</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                id eros fringilla, sodales ipsum et, posuere felis. Quisque elit
                felis, tincidunt a ex mattis, ultricies cursus lectus. Donec
                ipsum lorem, pretium et consequat id, auctor in arcu. Morbi arcu
                nunc, imperdiet in elit a, luctus aliquet risus. Duis quis
                tellus ex. Ut pulvinar ipsum non elementum cursus.
              </p>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                id eros fringilla, sodales ipsum et, posuere felis. Quisque elit
                felis, tincidunt a ex mattis, ultricies cursus lectus. Donec
                ipsum lorem, pretium et consequat id, auctor in arcu. Morbi arcu
                nunc, imperdiet in elit a, luctus aliquet risus. Duis quis
                tellus ex. Ut pulvinar ipsum non elementum. Qualquer dúvida,
                entre em contato conosco pelo WhatsApp ou pelo Instagram.
              </p>

              <div className="flex gap-4">
                <Image
                  src={LogoWithLetters}
                  alt="DreadSkill"
                  className="w-5/12 md:hidden bg-neutral-100 rounded-full p-2"
                />
                <div className="flex flex-col gap-4">
                  <p className="text-xs md:text-base">
                    Nos siga no Instagram, acompanhe nosso trabalho e fique por
                    dentro das novidades!
                  </p>
                  <div className="flex gap-2">
                    <FaInstagram className={socialButton} />
                    <FaWhatsapp className={socialButton} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="servicos"
          className={clsx(sectionStyle, sectionContainerStyle)}
        >
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-5">
            <h1>Serviços oferecidos</h1>
            <div className="bg-dsOrange flex items-center justify-center py-2 px-4 rounded relative w-fit">
              <div className="absolute bg-transparent border-2 border-neutral-100 w-[95%] h-5/6 rounded"></div>
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

        <Divisor />

        <section
          id="depoimentos"
          className={clsx(sectionStyle, sectionContainerStyle)}
        >
          <h1>Depoimentos</h1>

          <div className="grid gap-10 md:gap-16 lg:gap-x-8 lg:gap-y-16 lg:grid-cols-2">
            <DepoimentsCard
              src={Person1}
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id eros fringilla, sodales ipsum et, posuere felis. Quisque elit felis, tincidunt a ex mattis, ultricies cursus lectus. Donec ipsum lorem, pretium et consequat id, auctor in arcu. Morbi arcu nunc, imperdiet in elit a, luctus aliquet risus."
            />
            <DepoimentsCard
              src={Person2}
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id eros fringilla, sodales ipsum et, posuere felis. Quisque elit felis, tincidunt a ex mattis, ultricies cursus lectus. Donec ipsum lorem, pretium et consequat id, auctor in arcu. Morbi arcu nunc, imperdiet in elit a, luctus aliquet risus."
            />
            <DepoimentsCard
              src={Person3}
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id eros fringilla, sodales ipsum et, posuere felis. Quisque elit felis, tincidunt a ex mattis, ultricies cursus lectus. Donec ipsum lorem, pretium et consequat id, auctor in arcu. Morbi arcu nunc, imperdiet in elit a, luctus aliquet risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id eros fringilla, sodales ipsum et, posuere felis. Quisque elit felis, tincidunt a ex mattis, ultricies cursus lectus. Donec ipsum lorem, pretium et consequat id, auctor in arcu. Morbi arcu nunc, imperdiet in elit a, luctus aliquet risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id eros fringilla, sodales ipsum et, posuere felis. Quisque elit felis, tincidunt a ex mattis, ultricies cursus lectus. Donec ipsum lorem, pretium et consequat id, auctor in arcu. Morbi arcu nunc, imperdiet in elit a, luctus aliquet risus."
            />
          </div>
        </section>
      </main>

      <ScrollToTopButton />
      <footer className="h-24 p-10 text-center">copyright dreadskill c</footer>
    </>
  );
}

function Divisor() {
  return (
    <Image
      id="sobre"
      src={DivisorImage}
      alt="Divisor"
      className="mx-auto px-4 lg:px-10 xl:px-0"
    />
  );
}

function ImageCard({ src }: { src: any }) {
  return (
    <div className="h-full w-full bg-dsBrown relative">
      <div
        className={clsx(
          "absolute w-full h-full z-10",
          "bg-gradient-to-b from-[#e7730070] to-[#81400090]",
          "hover:from-[#e7730020] hover:to-[#81400030]"
        )}
      ></div>
      <Image
        src={src}
        alt="Dread"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
    </div>
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
        objectPosition="start"
        className="w-full h-full object-cover object-top rounded"
      />
    </div>
  );
}

function DepoimentsCard({ src, text }: { src: any; text: string }) {
  return (
    <div
      className={clsx(
        "flex flex-col items-center",
        "md:flex-row md:relative",
        text.length > 310 && "lg:col-span-2 "
      )}
    >
      <Image
        src={src}
        alt="Depoimento"
        className={clsx(
          "w-60 h-60 object-cover rounded-full z-10",
          "md:absolute md:-top-4 left-0"
        )}
      />
      <div
        className={clsx(
          "bg-neutral-100 rounded border-2 border-dsBrown shadow-brown",
          "relative flex min-h-48",
          "-mt-10 md:m-0 md:ml-20"
        )}
      >
        <p className="p-4 pt-10 md:pl-44 md:p-4">{text}</p>
      </div>
    </div>
  );
}
