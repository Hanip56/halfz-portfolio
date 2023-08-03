import {
  About,
  AlternateProjects,
  Contacts,
  Expertise,
  Hero,
  Skills,
} from "@/components";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hanip Al Hapidz</title>
        <meta name="description" content="Hanip Al Hapidz Official Website" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="max-w-[100vw] overflow-hidden space-y-64">
        <Hero />
        <About />
        {/* <Expertise /> */}
        <Skills />
        <AlternateProjects />
        <Contacts />
      </main>
    </>
  );
}
