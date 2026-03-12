import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Termínovaný vklad a inflace",
  description:
    "Jak inflace ovlivňuje termínovaný vklad, co je nominální a reálný výnos a jak posoudit, zda vklad skutečně chrání hodnotu peněz.",
};

export default function TerminovanyVkladAInflacePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <Breadcrumbs items={[{ label: "Domů", href: "/" }, { label: "Infocentrum", href: "/infocentrum" }, { label: "Termínovaný vklad a inflace" }]} />

      <article className="prose prose-slate max-w-none prose-headings:text-[#1e3a5f]">
        <h1 className="!text-3xl md:!text-4xl !font-extrabold !text-[#1e3a5f] !mb-6">Termínovaný vklad a inflace</h1>
        <p>
          U termínovaného vkladu je důležité sledovat nejen nominální úrok, ale i to, co s výnosem udělá inflace a
          zdanění. Jinými slovy: kolik peněz dostanete je jedna věc, co si za ně koupíte je věc druhá.
        </p>

        <h2>Nominální vs reálný výnos</h2>
        <ul>
          <li><strong>Nominální výnos:</strong> číslo podle sazby banky.</li>
          <li><strong>Reálný výnos:</strong> výnos po zohlednění inflace (a ideálně i daně).</li>
        </ul>

        <h2>Co to znamená v praxi</h2>
        <p>
          Pokud je inflace dlouhodobě vyšší než čistý úrok, kupní síla úspor klesá. Termínovaný vklad přesto může být
          vhodný jako konzervativní část portfolia, zejména když upřednostňujete stabilitu před kolísáním.
        </p>

        <h2>Jak se rozhodovat rozumně</h2>
        <ol>
          <li>počítejte čistý výnos po zdanění,</li>
          <li>porovnávejte ho s očekávanou inflací,</li>
          <li>zvažte rozdělení peněz mezi rezervu a fixovaný vklad.</li>
        </ol>

        <h2>Shrnutí</h2>
        <p>
          Termínovaný vklad není nástroj na „porážení inflace za každou cenu“, ale na stabilní a předvídatelné
          zhodnocení části úspor. Nejlépe funguje jako součást širšího finančního plánu.
        </p>
      </article>

      <section className="mt-10 bg-white border border-slate-200 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-[#1e3a5f] mb-4">FAQ</h2>
        <div className="space-y-3 text-sm text-slate-700">
          <details>
            <summary className="cursor-pointer font-semibold text-[#1e3a5f]">Může termínovaný vklad porazit inflaci?</summary>
            <p className="mt-2">Někdy ano, ale ne vždy. Rozhoduje čistý úrok po zdanění a skutečný vývoj inflace.</p>
          </details>
          <details>
            <summary className="cursor-pointer font-semibold text-[#1e3a5f]">Má smysl vklad i při vyšší inflaci?</summary>
            <p className="mt-2">Ano, jako konzervativní část strategie. Jen je potřeba realisticky počítat s reálným výnosem.</p>
          </details>
        </div>
      </section>

      <section className="mt-10 bg-slate-50 border border-slate-200 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-[#1e3a5f] mb-3">Související témata</h2>
        <div className="flex flex-col gap-2 text-sm">
          <Link href="/infocentrum/dan-z-uroku-terminovany-vklad" className="text-[#2a5298] font-semibold hover:text-[#1e3a5f]">Daň z úroků u termínovaného vkladu →</Link>
          <Link href="/infocentrum/uroceni-terminovanych-vkladu" className="text-[#2a5298] font-semibold hover:text-[#1e3a5f]">Úročení termínovaných vkladů →</Link>
          <Link href="/infocentrum/nevyhody-terminovaneho-vkladu" className="text-[#2a5298] font-semibold hover:text-[#1e3a5f]">Nevýhody termínovaného vkladu →</Link>
        </div>
      </section>
    </div>
  );
}
