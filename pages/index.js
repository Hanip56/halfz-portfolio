import {
  About,
  AlternateProjects,
  Contacts,
  Expertise,
  Hero,
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
      <main>
        <Hero />
        <About />
        <Expertise />
        <AlternateProjects />
        <Contacts />
      </main>
    </>
  );
}
