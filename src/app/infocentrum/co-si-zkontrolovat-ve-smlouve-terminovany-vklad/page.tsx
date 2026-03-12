import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Co si zkontrolovat ve smlouvě termínovaného vkladu",
  description:
    "Praktický checklist, co zkontrolovat ve smlouvě termínovaného vkladu: sazba, fixace, sankce, autoobnova a výplata úroku.",
};

export default function CoSiZkontrolovatVeSmlouveTerminovanyVkladPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <Breadcrumbs items={[{ label: "Domů", href: "/" }, { label: "Infocentrum", href: "/infocentrum" }, { label: "Co si zkontrolovat ve smlouvě" }]} />
      <article className="prose prose-slate max-w-none prose-headings:text-[#1e3a5f]">
        <h1 className="!text-3xl md:!text-4xl !font-extrabold !text-[#1e3a5f] !mb-6">Co si zkontrolovat ve smlouvě termínovaného vkladu</h1>
        <ol>
          <li>výše sazby a typ úročení,</li>
          <li>délka fixace a datum splatnosti,</li>
          <li>podmínky předčasného ukončení,</li>
          <li>pravidla automatické obnovy,</li>
          <li>způsob výplaty úroků a jistiny.</li>
        </ol>
      </article>

      <section className="mt-10 bg-white border border-slate-200 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-[#1e3a5f] mb-4">FAQ</h2>
        <div className="space-y-3 text-sm text-slate-700">
          <details>
            <summary className="cursor-pointer font-semibold text-[#1e3a5f]">Co je ve smlouvě nejdůležitější?</summary>
            <p className="mt-2">Sazba, délka fixace, podmínky předčasného ukončení a pravidla automatické obnovy.</p>
          </details>
          <details>
            <summary className="cursor-pointer font-semibold text-[#1e3a5f]">Má smysl chtít potvrzení podmínek písemně?</summary>
            <p className="mt-2">Ano, zejména u sankcí a autoobnovy je dobré mít klíčové body jasně potvrzené.</p>
          </details>
        </div>
      </section>
      <section className="mt-10 bg-slate-50 border border-slate-200 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-[#1e3a5f] mb-3">Související témata</h2>
        <div className="flex flex-col gap-2 text-sm">
          <Link href="/infocentrum/jak-vybrat-terminovany-vklad" className="text-[#2a5298] font-semibold hover:text-[#1e3a5f]">Jak vybrat termínovaný vklad →</Link>
          <Link href="/infocentrum/predcasne-zruseni-terminovaneho-vkladu" className="text-[#2a5298] font-semibold hover:text-[#1e3a5f]">Předčasné zrušení termínovaného vkladu →</Link>
        </div>
      </section>
    </div>
  );
}
