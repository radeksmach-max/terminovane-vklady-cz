import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Proč si zařídit termínovaný vklad",
  description:
    "Praktický přehled, proč si zařídit termínovaný vklad, jak funguje jednorázová a revolvingová varianta a kdy se která hodí.",
};

export default function ProcSiZariditTerminovanyVkladPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <Breadcrumbs
        items={[
          { label: "Domů", href: "/" },
          { label: "Infocentrum", href: "/infocentrum" },
          { label: "Proč si zařídit termínovaný vklad" },
        ]}
      />

      <article className="prose prose-slate max-w-none prose-headings:text-[#1e3a5f] prose-a:text-[#2a5298] hover:prose-a:text-[#1e3a5f]">
        <h1 className="!text-3xl md:!text-4xl !font-extrabold !text-[#1e3a5f] !mb-6">
          Proč si zařídit termínovaný vklad
        </h1>

        <p>
          Termínovaný vklad funguje v praxi na dvou bázích. Buď jde o <strong>jednorázový termínovaný vklad</strong>
          do určitého data, nebo o <strong>revolvingový termínovaný vklad</strong>, který se po splatnosti automaticky
          obnovuje. Právě volba mezi těmito dvěma režimy je pro běžného klienta klíčová.
        </p>

        <h2>Jednorázový termínovaný vklad</h2>
        <p>
          U jednorázové varianty jsou předem jasně nastavené podmínky: délka fixace, úroková sazba i datum splatnosti.
          V den splatnosti banka vklad ukončí a prostředky (jistina + úrok po zdanění) jsou vyplaceny klientovi.
          Ten pak s penězi volně naloží podle aktuální potřeby.
        </p>
        <p>
          Tato forma je vhodná pro lidi, kteří chtějí mít jasný konec vkladu — například když plánují konkrétní výdaj
          a potřebují mít v určitém termínu peníze k dispozici.
        </p>

        <h2>Revolvingový termínovaný vklad</h2>
        <p>
          Revolvingová varianta funguje „dokola“. Ke dni splatnosti se vklad automaticky obnoví na stejnou dobu,
          ale už s tehdy aktuální úrokovou sazbou. Sazba se tedy mezi jednotlivými obdobími může měnit.
        </p>
        <p>
          V praxi se často děje to, že naspořený úrok odchází na běžný účet a jistina se dál úročí v dalším cyklu.
          Pro klienta to znamená pohodlí bez nutnosti vše řešit ručně při každé splatnosti.
        </p>

        <h2>Proč si vklad zařídit právě v těchto režimech</h2>
        <ul>
          <li><strong>Kontrola:</strong> u jednorázového vkladu víte, kdy přesně vklad skončí.</li>
          <li><strong>Pohodlí:</strong> u revolvingu odpadá opakované zakládání nového vkladu.</li>
          <li><strong>Disciplína:</strong> fixace pomáhá nechat úspory opravdu pracovat.</li>
          <li><strong>Flexibilita strategií:</strong> můžete kombinovat kratší i delší vklady podle cíle.</li>
        </ul>

        <h2>Kdy je revolving prakticky výhodný</h2>
        <p>
          Revolving bývá užitečný zejména u kratších fixací. Klient se tím chrání proti problémům s likviditou,
          protože se k penězům dostává v kratších intervalech (vždy při splatnosti konkrétního cyklu), než kdyby měl
          celý obnos uzamčený na dlouhé období.
        </p>
        <p>
          To může být výhodnější než dlouhý vklad, který byste museli předčasně rušit se sankcí.
        </p>

        <h2>Na co si dát pozor před podpisem</h2>
        <ul>
          <li>podmínky předčasného ukončení,</li>
          <li>zda je autoobnova zapnutá nebo vypnutá,</li>
          <li>co přesně se při obnově děje s úrokem (vyplacení vs. kapitalizace),</li>
          <li>jak se mění sazba v dalších cyklech.</li>
        </ul>

        <h2>Shrnutí</h2>
        <p>
          Zařídit si termínovaný vklad dává smysl, když chcete konzervativně zhodnotit peníze a zároveň mít jasná
          pravidla. Jednorázový režim je vhodný pro konkrétní termín cíle, revolvingový zase pro průběžné, pohodlné
          obnovování. Nejlépe funguje tehdy, když ho sladíte se svojí rezervou a finančním plánem.
        </p>
      </article>

      <section className="mt-10 bg-white border border-slate-200 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-[#1e3a5f] mb-4">FAQ</h2>
        <div className="space-y-3 text-sm text-slate-700">
          <details>
            <summary className="cursor-pointer font-semibold text-[#1e3a5f]">Kdy zvolit jednorázový vklad?</summary>
            <p className="mt-2">Když máte konkrétní datum, kdy budete chtít mít peníze i výnos zpět k dispozici.</p>
          </details>
          <details>
            <summary className="cursor-pointer font-semibold text-[#1e3a5f]">Kdy je praktičtější revolving?</summary>
            <p className="mt-2">Pokud chcete méně administrativy a nevadí vám pravidelně kontrolovat nové podmínky po obnově.</p>
          </details>
        </div>
      </section>

      <section className="mt-10 bg-slate-50 border border-slate-200 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-[#1e3a5f] mb-3">Související témata</h2>
        <div className="flex flex-col gap-2 text-sm">
          <Link href="/infocentrum/terminovany-vklad-relativni-jistota" className="text-[#2a5298] hover:text-[#1e3a5f] font-semibold">
            Termínovaný vklad – relativní jistota →
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
