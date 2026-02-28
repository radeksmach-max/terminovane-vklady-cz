import Link from "next/link";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Infocentrum — přehledně o terminovaných vkladech",
  description:
    "Infocentrum terminované-vklady.cz: základní pojmy, praktické tipy a odkazy na nejdůležitější články.",
};

const blocks = [
  {
    title: "Začínáte s terminovaným vkladem",
    desc: "Vysvětlení základních pojmů, principu fixace a pojištění vkladů.",
    href: "/blog/co-je-terminovany-vklad",
    cta: "Přečíst základy",
  },
  {
    title: "Srovnání a výběr produktu",
    desc: "Na co se zaměřit při výběru banky, délky vkladu a podmínek předčasného výběru.",
    href: "/blog/nejlepsi-terminovane-vklady-2025",
    cta: "Zobrazit srovnání",
  },
  {
    title: "Strategie pro rok 2026",
    desc: "Kdy zvolit spořicí účet a kdy terminovaný vklad. Praktický pohled pro běžné spoření.",
    href: "/blog/terminovany-vklad-vs-sporici-ucet-2026",
    cta: "Přečíst strategii",
  },
  {
    title: "Úročení termínovaných vkladů",
    desc: "Pevná vs. variabilní sazba, výhody, rizika a jak správně vybrat podle vašeho cíle.",
    href: "/infocentrum/uroceni-terminovanych-vkladu",
    cta: "Otevřít podstránku",
  },
  {
    title: "Minimální částka termínovaného vkladu",
    desc: "Jaká minima banky vyžadují, proč se liší a jak vybrat vklad podle vašich možností.",
    href: "/infocentrum/minimalni-castka-terminovaneho-vkladu",
    cta: "Zjistit více",
  },
];

export default function InfocentrumPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <Breadcrumbs
        items={[
          { label: "Domů", href: "/" },
          { label: "Infocentrum" },
        ]}
      />

      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#1e3a5f] mb-6">Infocentrum</h1>
        <p className="text-slate-600 max-w-3xl leading-relaxed">
          Rozcestník důležitých informací o terminovaných vkladech. Najdete zde praktické návody,
          vysvětlení základů i články, které pomohou s výběrem vhodného produktu.
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {blocks.map((block) => (
          <article key={block.title} className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
            <h2 className="text-lg font-bold text-[#1e3a5f] mb-2">{block.title}</h2>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">{block.desc}</p>
            <Link
              href={block.href}
              className="text-sm font-semibold text-[#2a5298] hover:text-[#1e3a5f] transition-colors"
            >
              {block.cta} →
            </Link>
          </article>
        ))}
      </section>

      <section className="mt-12 bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8">
        <h2 className="text-xl font-bold text-[#1e3a5f] mb-2">Chcete rychle spočítat výnos?</h2>
        <p className="text-slate-600 mb-4">
          Na homepage najdete kalkulačku, kde si během pár sekund porovnáte hrubý i čistý výnos.
        </p>
        <Link
          href="/#kalkulator"
          className="inline-flex items-center gap-2 bg-[#1e3a5f] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#2a5298] transition-colors"
        >
          Přejít na kalkulačku
        </Link>
      </section>
    </div>
  );
}
