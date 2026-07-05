import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { WhyItaly } from "@/components/WhyItaly";
import { Services } from "@/components/Services";
import { Audience } from "@/components/Audience";
import { Process } from "@/components/Process";
import { Values } from "@/components/Values";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { isValidLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  const dict = await getDictionary(locale as Locale);

  return (
    <>
      <Header locale={locale as Locale} dict={dict} />
      <main id="main-content">
        <Hero dict={dict} />
        <About dict={dict} />
        <WhyItaly dict={dict} />
        <Services dict={dict} />
        <Audience dict={dict} />
        <Process dict={dict} />
        <Values dict={dict} />
        <FAQ dict={dict} />
        <Contact dict={dict} />
      </main>
      <Footer dict={dict} />
    </>
  );
}
