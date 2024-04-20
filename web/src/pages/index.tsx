import Head from "next/head";

import { Navbar } from "@/components/Navbar";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import {
  AboutSection,
  ImagesPanelSection,
  ServicesSection,
  CustomerFeedbackSection,
  TeamSection,
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
      </main>

      <ScrollToTopButton />
      <footer className="h-24 p-10 text-center">copyright dreadskill c</footer>
    </>
  );
}
