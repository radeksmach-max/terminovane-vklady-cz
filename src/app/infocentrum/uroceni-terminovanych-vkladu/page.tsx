import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Úročení termínovaných vkladů",
  description:
    "Vysvětlení pevné a variabilní sazby u termínovaných vkladů, včetně výhod, rizik a praktických doporučení pro střadatele.",
};

export default function UroceniTerminovanychVkladuPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <Breadcrumbs
        items={[
          { label: "Domů", href: "/" },
          { label: "Infocentrum", href: "/infocentrum" },
          { label: "Úročení termínovaných vkladů" },
        ]}
      />

      <article className="prose prose-slate max-w-none prose-headings:text-[#1e3a5f] prose-a:text-[#2a5298] hover:prose-a:text-[#1e3a5f]">
        <h1 className="!text-3xl md:!text-4xl !font-extrabold !text-[#1e3a5f] !mb-6">
          Úročení termínovaných vkladů
        </h1>

        <p>
          U termínovaných vkladů se nejčastěji setkáte se dvěma variantami úročení: <strong>pevnou</strong>
          {" "}a <strong>variabilní</strong> sazbou. Každý přístup má své výhody i nevýhody a hodí se pro jiný typ
          střadatele.
        </p>

        <h2>Pevná sazba</h2>
        <p>
          Pevná úroková sazba znamená jistotu. Už při založení termínovaného vkladu víte, jaký výnos při splatnosti
          dostanete (po zdanění je čistý výnos nižší o 15% srážkovou daň). Sazba se po dobu fixace nemění, takže máte
          dobrý přehled a lépe plánujete.
        </p>
        <p>
          Tento model je vhodný hlavně pro konzervativní klienty, kteří chtějí klid, předvídatelnost a nechtějí řešit
          vývoj trhu v průběhu vkladu.
        </p>

        <h2>Variabilní sazba</h2>
        <p>
          Variabilní sazba je pružnější, ale přináší i vyšší nejistotu. Často se odvíjí od situace na mezibankovním
          trhu, typicky například od sazby{" "}
          <a href="https://www.cnb.cz/cs/financni_trhy/penezni_trh/pribor/denni.jsp" target="_blank" rel="noopener noreferrer">
            PRIBOR
          </a>
          . Konkrétní metodiku si banky a finanční instituce nastavují samy.
        </p>
        <p>
          V praxi může variabilní model nabídnout vyšší potenciální výnos, ale zároveň i slabší výsledek než u pevné
          sazby. U některých produktů bývá garantovaný jen minimální výnos (v krajním případě i nižší než klient
          očekává), proto je důležité detailně číst podmínky produktu.
        </p>

        <h2>Co zvolit v praxi</h2>
        <p>
          Volba záleží hlavně na vaší ochotě riskovat a na tom, zda preferujete jistotu nebo možnost vyššího výnosu.
          Pokud chcete mít výsledek předem daný, bývá lepší pevná sazba. Pokud rozumíte rizikům a akceptujete kolísání,
          může dávat smysl variabilní varianta.
        </p>

        <p>
          Aktuální přehled nabídek si můžete orientačně porovnat třeba na{" "}
          <a
            href="https://www.finance.cz/ucty-a-sporeni/terminovane-vklady/srovnani-terminovanych-vkladu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            finance.cz
          </a>
          .
        </p>
      </article>
    </div>
  );
}
