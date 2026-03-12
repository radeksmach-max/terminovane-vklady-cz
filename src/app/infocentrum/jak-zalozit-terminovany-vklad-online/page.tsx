import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Jak založit termínovaný vklad online",
  description:
    "Návod krok za krokem, jak založit termínovaný vklad online: co připravit, na co si dát pozor a co zkontrolovat po založení.",
};

export default function JakZalozitTerminovanyVkladOnlinePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <Breadcrumbs items={[{ label: "Domů", href: "/" }, { label: "Infocentrum", href: "/infocentrum" }, { label: "Jak založit termínovaný vklad online" }]} />
      <article className="prose prose-slate max-w-none prose-headings:text-[#1e3a5f]">
        <h1 className="!text-3xl md:!text-4xl !font-extrabold !text-[#1e3a5f] !mb-6">Jak založit termínovaný vklad online</h1>
        <ol>
          <li>vyberte banku a parametry vkladu,</li>
          <li>ověřte sazbu, fixaci a podmínky smlouvy,</li>
          <li>dokončete identifikaci klienta,</li>
          <li>pošlete prostředky podle pokynů banky,</li>
          <li>zkontrolujte potvrzení o založení.</li>
        </ol>
      </article>

      <section className="mt-10 bg-white border border-slate-200 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-[#1e3a5f] mb-4">FAQ</h2>
        <div className="space-y-3 text-sm text-slate-700">
          <details>
            <summary className="cursor-pointer font-semibold text-[#1e3a5f]">Co zkontrolovat po založení?</summary>
            <p className="mt-2">Potvrzení o založení, datum splatnosti, podmínky autoobnovy a pravidla předčasného ukončení.</p>
          </details>
          <details>
            <summary className="cursor-pointer font-semibold text-[#1e3a5f]">Je online založení bezpečné?</summary>
            <p className="mt-2">Ano, pokud používáte oficiální kanály banky a pečlivě projdete smluvní podmínky.</p>
          </details>
        </div>
      </section>

      <section className="mt-10 bg-slate-50 border border-slate-200 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-[#1e3a5f] mb-3">Související témata</h2>
        <div className="flex flex-col gap-2 text-sm">
          <Link href="/infocentrum/co-si-zkontrolovat-ve-smlouve-terminovany-vklad" className="text-[#2a5298] font-semibold hover:text-[#1e3a5f]">Co si zkontrolovat ve smlouvě →</Link>
          <Link href="/infocentrum/jak-vybrat-terminovany-vklad" className="text-[#2a5298] font-semibold hover:text-[#1e3a5f]">Jak vybrat termínovaný vklad →</Link>
        </div>
      </section>
    </div>
  );
}
