import Head from "next/head";

import Navbar from "@/components/Navbar";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import Button from "@/components/Button";

import {
  AboutSection,
  ImagesPanelSection,
  ServicesSection,
  CustomerFeedbackSection,
  TeamSection,
  StudioSection,
  GalerySection,
} from "@/components/pages/home";

export default function Home() {
  return (
    <>
      <Head>
        <title>DreadSkill</title>
        <meta name="description" content="Aplicação e manutenção de dreads." />
      </Head>

      <Navbar />
      <ImagesPanelSection />

      <main className="flex flex-col gap-10 md:gap-0 md:mt-12">
        <AboutSection />
        <ServicesSection />
        <CustomerFeedbackSection />
        <TeamSection />

        <section className="bg-dsBrown text-white font-bold uppercase p-4 md:py-8 flex flex-col justify-center items-center text-center gap-4">
          <p className="md:text-lg lg:text-xl">
            Faça seu orçamento sem compromisso e agende conosco!
          </p>
          <Button label="Entrar em contato" />
        </section>

        <StudioSection />
        <GalerySection />
      </main>

      <ScrollToTopButton />
      <footer className="h-24 p-10 text-center">copyright dreadskill c</footer>
    </>
  );
}
