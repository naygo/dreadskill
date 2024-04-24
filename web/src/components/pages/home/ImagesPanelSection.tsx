import Image, { StaticImageData } from "next/image";
import clsx from "clsx";

import Person1 from "@/public/images/person1.jpg";
import Person2 from "@/public/images/person2.jpg";
import Person3 from "@/public/images/person3.jpg";
import Person4 from "@/public/images/person4.jpg";

export function ImagesPanelSection() {
  return (
    <section
      className={clsx(
        "flex flex-col p-4 pt-0 gap-2",
        "lg:flex-row lg:px-10",
        `h-[calc(100vh-80px)] md:h-[calc(100vh-136px)]`
      )}
    >
      <ImageCard src={Person1} />
      <ImageCard src={Person2} />
      <ImageCard src={Person3} />
      <ImageCard src={Person4} />
    </section>
  );
}

function ImageCard({ src }: { src: StaticImageData }) {
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
        fill
        className="object-cover object-center"
      />
    </div>
  );
}
