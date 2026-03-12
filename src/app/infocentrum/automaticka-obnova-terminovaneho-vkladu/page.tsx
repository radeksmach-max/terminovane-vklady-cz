import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Automatická obnova termínovaného vkladu",
  description:
    "Jak funguje automatická obnova termínovaného vkladu, kdy je výhodná a kdy může snížit výnos. Praktický postup, co hlídat.",
};

export default function AutomatickaObnovaTerminovanehoVkladuPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <Breadcrumbs items={[{ label: "Domů", href: "/" }, { label: "Infocentrum", href: "/infocentrum" }, { label: "Automatická obnova termínovaného vkladu" }]} />
      <article className="prose prose-slate max-w-none prose-headings:text-[#1e3a5f]">
        <h1 className="!text-3xl md:!text-4xl !font-extrabold !text-[#1e3a5f] !mb-6">Automatická obnova termínovaného vkladu</h1>
        <p>
          Autoobnova znamená, že se vklad po splatnosti obnoví na další období podle aktuálních podmínek banky.
          V praxi šetří čas, ale zároveň vyžaduje pravidelnou kontrolu, protože nová sazba může být výrazně nižší.
        </p>
        <h2>Kdy je užitečná</h2>
        <ul><li>když chcete produkt řešit co nejméně,</li><li>když vám nevadí průběžná změna sazby.</li></ul>
        <h2>Kdy může být problém</h2>
        <ul><li>pokud sazby mezitím klesly,</li><li>když si nepohlídáte datum splatnosti.</li></ul>
        <h2>Co kontrolovat</h2>
        <ol><li>datum splatnosti,</li><li>novou sazbu po obnově,</li><li>možnost obnovu vypnout předem.</li></ol>

        <h2>Na co si dát pozor</h2>
        <ul>
          <li>v některých bankách je krátké časové okno, kdy lze obnovu zrušit bez sankce,</li>
          <li>pokud obnovu nehlídáte, můžete zůstat ve vkladu s horší sazbou,</li>
          <li>podmínky výplaty úroku po obnově se mohou lišit od původního cyklu.</li>
        </ul>

        <h2>Stručné shrnutí</h2>
        <p>
          Autoobnova je pohodlná funkce, ale neměla by být „bez dohledu“. Nejlepší postup je mít připomínku před
          splatností a vždy zkontrolovat, zda nové podmínky dávají smysl.
        </p>
      </article>

      <section className="mt-10 bg-white border border-slate-200 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-[#1e3a5f] mb-4">FAQ</h2>
        <div className="space-y-3 text-sm text-slate-700">
          <details>
            <summary className="cursor-pointer font-semibold text-[#1e3a5f]">Můžu autoobnovu vypnout kdykoliv?</summary>
            <p className="mt-2">Záleží na bance. Většinou ano, ale často jen v určitém období před splatností.</p>
          </details>
          <details>
            <summary className="cursor-pointer font-semibold text-[#1e3a5f]">Je po obnově vždy stejná sazba?</summary>
            <p className="mt-2">Ne. Obvykle se nastaví aktuální sazba platná v den obnovy.</p>
          </details>
        </div>
      </section>
      <section className="mt-10 bg-slate-50 border border-slate-200 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-[#1e3a5f] mb-3">Související témata</h2>
        <div className="flex flex-col gap-2 text-sm">
          <Link href="/infocentrum/predcasne-zruseni-terminovaneho-vkladu" className="text-[#2a5298] font-semibold hover:text-[#1e3a5f]">Předčasné zrušení vkladu →</Link>
          <Link href="/infocentrum/jaka-delka-terminovaneho-vkladu-je-nejlepsi" className="text-[#2a5298] font-semibold hover:text-[#1e3a5f]">Jaká délka vkladu je nejlepší →</Link>
        </div>
      </section>
    </div>
  );
}
