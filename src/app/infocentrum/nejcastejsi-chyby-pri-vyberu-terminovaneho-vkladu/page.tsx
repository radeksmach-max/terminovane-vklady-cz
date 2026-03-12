import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Nejčastější chyby při výběru termínovaného vkladu",
  description:
    "Přehled nejčastějších chyb při výběru termínovaného vkladu a praktické tipy, jak se jim vyhnout.",
};

export default function NejcastejsiChybyPriVyberuTerminovanehoVkladuPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <Breadcrumbs items={[{ label: "Domů", href: "/" }, { label: "Infocentrum", href: "/infocentrum" }, { label: "Nejčastější chyby při výběru" }]} />
      <article className="prose prose-slate max-w-none prose-headings:text-[#1e3a5f]">
        <h1 className="!text-3xl md:!text-4xl !font-extrabold !text-[#1e3a5f] !mb-6">Nejčastější chyby při výběru termínovaného vkladu</h1>
        <ul>
          <li>výběr pouze podle nejvyšší sazby bez kontroly podmínek,</li>
          <li>uzamčení celé rezervy do jedné fixace,</li>
          <li>ignorování předčasného ukončení,</li>
          <li>nepohlídaná automatická obnova,</li>
          <li>porovnávání hrubých místo čistých výnosů.</li>
        </ul>
        <h2>Jak se chybám vyhnout</h2>
        <p>Použijte jednoduchý checklist: cíl, likvidita, čistý výnos, sankce, autoobnova, rozdělení částky.</p>
      </article>

      <section className="mt-10 bg-white border border-slate-200 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-[#1e3a5f] mb-4">FAQ</h2>
        <div className="space-y-3 text-sm text-slate-700">
          <details>
            <summary className="cursor-pointer font-semibold text-[#1e3a5f]">Která chyba bývá nejdražší?</summary>
            <p className="mt-2">Nejčastěji volba jen podle sazby bez kontroly podmínek předčasného ukončení a autoobnovy.</p>
          </details>
          <details>
            <summary className="cursor-pointer font-semibold text-[#1e3a5f]">Jak chybám předejít v praxi?</summary>
            <p className="mt-2">Použijte jednoduchý checklist a porovnávejte vždy čistý výnos, ne jen reklamní procento.</p>
          </details>
        </div>
      </section>

      <section className="mt-10 bg-slate-50 border border-slate-200 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-[#1e3a5f] mb-3">Související témata</h2>
        <div className="flex flex-col gap-2 text-sm">
          <Link href="/infocentrum/jak-vybrat-terminovany-vklad" className="text-[#2a5298] font-semibold hover:text-[#1e3a5f]">Jak vybrat termínovaný vklad →</Link>
          <Link href="/infocentrum/co-si-zkontrolovat-ve-smlouve-terminovany-vklad" className="text-[#2a5298] font-semibold hover:text-[#1e3a5f]">Co si zkontrolovat ve smlouvě →</Link>
        </div>
      </section>
    </div>
  );
}
