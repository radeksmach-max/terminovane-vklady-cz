import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Daň z úroků u termínovaného vkladu",
  description:
    "Jak funguje daň z úroků u termínovaného vkladu, rozdíl mezi hrubým a čistým výnosem a jak nabídky správně porovnávat.",
};

export default function DanZUrokuTerminovanyVkladPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <Breadcrumbs items={[{ label: "Domů", href: "/" }, { label: "Infocentrum", href: "/infocentrum" }, { label: "Daň z úroků u termínovaného vkladu" }]} />

      <article className="prose prose-slate max-w-none prose-headings:text-[#1e3a5f]">
        <h1 className="!text-3xl md:!text-4xl !font-extrabold !text-[#1e3a5f] !mb-6">Daň z úroků u termínovaného vkladu</h1>
        <p>
          U termínovaného vkladu je klíčové sledovat čistý výnos po zdanění. Reklamní sazba je hrubá, ale na účet vám
          přijde částka po odečtení srážkové daně z úroků.
        </p>

        <h2>Hrubý vs čistý výnos</h2>
        <ul>
          <li>hrubý výnos = úrok podle sazby,</li>
          <li>čistý výnos = hrubý výnos po zdanění,</li>
          <li>pro porovnání produktů vždy používejte čistý výnos.</li>
        </ul>

        <h2>Jak nabídky porovnat správně</h2>
        <ol>
          <li>vypočítejte čistý výnos pro stejnou částku a stejný horizont,</li>
          <li>zohledněte délku fixace a podmínky předčasného ukončení,</li>
          <li>porovnejte i reálný výnos po inflaci.</li>
        </ol>

        <h2>Častá chyba</h2>
        <p>
          Mnoho lidí porovnává pouze „% p.a.“ bez přepočtu na čistou částku. Výsledkem bývá horší reálné rozhodnutí,
          hlavně u vkladů s odlišnou délkou fixace.
        </p>
      </article>

      <section className="mt-10 bg-white border border-slate-200 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-[#1e3a5f] mb-4">FAQ</h2>
        <div className="space-y-3 text-sm text-slate-700">
          <details>
            <summary className="cursor-pointer font-semibold text-[#1e3a5f]">Musím daň z úroků řešit v přiznání?</summary>
            <p className="mt-2">Ve většině běžných případů je daň řešená srážkou bankou, ale konkrétní situaci je vhodné ověřit podle aktuálních pravidel.</p>
          </details>
          <details>
            <summary className="cursor-pointer font-semibold text-[#1e3a5f]">Proč porovnávat čistý výnos?</summary>
            <p className="mt-2">Protože čistý výnos ukazuje skutečnou částku, která vám po zdanění reálně zůstane.</p>
          </details>
        </div>
      </section>

      <section className="mt-10 bg-slate-50 border border-slate-200 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-[#1e3a5f] mb-3">Související témata</h2>
        <div className="flex flex-col gap-2 text-sm">
          <Link href="/infocentrum/uroceni-terminovanych-vkladu" className="text-[#2a5298] font-semibold hover:text-[#1e3a5f]">Úročení termínovaných vkladů →</Link>
          <Link href="/infocentrum/terminovany-vklad-a-inflace" className="text-[#2a5298] font-semibold hover:text-[#1e3a5f]">Termínovaný vklad a inflace →</Link>
          <Link href="/#kalkulator" className="text-[#2a5298] font-semibold hover:text-[#1e3a5f]">Kalkulačka výnosů →</Link>
        </div>
      </section>
    </div>
  );
}
