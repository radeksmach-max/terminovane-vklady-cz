import Link from "next/link";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Infocentrum — přehledně o terminovaných vkladech",
  description:
    "Infocentrum terminované-vklady.cz: praktické návody, srovnání a check-listy pro výběr termínovaného vkladu bez zbytečných chyb.",
};

const blocks = [
  {
    title: "Jak vybrat termínovaný vklad",
    desc: "Praktický checklist výběru: sazba, fixace, podmínky i čistý výnos.",
    href: "/infocentrum/jak-vybrat-terminovany-vklad",
    cta: "Přečíst článek",
  },
  {
    title: "Termínovaný vklad vs spořicí účet",
    desc: "Srozumitelné srovnání dvou nejčastějších konzervativních variant.",
    href: "/infocentrum/terminovany-vklad-vs-sporici-ucet",
    cta: "Porovnat varianty",
  },
  {
    title: "Předčasné zrušení termínovaného vkladu",
    desc: "Jaké hrozí sankce a jak postupovat, když potřebujete peníze dřív.",
    href: "/infocentrum/predcasne-zruseni-terminovaneho-vkladu",
    cta: "Zjistit postup",
  },
  {
    title: "Pojištění termínovaných vkladů",
    desc: "Jak funguje limit 100 000 EUR a co znamená v praxi.",
    href: "/infocentrum/pojisteni-terminovanych-vkladu",
    cta: "Zjistit více",
  },
  {
    title: "Daň z úroků u termínovaného vkladu",
    desc: "Rozdíl hrubý vs čistý výnos a jak správně porovnávat nabídky.",
    href: "/infocentrum/dan-z-uroku-terminovany-vklad",
    cta: "Přečíst článek",
  },
  {
    title: "Kdy se vyplatí termínovaný vklad",
    desc: "Praktické scénáře, kdy dává fixace smysl a kdy je lepší jiná volba.",
    href: "/infocentrum/kdy-se-vyplati-terminovany-vklad",
    cta: "Zjistit kdy",
  },
  {
    title: "Jaká délka termínovaného vkladu je nejlepší",
    desc: "Srovnání fixace 3, 6, 12 a 24 měsíců podle cíle a likvidity.",
    href: "/infocentrum/jaka-delka-terminovaneho-vkladu-je-nejlepsi",
    cta: "Porovnat délky",
  },
  {
    title: "Termínovaný vklad a inflace",
    desc: "Nominální vs reálný výnos a jak posoudit kupní sílu úspor.",
    href: "/infocentrum/terminovany-vklad-a-inflace",
    cta: "Přečíst článek",
  },
  {
    title: "Nevýhody termínovaného vkladu",
    desc: "Na co si dát pozor: omezená dostupnost peněz, inflace, předčasný výběr i autoobnova.",
    href: "/infocentrum/nevyhody-terminovaneho-vkladu",
    cta: "Přečíst článek",
  },
  {
    title: "Proč si zařídit termínovaný vklad",
    desc: "Praktické důvody, kdy se termínovaný vklad vyplatí a pro koho je vhodný.",
    href: "/infocentrum/proc-si-zaridit-terminovany-vklad",
    cta: "Přečíst článek",
  },
  {
    title: "Termínovaný vklad – relativní jistota",
    desc: "Kdy je termínovaný vklad bezpečná volba, jaká má omezení a jak ho používat v praxi.",
    href: "/infocentrum/terminovany-vklad-relativni-jistota",
    cta: "Přečíst článek",
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
  {
    title: "Automatická obnova termínovaného vkladu",
    desc: "Kdy je autoobnova výhodná a kdy může zhoršit vaše podmínky.",
    href: "/infocentrum/automaticka-obnova-terminovaneho-vkladu",
    cta: "Otevřít článek",
  },
  {
    title: "Termínovaný vklad vs stavební spoření",
    desc: "Srovnání dvou konzervativních produktů podle cíle a horizontu.",
    href: "/infocentrum/terminovany-vklad-vs-stavebni-sporeni",
    cta: "Porovnat",
  },
  {
    title: "Termínovaný vklad vs státní dluhopisy",
    desc: "Praktické rozdíly v dostupnosti peněz, správě a očekávaném výsledku.",
    href: "/infocentrum/terminovany-vklad-vs-statni-dluhopisy",
    cta: "Porovnat",
  },
  {
    title: "Nejčastější chyby při výběru",
    desc: "Seznam chyb, které zbytečně snižují výnos nebo zhoršují flexibilitu.",
    href: "/infocentrum/nejcastejsi-chyby-pri-vyberu-terminovaneho-vkladu",
    cta: "Vyhnout se chybám",
  },
  {
    title: "Co si zkontrolovat ve smlouvě",
    desc: "Krátký checklist, co ověřit před podpisem termínovaného vkladu.",
    href: "/infocentrum/co-si-zkontrolovat-ve-smlouve-terminovany-vklad",
    cta: "Zobrazit checklist",
  },
  {
    title: "Jak založit termínovaný vklad online",
    desc: "Návod krok za krokem od výběru až po potvrzení založení.",
    href: "/infocentrum/jak-zalozit-terminovany-vklad-online",
    cta: "Přečíst návod",
  },
  {
    title: "Lze mít více termínovaných vkladů najednou",
    desc: "Jak rozdělit vklady pro lepší likviditu i řízení rizika.",
    href: "/infocentrum/lze-mit-vice-terminovanych-vkladu-najednou",
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
      </header>

      <section className="mb-10 bg-gradient-to-br from-[#1e3a5f] to-[#2a5298] rounded-2xl p-6 md:p-8 text-white shadow-sm">
        <h2 className="text-xl font-bold mb-2">Nevíte, kde začít?</h2>
        <p className="text-blue-100 mb-4">
          Začněte hlavním průvodcem, který vás krok za krokem provede výběrem termínovaného vkladu:
          sazba, délka fixace, předčasné ukončení, autoobnova i čistý výnos.
        </p>
        <Link
          href="/infocentrum/jak-vybrat-terminovany-vklad"
          className="inline-flex items-center gap-2 bg-[#f59e0b] text-[#0f1f35] font-bold px-5 py-2.5 rounded-xl hover:bg-[#fbbf24] transition-colors"
        >
          Jak vybrat termínovaný vklad
        </Link>
      </section>

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

      <section className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        <article className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
          <h2 className="text-xl font-bold text-[#1e3a5f] mb-3">Na co si dát pozor</h2>
          <ul className="space-y-2 text-sm text-slate-700 list-disc pl-5">
            <li>Neporovnávejte jen sazbu, ale čistý výnos a podmínky.</li>
            <li>Neuzamykejte celou rezervu do jedné fixace.</li>
            <li>Pohlídejte datum splatnosti a automatickou obnovu.</li>
            <li>Vždy si přečtěte pravidla předčasného ukončení.</li>
          </ul>
        </article>

        <article className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
          <h2 className="text-xl font-bold text-[#1e3a5f] mb-3">Nejčastější scénáře</h2>
          <div className="space-y-2 text-sm">
            <Link href="/infocentrum/terminovany-vklad-vs-sporici-ucet" className="block text-[#2a5298] font-semibold hover:text-[#1e3a5f]">
              Potřebuji rozhodnout mezi termínovaným vkladem a spořicím účtem →
            </Link>
            <Link href="/infocentrum/predcasne-zruseni-terminovaneho-vkladu" className="block text-[#2a5298] font-semibold hover:text-[#1e3a5f]">
              Potřebuji peníze dříve a řeším předčasné zrušení →
            </Link>
            <Link href="/infocentrum/co-si-zkontrolovat-ve-smlouve-terminovany-vklad" className="block text-[#2a5298] font-semibold hover:text-[#1e3a5f]">
              Chci před podpisem rychlý smluvní checklist →
            </Link>
          </div>
        </article>
      </section>

      <section className="mt-12 bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
        <h2 className="text-xl font-bold text-[#1e3a5f] mb-4">Časté otázky</h2>
        <div className="space-y-4 text-sm text-slate-700">
          <details>
            <summary className="cursor-pointer font-semibold text-[#1e3a5f]">Je termínovaný vklad vhodný pro každého?</summary>
            <p className="mt-2">Ne. Hodí se hlavně pro peníze, které nebudete po dobu fixace potřebovat. Pro pohotovostní rezervu je praktičtější spořicí účet.</p>
          </details>
          <details>
            <summary className="cursor-pointer font-semibold text-[#1e3a5f]">Je lepší jeden velký vklad, nebo více menších?</summary>
            <p className="mt-2">Často dává smysl rozdělení do více vkladů s různou splatností. Získáte tím lepší flexibilitu i kontrolu nad likviditou.</p>
          </details>
          <details>
            <summary className="cursor-pointer font-semibold text-[#1e3a5f]">Na co se soustředit při porovnání nabídek?</summary>
            <p className="mt-2">Na čistý výnos po zdanění, délku fixace, podmínky předčasného ukončení a pravidla automatické obnovy.</p>
          </details>
        </div>
      </section>

      <section className="mt-12 bg-gradient-to-br from-[#1e3a5f] to-[#2a5298] rounded-2xl p-6 md:p-8 text-white shadow-sm">
        <h2 className="text-xl font-bold mb-2">Chcete rychle spočítat výnos?</h2>
        <p className="text-blue-100 mb-4">
          Na homepage najdete kalkulačku, kde si během pár sekund porovnáte hrubý i čistý výnos.
        </p>
        <Link
          href="/#kalkulator"
          className="inline-flex items-center gap-2 bg-[#f59e0b] text-[#0f1f35] font-bold px-5 py-2.5 rounded-xl hover:bg-[#fbbf24] transition-colors"
        >
          Přejít na kalkulačku
        </Link>
      </section>
    </div>
  );
}
