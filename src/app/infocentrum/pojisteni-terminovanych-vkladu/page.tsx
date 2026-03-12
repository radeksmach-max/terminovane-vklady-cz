import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Pojištění termínovaných vkladů",
  description:
    "Jak funguje pojištění termínovaných vkladů v ČR: limit 100 000 EUR, co je kryté, co ne a jak řešit vyšší částky.",
  alternates: {
    canonical: "/infocentrum/pojisteni-terminovanych-vkladu",
  },
};

export default function PojisteniTerminovanychVkladuPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <Breadcrumbs items={[{ label: "Domů", href: "/" }, { label: "Infocentrum", href: "/infocentrum" }, { label: "Pojištění termínovaných vkladů" }]} />

      <article className="prose prose-slate max-w-none prose-headings:text-[#1e3a5f]">
        <h1 className="!text-3xl md:!text-4xl !font-extrabold !text-[#1e3a5f] !mb-6">Pojištění termínovaných vkladů</h1>
        <p>
          Termínované vklady v bankách s licencí v ČR podléhají pojištění vkladů. To je jeden z hlavních důvodů,
          proč je termínovaný vklad vnímaný jako konzervativní nástroj.
        </p>

        <h2>Jaký je limit pojištění</h2>
        <p>
          Standardní limit je <strong>100 000 EUR</strong> na jednoho klienta v jedné bance. Do limitu se počítá
          jistina i připsané úroky.
        </p>

        <h2>Co z toho plyne v praxi</h2>
        <ul>
          <li>více vkladů v jedné bance se pro účel limitu sčítá,</li>
          <li>pro vyšší částky je rozumné rozložit peníze mezi více bank,</li>
          <li>u společných financí je vhodné ověřit držitele účtu a smluvní nastavení.</li>
        </ul>

        <h2>Nejčastější mýty</h2>
        <ul>
          <li>„Limit je na každý účet zvlášť.“ – Není, je na klienta a banku.</li>
          <li>„Pojištění kryje jakýkoliv výnos.“ – Kryje vklad a odpovídající úroky v mezích pravidel.</li>
        </ul>

        <h2>Shrnutí</h2>
        <p>
          Pojištění vkladů výrazně snižuje kreditní riziko banky, ale neřeší jiné faktory jako inflace nebo nízký
          reálný výnos. Bezpečnost je vysoká, výsledek však stále závisí na parametrech konkrétního produktu.
        </p>
      </article>

      <section className="mt-10 bg-white border border-slate-200 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-[#1e3a5f] mb-4">FAQ</h2>
        <div className="space-y-3 text-sm text-slate-700">
          <details>
            <summary className="cursor-pointer font-semibold text-[#1e3a5f]">Platí limit pojištění pro každý účet zvlášť?</summary>
            <p className="mt-2">Ne, standardně se vztahuje na klienta v rámci jedné banky, nikoliv na každý účet samostatně.</p>
          </details>
          <details>
            <summary className="cursor-pointer font-semibold text-[#1e3a5f]">Jak řešit částku nad limitem pojištění?</summary>
            <p className="mt-2">Praktické je rozložit prostředky mezi více bank, aby nebyly koncentrované do jednoho limitu.</p>
          </details>
        </div>
      </section>

      <section className="mt-10 bg-slate-50 border border-slate-200 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-[#1e3a5f] mb-3">Související témata</h2>
        <div className="flex flex-col gap-2 text-sm">
          <Link href="/infocentrum/terminovany-vklad-relativni-jistota" className="text-[#2a5298] font-semibold hover:text-[#1e3a5f]">Termínovaný vklad – relativní jistota →</Link>
          <Link href="/infocentrum/lze-mit-vice-terminovanych-vkladu-najednou" className="text-[#2a5298] font-semibold hover:text-[#1e3a5f]">Lze mít více vkladů najednou →</Link>
          <Link href="/infocentrum/jak-vybrat-terminovany-vklad" className="text-[#2a5298] font-semibold hover:text-[#1e3a5f]">Jak vybrat termínovaný vklad →</Link>
        </div>
      </section>
    </div>
  );
}
