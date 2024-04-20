import LogoImage from "@/public/images/dreadskill-logo.png";
import Image from "next/image";
import { FaCopyright, FaInstagram, FaWhatsapp } from "react-icons/fa";

const socialButton =
  "cursor-pointer text-4xl bg-dsOrange hover:bg-dsOrangeDark p-1.5 rounded-full fill-white";

export default function Footer() {
  return (
    <footer className="flex flex-col gap-5 justify-between items-start p-10 md:flex-row md:items-center">
      <div className="flex flex-col gap-2 items-center   md:flex-row">
        <Image src={LogoImage} alt="DreadSkill Logo" className="w-20" />
        <div className="flex flex-col text-start">
          <h4>
            Dread<span className="text-dsOrange">Skill</span>
          </h4>
          <p className="font-medium text-xs">
            Aplicação e manutenção de dreads.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-1 md:flex-row ">
        <p className="flex items-center gap-1 text-xs">
          Copyright <FaCopyright /> DreadSkill.
        </p>
        <p className="text-xs">Todos os direitos reservados.</p>
      </div>

      <div className="flex gap-2">
        <FaInstagram className={socialButton} />
        <FaWhatsapp className={socialButton} />
      </div>
    </footer>
  );
}
