import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Termínovaný vklad vs státní dluhopisy",
  description:
    "Srovnání termínovaného vkladu a státních dluhopisů: riziko, výnos, likvidita a vhodné využití v konzervativním portfoliu.",
};

export default function TerminovanyVkladVsStatniDluhopisyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <Breadcrumbs items={[{ label: "Domů", href: "/" }, { label: "Infocentrum", href: "/infocentrum" }, { label: "Termínovaný vklad vs státní dluhopisy" }]} />
      <article className="prose prose-slate max-w-none prose-headings:text-[#1e3a5f]">
        <h1 className="!text-3xl md:!text-4xl !font-extrabold !text-[#1e3a5f] !mb-6">Termínovaný vklad vs státní dluhopisy</h1>
        <p>Obě varianty cílí na konzervativní část úspor. Liší se hlavně ve struktuře produktu, dostupnosti peněz a administrativě.</p>
        <h2>Co porovnat</h2>
        <ul>
          <li>čistý výnos po zdanění,</li>
          <li>dostupnost prostředků během trvání,</li>
          <li>jednoduchost správy a administrativu.</li>
        </ul>
      </article>

      <section className="mt-10 bg-white border border-slate-200 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-[#1e3a5f] mb-4">FAQ</h2>
        <div className="space-y-3 text-sm text-slate-700">
          <details>
            <summary className="cursor-pointer font-semibold text-[#1e3a5f]">Co je jednodušší na správu?</summary>
            <p className="mt-2">Pro většinu lidí bývá jednodušší termínovaný vklad, protože má jasně dané podmínky a průběh.</p>
          </details>
          <details>
            <summary className="cursor-pointer font-semibold text-[#1e3a5f]">Můžu kombinovat obě varianty?</summary>
            <p className="mt-2">Ano, rozdělení konzervativní části úspor mezi více nástrojů je v praxi běžné.</p>
          </details>
        </div>
      </section>
      <section className="mt-10 bg-slate-50 border border-slate-200 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-[#1e3a5f] mb-3">Související témata</h2>
        <div className="flex flex-col gap-2 text-sm">
          <Link href="/infocentrum/terminovany-vklad-relativni-jistota" className="text-[#2a5298] font-semibold hover:text-[#1e3a5f]">Termínovaný vklad – relativní jistota →</Link>
          <Link href="/infocentrum/terminovany-vklad-a-inflace" className="text-[#2a5298] font-semibold hover:text-[#1e3a5f]">Termínovaný vklad a inflace →</Link>
        </div>
      </section>
    </div>
  );
}
