import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Termínovaný vklad – relativní jistota",
  description:
    "Praktické vysvětlení, proč je termínovaný vklad relativně jistý nástroj, jaká má omezení a jak ho bezpečně používat v osobních financích.",
};

export default function TerminovanyVkladRelativniJistotaPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <Breadcrumbs
        items={[
          { label: "Domů", href: "/" },
          { label: "Infocentrum", href: "/infocentrum" },
          { label: "Termínovaný vklad – relativní jistota" },
        ]}
      />

      <article className="prose prose-slate max-w-none prose-headings:text-[#1e3a5f] prose-a:text-[#2a5298] hover:prose-a:text-[#1e3a5f]">
        <h1 className="!text-3xl md:!text-4xl !font-extrabold !text-[#1e3a5f] !mb-6">
          Termínovaný vklad – relativní jistota
        </h1>

        <p>
          Termínovaný vklad bývá často označovaný jako „jistota“. Přesnější je ale mluvit o <strong>relativní jistotě</strong>:
          vklad je velmi konzervativní a předvídatelný, ale neznamená to, že je vždy nejlepší v každé situaci.
        </p>

        <h2>V čem je termínovaný vklad bezpečný</h2>
        <ul>
          <li>předem znáte úrokovou sazbu (u pevné sazby),</li>
          <li>víte, kdy vklad končí a jaký bude orientační výnos,</li>
          <li>vklady v bankách jsou pojištěny do limitu 100 000 EUR na klienta a banku.</li>
        </ul>

        <p>
          Pro běžného střadatele je to dobrý nástroj hlavně tehdy, když chce mít menší kolísání a nechce podstupovat
          investiční riziko jako u akcií.
        </p>

        <h2>Proč „relativní“ jistota a ne absolutní</h2>
        <p>
          Bezpečí vkladu neznamená, že vždy porazíte inflaci. Může nastat období, kdy ceny rostou rychleji než úroky,
          takže reálná hodnota peněz klesá. Další omezení je nižší flexibilita — během fixace peníze zpravidla
          nemáte volně k dispozici.
        </p>

        <h2>Nejčastější chyby běžných klientů</h2>
        <ul>
          <li>vložit všechny úspory na dlouhou fixaci bez rezervy,</li>
          <li>řešit jen sazbu a ne podmínky předčasného ukončení,</li>
          <li>nepohlídat si automatickou obnovu vkladu po splatnosti,</li>
          <li>neporovnat čistý výnos po zdanění.</li>
        </ul>

        <h2>Jak používat termínovaný vklad chytře</h2>
        <ol>
          <li>
            Nechte si bokem pohotovostní rezervu na spořicím účtu (ideálně 3–6 měsíčních výdajů).
          </li>
          <li>
            Na termínovaný vklad dávejte jen část peněz, které opravdu nebudete potřebovat.
          </li>
          <li>
            Rozdělte vklad na více částí s různou fixací (např. 6 a 12 měsíců), abyste měli lepší flexibilitu.
          </li>
          <li>
            Po splatnosti vždy zkontrolujte nové podmínky a rozhodněte se znovu, ne automaticky.
          </li>
        </ol>

        <h2>Shrnutí pro praxi</h2>
        <p>
          Termínovaný vklad je pro běžného uživatele užitečný „stabilizační“ nástroj. Neudělá zázraky, ale umí dobře
          chránit část úspor před zbytečným rizikem. Nejlépe funguje jako součást jednoduché strategie: rezerva na
          spořicím účtu + část peněz na termínovaném vkladu podle vašich cílů a časového plánu.
        </p>
      </article>

      <section className="mt-10 bg-white border border-slate-200 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-[#1e3a5f] mb-4">FAQ</h2>
        <div className="space-y-3 text-sm text-slate-700">
          <details>
            <summary className="cursor-pointer font-semibold text-[#1e3a5f]">Co znamená „relativní jistota“ v praxi?</summary>
            <p className="mt-2">Že je produkt stabilní a předvídatelný, ale stále má limity jako inflace nebo nižší likvidita.</p>
          </details>
          <details>
            <summary className="cursor-pointer font-semibold text-[#1e3a5f]">Je termínovaný vklad bez rizika?</summary>
            <p className="mt-2">Není bez rizika úplně. Je konzervativní, ale reálný výnos může být nižší kvůli inflaci.</p>
          </details>
        </div>
      </section>

      <section className="mt-10 bg-slate-50 border border-slate-200 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-[#1e3a5f] mb-3">Související témata</h2>
        <div className="flex flex-col gap-2 text-sm">
          <Link href="/infocentrum/proc-si-zaridit-terminovany-vklad" className="text-[#2a5298] hover:text-[#1e3a5f] font-semibold">
            Proč si zařídit termínovaný vklad →
          </Link>
          <Link href="/infocentrum/nevyhody-terminovaneho-vkladu" className="text-[#2a5298] hover:text-[#1e3a5f] font-semibold">
            Nevýhody termínovaného vkladu →
          </Link>
          <Link href="/infocentrum/uroceni-terminovanych-vkladu" className="text-[#2a5298] hover:text-[#1e3a5f] font-semibold">
            Úročení termínovaných vkladů →
          </Link>
        </div>
      </section>
    </div>
  );
}
