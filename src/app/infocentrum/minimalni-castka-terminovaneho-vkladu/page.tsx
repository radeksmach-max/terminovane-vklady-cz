import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Minimální částka termínovaného vkladu",
  description:
    "Jaká bývá minimální částka pro založení termínovaného vkladu, proč se liší mezi bankami a na co si dát pozor při výběru produktu.",
};

export default function MinimalniCastkaTerminovanehoVkladuPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <Breadcrumbs
        items={[
          { label: "Domů", href: "/" },
          { label: "Infocentrum", href: "/infocentrum" },
          { label: "Minimální částka termínovaného vkladu" },
        ]}
      />

      <article className="prose prose-slate max-w-none prose-headings:text-[#1e3a5f] prose-a:text-[#2a5298] hover:prose-a:text-[#1e3a5f]">
        <h1 className="!text-3xl md:!text-4xl !font-extrabold !text-[#1e3a5f] !mb-6">
          Minimální částka termínovaného vkladu
        </h1>

        <p>
          Termínovaný vklad bývá omezen několika parametry a jedním z nejdůležitějších je právě
          <strong> minimální výše vkladu</strong>. Banka tím určuje, od jaké částky lze produkt založit,
          a zároveň může nastavit i maximální limit pro jeden vklad.
        </p>

        <h2>Jaké minimum je běžné v praxi</h2>
        <p>
          U běžných nabídek pro fyzické osoby se nejčastěji setkáte s minimem kolem <strong>1 000 Kč</strong>
          nebo <strong>5 000 Kč</strong>. Tyto částky jsou dostupné i pro menší střadatele a umožňují začít
          s konzervativním spořením bez vysokého vstupního kapitálu.
        </p>

        <h2>Proč některé produkty chtějí vyšší částku</h2>
        <p>
          U výnosnějších nebo specifičtějších termínovaných vkladů bývá minimální částka vyšší —
          například <strong>50 000 Kč a více</strong>. Důvodem může být obchodní strategie banky,
          aktuální poptávka na trhu, délka fixace nebo typ produktu.
        </p>

        <p>
          Jinými slovy: čím „prémiovější“ podmínky vklad nabízí, tím častěji banka požaduje vyšší vstupní
          částku. Neplatí to ale vždy, proto je důležité porovnávat konkrétní nabídky.
        </p>

        <h2>Na co si dát při výběru pozor</h2>
        <ul>
          <li>zda splňujete minimální částku bez narušení své finanční rezervy,</li>
          <li>jestli není příliš vysoká minimální částka vykoupena jen nepatrně lepší sazbou,</li>
          <li>jaké jsou podmínky předčasného ukončení vkladu,</li>
          <li>zda je možné založit více menších vkladů místo jednoho velkého.</li>
        </ul>

        <h2>Shrnutí</h2>
        <p>
          Minimální částka termínovaného vkladu je klíčový filtr při výběru produktu. Pro většinu lidí je
          ideální začít u nižších limitů (1 000–5 000 Kč), zatímco vyšší minima dávají smysl hlavně tehdy,
          když už máte vybudovanou rezervu a chcete efektivně zhodnotit větší obnos.
        </p>
      </article>
    </div>
  );
}
