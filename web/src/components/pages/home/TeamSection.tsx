import Image from "next/image";
import clsx from "clsx";

import Person1 from "@/public/images/person1.jpg";

import { homePageStyles } from "./styles";

interface Team {
  name: string;
  description: string;
}

const team: Team[] = [
  {
    name: "Bruno José",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id eros fringilla, sodales ipsum et, posuere felis.",
  },
  {
    name: "Primo do Bruno",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id eros fringilla, sodales ipsum et, posuere felis.",
  },
];

export function TeamSection() {
  return (
    <section id="equipe" className={homePageStyles.section}>
      <h1>Conheça nossa equipe</h1>
      <div className="flex flex-col justify-center gap-5 md:flex-row md:gap-24">
        {team.map((person) => (
          <TeamCard
            key={person.name}
            name={person.name}
            descripton={person.description}
            src={Person1}
          />
        ))}
      </div>
    </section>
  );
}

function TeamCard({
  name,
  descripton,
  src,
}: {
  name: string;
  descripton: string;
  src: any;
}) {
  return (
    <div
      className={clsx(
        homePageStyles.card,
        "flex flex-col items-center p-4"
      )}
    >
      <Image
        src={src}
        alt={name}
        className="w-52 h-52 object-cover rounded-full"
      />
      <div className="text-center mt-4">
        <h2 className="text-dsOrange mb-2">{name}</h2>
        <p>{descripton}</p>
      </div>
    </div>
  );
}
