import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Lze mít více termínovaných vkladů najednou",
  description:
    "Ano, více termínovaných vkladů najednou je běžná strategie. Kdy dává smysl rozdělit částku a jaké to má výhody.",
};

export default function LzeMitViceTerminovanychVkladuNajednouPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <Breadcrumbs items={[{ label: "Domů", href: "/" }, { label: "Infocentrum", href: "/infocentrum" }, { label: "Lze mít více termínovaných vkladů najednou" }]} />
      <article className="prose prose-slate max-w-none prose-headings:text-[#1e3a5f]">
        <h1 className="!text-3xl md:!text-4xl !font-extrabold !text-[#1e3a5f] !mb-6">Lze mít více termínovaných vkladů najednou</h1>
        <p>Ano. Rozdělení částky do více vkladů je běžný postup pro lepší likviditu i řízení rizik.</p>
        <h2>Proč to dává smysl</h2>
        <ul>
          <li>postupné uvolňování peněz při splatnosti,</li>
          <li>možnost reagovat na změny sazeb,</li>
          <li>snazší práce s limity pojištění vkladů.</li>
        </ul>
      </article>

      <section className="mt-10 bg-white border border-slate-200 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-[#1e3a5f] mb-4">FAQ</h2>
        <div className="space-y-3 text-sm text-slate-700">
          <details>
            <summary className="cursor-pointer font-semibold text-[#1e3a5f]">Kolik vkladů je rozumné mít současně?</summary>
            <p className="mt-2">Podle cíle a částky, ale běžná je kombinace více splatností pro lepší dostupnost peněz.</p>
          </details>
          <details>
            <summary className="cursor-pointer font-semibold text-[#1e3a5f]">Má rozdělení vkladů praktický přínos?</summary>
            <p className="mt-2">Ano, peníze se uvolňují postupně a snižuje se riziko předčasného rušení celé částky.</p>
          </details>
        </div>
      </section>

      <section className="mt-10 bg-slate-50 border border-slate-200 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-[#1e3a5f] mb-3">Související témata</h2>
        <div className="flex flex-col gap-2 text-sm">
          <Link href="/infocentrum/pojisteni-terminovanych-vkladu" className="text-[#2a5298] font-semibold hover:text-[#1e3a5f]">Pojištění termínovaných vkladů →</Link>
          <Link href="/infocentrum/jaka-delka-terminovaneho-vkladu-je-nejlepsi" className="text-[#2a5298] font-semibold hover:text-[#1e3a5f]">Jaká délka vkladu je nejlepší →</Link>
        </div>
      </section>
    </div>
  );
}
