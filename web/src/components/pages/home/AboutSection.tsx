import Image from "next/image";
import clsx from "clsx";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

import { WaveBottom, WaveTop } from "@/components/Waves";
import LogoWithLetters from "@/public/images/dreadskill-logo-letters.png";

import { homePageStyles } from "./styles";

const socialButton =
  "cursor-pointer text-4xl bg-dsOrange hover:bg-dsOrangeDark p-1.5 rounded-full fill-white";

export function AboutSection() {
  return (
    <section className={homePageStyles.wave}>
      <WaveTop />
      <WaveBottom />

      <div
        className={clsx(
          homePageStyles.waveContainer,
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id
            eros fringilla, sodales ipsum et, posuere felis. Quisque elit felis,
            tincidunt a ex mattis, ultricies cursus lectus. Donec ipsum lorem,
            pretium et consequat id, auctor in arcu. Morbi arcu nunc, imperdiet
            in elit a, luctus aliquet risus. Duis quis tellus ex. Ut pulvinar
            ipsum non elementum cursus.
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id
            eros fringilla, sodales ipsum et, posuere felis. Quisque elit felis,
            tincidunt a ex mattis, ultricies cursus lectus. Donec ipsum lorem,
            pretium et consequat id, auctor in arcu. Morbi arcu nunc, imperdiet
            in elit a, luctus aliquet risus. Duis quis tellus ex. Ut pulvinar
            ipsum non elementum. Qualquer dúvida, entre em contato conosco pelo
            WhatsApp ou pelo Instagram.
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
  );
}
