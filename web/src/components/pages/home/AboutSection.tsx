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
          <Image src={LogoWithLetters} alt="DreadSkill" className="mx-auto" />
        </div>

        <div className="flex flex-col gap-4 md:gap-5 md:max-w-sm lg:max-w-lg xl:max-w-5xl">
          <h1>Sobre nós</h1>
          <p>
            A DreadSkill é uma empresa de cabeleireiro especializada em dreads,
            fundada por Bruno José em 6 de agosto de 2019. Iniciamos nossos
            serviços atendendo em domicílios e ao longo do tempo, nossa empresa
            evoluiu, passando de um atendimento móvel para um espaço
            profissional, impulsionada pela crescente demanda e pelo compromisso
            com a qualidade.
          </p>

          <p>
            Nosso foco atual está em expandir a cultura dos dreads em Belo
            Horizonte e continuar inovando em nosso trabalho. Com uma equipe
            talentosa e apaixonada pelo que faz, a DreadSkill busca se destacar
            não apenas pela qualidade de seus serviços, mas também por oferecer
            uma abordagem única e personalizada a cada cliente. Estamos
            comprometidos em disseminar a cultura dos dreads em BH e oferecer um
            trabalho de excelência.
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
