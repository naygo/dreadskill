import Image, { StaticImageData } from "next/image";
import clsx from "clsx";

import Person1 from "@/public/images/person1.jpg";
import Person2 from "@/public/images/person2.jpg";
import Person3 from "@/public/images/person3.jpg";

import { WaveBottom, WaveTop } from "@/components/Waves";

import { homePageStyles } from "./styles";

export function CustomerFeedbackSection() {
  return (
    <section id="depoimentos" className={homePageStyles.wave}>
      <div
        className={clsx(
          homePageStyles.waveContainer,
          "flex-col",
          "pb-20 pt-16",
          "lg:pt-36 lg:pb-44"
        )}
      >
        <WaveTop />
        <WaveBottom />
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
      </div>
    </section>
  );
}

function DepoimentsCard({ src, text }: { src: StaticImageData; text: string }) {
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
          homePageStyles.card,
          "relative flex min-h-48",
          "-mt-10 md:m-0 md:ml-20"
        )}
      >
        <p className="p-4 pt-10 md:pl-44 md:p-4">{text}</p>
      </div>
    </div>
  );
}
