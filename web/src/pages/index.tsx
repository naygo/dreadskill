import Head from "next/head";
import Image from "next/image";

import clsx from "clsx";

import { Navbar } from "@/components/Navbar";

import LogoWithLetters from "@/public/images/dreadskill-logo-letters.png";
import Person1 from "@/public/images/person1.jpg";
import Person2 from "@/public/images/person2.jpg";
import Person3 from "@/public/images/person3.jpg";
import Person4 from "@/public/images/person4.jpg";
import Divisor from "@/public/images/divisor.svg";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const sectionStyle = "px-4 lg:px-10 md:py-10";
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

      <main className="container mx-auto flex flex-col gap-5 mt-5">
        <Image src={Divisor} alt="Divisor" className="mx-auto px-4 lg:px-10 xl:px-0" />

        <section id="sobre" className={clsx(sectionStyle, "flex flex-col")}>
          <div className="flex flex-col md:flex-row gap-5 md:gap-10">
            <div className="hidden md:block">
              <Image
                src={LogoWithLetters}
                alt="DreadSkill"
                className="lg:w-12/12 xl:w-11/12"
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
                  className="w-5/12 md:hidden"
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

        <section id="servicos-oferecidos" className={clsx(sectionStyle, "")}>
          <h1>Serviços oferecidos</h1>
        </section>
      </main>

      <footer className="h-24 p-10 text-center">copyright dreadskill c</footer>
    </>
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
