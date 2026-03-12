import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Předčasné zrušení termínovaného vkladu",
  description:
    "Co znamená předčasné zrušení termínovaného vkladu, jaké sankce hrozí a jak postupovat, když peníze potřebujete dřív.",
  alternates: {
    canonical: "/infocentrum/predcasne-zruseni-terminovaneho-vkladu",
  },
};

export default function PredcasneZruseniTerminovanehoVkladuPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <Breadcrumbs items={[{ label: "Domů", href: "/" }, { label: "Infocentrum", href: "/infocentrum" }, { label: "Předčasné zrušení termínovaného vkladu" }]} />

      <article className="prose prose-slate max-w-none prose-headings:text-[#1e3a5f]">
        <h1 className="!text-3xl md:!text-4xl !font-extrabold !text-[#1e3a5f] !mb-6">Předčasné zrušení termínovaného vkladu</h1>
        <p>
          Předčasné ukončení termínovaného vkladu je obvykle možné, ale většinou nevýhodné. Banka může snížit výnos,
          vzít celý úrok nebo účtovat poplatek. Přesná pravidla jsou vždy ve smluvních podmínkách.
        </p>

        <h2>Co vám může banka účtovat</h2>
        <ul>
          <li>ztrátu části nebo všech úroků,</li>
          <li>poplatek za předčasné ukončení,</li>
          <li>kombinaci obou variant.</li>
        </ul>

        <h2>Jak postupovat krok za krokem</h2>
        <ol>
          <li>zjistěte přesné podmínky ve smlouvě,</li>
          <li>nechte si od banky spočítat dopad na čistý výnos,</li>
          <li>porovnejte, zda není lepší počkat do splatnosti,</li>
          <li>pokud rušení dává smysl, potvrďte žádost písemně.</li>
        </ol>

        <h2>Jak se předčasnému rušení vyhnout</h2>
        <p>
          Na termínovaný vklad dávejte jen peníze, které opravdu nebudete potřebovat. Praktické je rozdělit částku do
          více vkladů s různou délkou, abyste měli prostředky uvolňované postupně.
        </p>
      </article>

      <section className="mt-10 bg-white border border-slate-200 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-[#1e3a5f] mb-4">FAQ</h2>
        <div className="space-y-3 text-sm text-slate-700">
          <details>
            <summary className="cursor-pointer font-semibold text-[#1e3a5f]">Je předčasné zrušení vždy možné?</summary>
            <p className="mt-2">Ve většině případů ano, ale podmínky i výše sankce se liší podle konkrétní banky a smlouvy.</p>
          </details>
          <details>
            <summary className="cursor-pointer font-semibold text-[#1e3a5f]">Jak snížit riziko, že budu rušit vklad předčasně?</summary>
            <p className="mt-2">Pomáhá ponechat dostatečnou rezervu mimo vklad a rozdělit peníze do více fixací.</p>
          </details>
        </div>
      </section>

      <section className="mt-10 bg-slate-50 border border-slate-200 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-[#1e3a5f] mb-3">Související témata</h2>
        <div className="flex flex-col gap-2 text-sm">
          <Link href="/infocentrum/jaka-delka-terminovaneho-vkladu-je-nejlepsi" className="text-[#2a5298] font-semibold hover:text-[#1e3a5f]">Jaká délka vkladu je nejlepší →</Link>
          <Link href="/infocentrum/automaticka-obnova-terminovaneho-vkladu" className="text-[#2a5298] font-semibold hover:text-[#1e3a5f]">Automatická obnova termínovaného vkladu →</Link>
          <Link href="/infocentrum/nevyhody-terminovaneho-vkladu" className="text-[#2a5298] font-semibold hover:text-[#1e3a5f]">Nevýhody termínovaného vkladu →</Link>
        </div>
      </section>
    </div>
  );
}
