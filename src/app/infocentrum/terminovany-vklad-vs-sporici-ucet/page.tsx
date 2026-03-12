import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Termínovaný vklad vs spořicí účet",
  description:
    "Srovnání termínovaného vkladu a spořicího účtu: výnos, dostupnost peněz, rizika i praktické použití v běžném rozpočtu.",
  alternates: {
    canonical: "/infocentrum/terminovany-vklad-vs-sporici-ucet",
  },
};

export default function TerminovanyVkladVsSporiciUcetPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <Breadcrumbs items={[{ label: "Domů", href: "/" }, { label: "Infocentrum", href: "/infocentrum" }, { label: "Termínovaný vklad vs spořicí účet" }]} />

      <article className="prose prose-slate max-w-none prose-headings:text-[#1e3a5f]">
        <h1 className="!text-3xl md:!text-4xl !font-extrabold !text-[#1e3a5f] !mb-6">Termínovaný vklad vs spořicí účet</h1>
        <p>
          Oba produkty patří mezi konzervativní způsoby práce s penězi, ale každý řeší jiný cíl. Termínovaný vklad
          nabízí vyšší předvídatelnost výnosu, spořicí účet naopak okamžitou dostupnost prostředků.
        </p>

        <h2>Hlavní rozdíl</h2>
        <ul>
          <li><strong>Termínovaný vklad:</strong> vyšší jistota sazby, nižší flexibilita.</li>
          <li><strong>Spořicí účet:</strong> vysoká flexibilita, sazba se může měnit častěji.</li>
        </ul>

        <h2>Kdy dává smysl termínovaný vklad</h2>
        <ul>
          <li>když víte, že peníze několik měsíců nebudete potřebovat,</li>
          <li>když chcete mít sazbu zafixovanou předem,</li>
          <li>když už máte oddělenou likvidní rezervu.</li>
        </ul>

        <h2>Kdy je lepší spořicí účet</h2>
        <ul>
          <li>když potřebujete rychlý přístup k penězům,</li>
          <li>když si teprve budujete rezervu,</li>
          <li>když nechcete řešit sankce při předčasném výběru.</li>
        </ul>

        <h2>Praktický model 70/30</h2>
        <p>
          Pro řadu domácností funguje jednoduché rozdělení: větší část peněz nechat likvidní na spořicím účtu a menší
          část fixovat na termínovaném vkladu. Poměr upravte podle stability příjmů a plánovaných výdajů.
        </p>
      </article>

      <section className="mt-10 bg-white border border-slate-200 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-[#1e3a5f] mb-4">FAQ</h2>
        <div className="space-y-3 text-sm text-slate-700">
          <details>
            <summary className="cursor-pointer font-semibold text-[#1e3a5f]">Je lepší mít všechno jen na spořicím účtu?</summary>
            <p className="mt-2">Ne vždy. Často dává smysl kombinace likvidní rezervy a části peněz na termínovaném vkladu.</p>
          </details>
          <details>
            <summary className="cursor-pointer font-semibold text-[#1e3a5f]">Kdy termínovaný vklad nedává smysl?</summary>
            <p className="mt-2">Když hrozí, že budete peníze potřebovat kdykoliv a nechcete řešit omezenou dostupnost.</p>
          </details>
        </div>
      </section>

      <section className="mt-10 bg-slate-50 border border-slate-200 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-[#1e3a5f] mb-3">Související témata</h2>
        <div className="flex flex-col gap-2 text-sm">
          <Link href="/infocentrum/kdy-se-vyplati-terminovany-vklad" className="text-[#2a5298] font-semibold hover:text-[#1e3a5f]">Kdy se vyplatí termínovaný vklad →</Link>
          <Link href="/infocentrum/terminovany-vklad-a-inflace" className="text-[#2a5298] font-semibold hover:text-[#1e3a5f]">Termínovaný vklad a inflace →</Link>
          <Link href="/blog/kdy-se-vyplati-terminovany-vklad-vs-sporici-ucet" className="text-[#2a5298] font-semibold hover:text-[#1e3a5f]">Blog: kdy se vyplatí vklad vs spořicí účet →</Link>
        </div>
      </section>
    </div>
  );
}
