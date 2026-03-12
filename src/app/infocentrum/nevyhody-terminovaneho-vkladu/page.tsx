import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nevýhody termínovaného vkladu",
  description:
    "Přehled nevýhod termínovaných vkladů: omezená dostupnost peněz, riziko nižšího reálného výnosu a situace, kdy je vhodnější jiné řešení.",
};

export default function NevyhodyTerminovanehoVkladuPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <Breadcrumbs
        items={[
          { label: "Domů", href: "/" },
          { label: "Infocentrum", href: "/infocentrum" },
          { label: "Nevýhody termínovaného vkladu" },
        ]}
      />

      <article className="prose prose-slate max-w-none prose-headings:text-[#1e3a5f] prose-a:text-[#2a5298] hover:prose-a:text-[#1e3a5f]">
        <h1 className="!text-3xl md:!text-4xl !font-extrabold !text-[#1e3a5f] !mb-6">
          Nevýhody termínovaného vkladu
        </h1>

        <p>
          Termínovaný vklad je bezpečný a přehledný nástroj, ale není bez slabých míst. Aby vám opravdu pomohl,
          je dobré znát i jeho nevýhody a počítat s nimi dopředu.
        </p>

        <h2>1) Peníze nejsou volně dostupné</h2>
        <p>
          Největší nevýhodou je fixace. Po dobu vkladu se k penězům obvykle nedostanete bez sankce, nebo vůbec.
          Pokud hrozí, že budete prostředky potřebovat dřív, může být vhodnější spořicí účet.
        </p>

        <h2>2) Předčasný výběr bývá nevýhodný</h2>
        <p>
          U předčasného ukončení můžete přijít o část úroků, o celý výnos, případně zaplatit poplatek. Podmínky se liší
          podle banky, proto je důležité je číst ještě před založením vkladu.
        </p>

        <h2>3) Výnos nemusí překonat inflaci</h2>
        <p>
          I když je výnos předem známý, reálná kupní síla úspor může při vyšší inflaci klesat. Jinak řečeno: nominálně
          vyděláte, ale za stejné peníze si v budoucnu koupíte méně.
        </p>

        <h2>4) Nižší potenciál než dlouhodobé investice</h2>
        <p>
          Ve srovnání s akciemi nebo ETF má termínovaný vklad zpravidla nižší dlouhodobý výnos. Je to daň za vyšší
          stabilitu a menší kolísání.
        </p>

        <h2>5) Riziko automatické obnovy za horších podmínek</h2>
        <p>
          Některé banky po splatnosti vklad automaticky obnoví. Pokud mezitím klesly sazby, můžete skončit s horším
          úročením, aniž byste to aktivně chtěli.
        </p>

        <h2>Jak nevýhody omezit v praxi</h2>
        <ul>
          <li>vždy si nechte rezervu na okamžitě dostupném účtu,</li>
          <li>neuzamykejte všechny úspory do jedné fixace,</li>
          <li>porovnávejte čistý výnos po zdanění, ne jen reklamní sazbu,</li>
          <li>hlídejte datum splatnosti a podmínky obnovy.</li>
        </ul>

        <h2>Shrnutí</h2>
        <p>
          Termínovaný vklad je užitečný konzervativní nástroj, ale není ideální na všechno. Když předem počítáte
          s omezenou likviditou a správně rozložíte úspory, může fungovat velmi dobře jako součást vyváženého plánu.
        </p>
      </article>

      <section className="mt-10 bg-white border border-slate-200 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-[#1e3a5f] mb-4">FAQ</h2>
        <div className="space-y-3 text-sm text-slate-700">
          <details>
            <summary className="cursor-pointer font-semibold text-[#1e3a5f]">Jaká je největší nevýhoda termínovaného vkladu?</summary>
            <p className="mt-2">Nejčastěji omezená dostupnost peněz během fixace a případné sankce při předčasném ukončení.</p>
          </details>
          <details>
            <summary className="cursor-pointer font-semibold text-[#1e3a5f]">Dá se nevýhoda likvidity snížit?</summary>
            <p className="mt-2">Ano, pomáhá rozdělení úspor mezi rezervu na spořicím účtu a více vkladů s různou splatností.</p>
          </details>
        </div>
      </section>

      <section className="mt-10 bg-slate-50 border border-slate-200 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-[#1e3a5f] mb-3">Související témata</h2>
        <div className="flex flex-col gap-2 text-sm">
          <Link href="/infocentrum/proc-si-zaridit-terminovany-vklad" className="text-[#2a5298] hover:text-[#1e3a5f] font-semibold">
            Proč si zařídit termínovaný vklad →
          </Link>
          <Link href="/infocentrum/terminovany-vklad-relativni-jistota" className="text-[#2a5298] hover:text-[#1e3a5f] font-semibold">
            Termínovaný vklad – relativní jistota →
          </Link>
          <Link href="/infocentrum/minimalni-castka-terminovaneho-vkladu" className="text-[#2a5298] hover:text-[#1e3a5f] font-semibold">
            Minimální částka termínovaného vkladu →
          </Link>
        </div>
      </section>
    </div>
  );
}
