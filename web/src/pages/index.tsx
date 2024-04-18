import Head from "next/head";

import { Navbar } from "@/components/Navbar";
import Image from "next/image";
import Person1 from "@/public/images/person1.jpg";
import Person2 from "@/public/images/person2.jpg";
import Person3 from "@/public/images/person3.jpg";
import Person4 from "@/public/images/person4.jpg";
import clsx from "clsx";

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

      <main className="container">
        <section id="sobre">
          <h1>Conheça nosso trabalho</h1>
        </section>
      </main>
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
