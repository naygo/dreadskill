import Head from "next/head";

import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>DreadSkill</title>
        <meta name="description" content="Aplicação e manutenção de dreads." />
      </Head>

      <Navbar />
    </>
  );
}
