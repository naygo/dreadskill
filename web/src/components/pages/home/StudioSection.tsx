import Image from "next/image";
import clsx from "clsx";

import Map from "@/public/images/map.png";

import { homePageStyles } from "./styles";

export function StudioSection() {
  return (
    <section
      id="estudio"
      className={clsx(homePageStyles.section, "md:flex-row")}
    >
      <div className="flex flex-col gap-5">
        <h1>O Estúdio</h1>
        <div>
          <p className="font-bold">Endereço</p>
          <p>Rua Rio Grande do Sul, 756</p>
          <p>Barro Preto (próximo a praça Raul Soares)</p>
          <p>Segundo andar, loja 16</p>
        </div>

        <div>
          <p className="font-bold">Contatos</p>
          <p>+55 31 99999-9999</p>
          <p>dreadskill@gmail.com</p>
        </div>
      </div>

      <Image src={Map} alt="Localização estúdio DreadSkill" />
    </section>
  );
}
