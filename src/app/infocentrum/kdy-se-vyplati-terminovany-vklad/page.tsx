import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Kdy se vyplatí termínovaný vklad",
  description:
    "Praktické situace, kdy se termínovaný vklad vyplatí, a kdy je naopak lepší zvolit spořicí účet nebo jiný konzervativní produkt.",
};

export default function KdySeVyplatiTerminovanyVkladPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <Breadcrumbs items={[{ label: "Domů", href: "/" }, { label: "Infocentrum", href: "/infocentrum" }, { label: "Kdy se vyplatí termínovaný vklad" }]} />

      <article className="prose prose-slate max-w-none prose-headings:text-[#1e3a5f]">
        <h1 className="!text-3xl md:!text-4xl !font-extrabold !text-[#1e3a5f] !mb-6">Kdy se vyplatí termínovaný vklad</h1>
        <p>
          Termínovaný vklad se vyplatí hlavně tehdy, když chcete konzervativně zhodnotit peníze a současně víte, že je
          po dobu fixace nebudete potřebovat. Je to nástroj pro plánované cíle, ne pro pohotovostní rezervu.
        </p>

        <h2>Typické situace, kdy dává smysl</h2>
        <ul>
          <li>máte oddělenou rezervu na neočekávané výdaje,</li>
          <li>chcete mít předvídatelný výnos bez velkého kolísání,</li>
          <li>potřebujete konzervativně pracovat s penězi na 6–24 měsíců,</li>
          <li>preferujete jednoduchý produkt bez složité správy.</li>
        </ul>

        <h2>Kdy se naopak nevyplatí</h2>
        <ul>
          <li>když je vysoká šance, že peníze budete potřebovat dřív,</li>
          <li>když nemáte vytvořenou likvidní rezervu,</li>
          <li>když řešíte velmi krátký horizont a potřebujete flexibilitu.</li>
        </ul>

        <h2>Praktický mini-checklist</h2>
        <ol>
          <li>Mám rezervu alespoň na několik měsíců výdajů?</li>
          <li>Vím, že tyto peníze po dobu fixace nebudu potřebovat?</li>
          <li>Rozumím podmínkám předčasného ukončení?</li>
        </ol>

        <h2>Shrnutí</h2>
        <p>
          Pokud potřebujete jistotu a máte časový plán, termínovaný vklad je užitečný. Pokud je pro vás zásadní
          okamžitá dostupnost, lepší volbou bývá spořicí účet nebo kombinace obou produktů.
        </p>
      </article>

      <section className="mt-10 bg-white border border-slate-200 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-[#1e3a5f] mb-4">FAQ</h2>
        <div className="space-y-3 text-sm text-slate-700">
          <details>
            <summary className="cursor-pointer font-semibold text-[#1e3a5f]">Je termínovaný vklad vhodný i na kratší dobu?</summary>
            <p className="mt-2">Ano, pokud víte, že peníze během fixace nebudete potřebovat a chcete konzervativní výnos.</p>
          </details>
          <details>
            <summary className="cursor-pointer font-semibold text-[#1e3a5f]">Kdy je lepší spořicí účet?</summary>
            <p className="mt-2">Když je pro vás zásadní okamžitá dostupnost prostředků bez omezení.</p>
          </details>
        </div>
      </section>

      <section className="mt-10 bg-slate-50 border border-slate-200 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-[#1e3a5f] mb-3">Související témata</h2>
        <div className="flex flex-col gap-2 text-sm">
          <Link href="/infocentrum/terminovany-vklad-vs-sporici-ucet" className="text-[#2a5298] font-semibold hover:text-[#1e3a5f]">Termínovaný vklad vs spořicí účet →</Link>
          <Link href="/infocentrum/terminovany-vklad-a-inflace" className="text-[#2a5298] font-semibold hover:text-[#1e3a5f]">Termínovaný vklad a inflace →</Link>
          <Link href="/infocentrum/proc-si-zaridit-terminovany-vklad" className="text-[#2a5298] font-semibold hover:text-[#1e3a5f]">Proč si zařídit termínovaný vklad →</Link>
        </div>
      </section>
    </div>
  );
}
