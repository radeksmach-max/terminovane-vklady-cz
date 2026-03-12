import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Termínovaný vklad vs stavební spoření",
  description:
    "Srovnání termínovaného vkladu a stavebního spoření: výnos, horizont, flexibilita a vhodné použití pro běžného střadatele.",
};

export default function TerminovanyVkladVsStavebniSporeniPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <Breadcrumbs items={[{ label: "Domů", href: "/" }, { label: "Infocentrum", href: "/infocentrum" }, { label: "Termínovaný vklad vs stavební spoření" }]} />
      <article className="prose prose-slate max-w-none prose-headings:text-[#1e3a5f]">
        <h1 className="!text-3xl md:!text-4xl !font-extrabold !text-[#1e3a5f] !mb-6">Termínovaný vklad vs stavební spoření</h1>
        <p>Termínovaný vklad je jednodušší a vhodný pro kratší horizont. Stavební spoření dává smysl spíše při delším plánu a respektování jeho pravidel.</p>
        <h2>Hlavní rozdíly</h2>
        <ul>
          <li>termínovaný vklad: fixace na měsíce až roky,</li>
          <li>stavební spoření: delší rámec a specifické podmínky produktu.</li>
        </ul>
        <h2>Kdy zvolit co</h2>
        <p>Pokud řešíte krátko až střednědobé bezpečné uložení peněz, často vychází lépe termínovaný vklad. U dlouhodobějšího cíle může dávat smysl i stavební spoření.</p>

        <h2>Na co si dát pozor při porovnání</h2>
        <ul>
          <li>porovnávejte čistý výnos po zohlednění všech podmínek,</li>
          <li>hlídejte, jak dlouho budou peníze reálně vázané,</li>
          <li>zvažte, zda potřebujete flexibilitu nebo stabilní plán.</li>
        </ul>

        <h2>Stručné shrnutí</h2>
        <p>
          Pro kratší a přehledné uložení peněz je obvykle praktičtější termínovaný vklad. Pro specifické dlouhodobé
          cíle může dávat smysl stavební spoření, pokud vám vyhovují jeho pravidla.
        </p>
      </article>

      <section className="mt-10 bg-white border border-slate-200 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-[#1e3a5f] mb-4">FAQ</h2>
        <div className="space-y-3 text-sm text-slate-700">
          <details>
            <summary className="cursor-pointer font-semibold text-[#1e3a5f]">Kdy je lepší termínovaný vklad?</summary>
            <p className="mt-2">Když chcete jednoduchý produkt, jasnou fixaci a peníze nebudete v dohledné době potřebovat.</p>
          </details>
          <details>
            <summary className="cursor-pointer font-semibold text-[#1e3a5f]">Můžu kombinovat oba produkty?</summary>
            <p className="mt-2">Ano, v praxi se často kombinuje likvidnější část úspor s dlouhodobějším cílem.</p>
          </details>
        </div>
      </section>
      <section className="mt-10 bg-slate-50 border border-slate-200 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-[#1e3a5f] mb-3">Související témata</h2>
        <div className="flex flex-col gap-2 text-sm">
          <Link href="/infocentrum/terminovany-vklad-vs-sporici-ucet" className="text-[#2a5298] font-semibold hover:text-[#1e3a5f]">Termínovaný vklad vs spořicí účet →</Link>
          <Link href="/infocentrum/kdy-se-vyplati-terminovany-vklad" className="text-[#2a5298] font-semibold hover:text-[#1e3a5f]">Kdy se vyplatí termínovaný vklad →</Link>
        </div>
      </section>
    </div>
  );
}
