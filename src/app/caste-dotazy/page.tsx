import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

const faqs = [
  {
    question: "Co je termínovaný vklad?",
    answer:
      "Termínovaný vklad je bankovní produkt, u kterého uložíte peníze na předem danou dobu a za předem sjednanou úrokovou sazbu. Po dobu fixace bývá přístup k penězům omezený nebo sankcionovaný.",
  },
  {
    question: "Jak funguje úročení termínovaného vkladu?",
    answer:
      "Banka připisuje úrok podle sjednané sazby a délky vkladu. U většiny nabídek znáte výnos dopředu, takže si můžete spočítat hrubý i čistý výsledek ještě před založením.",
  },
  {
    question: "Je termínovaný vklad bezpečný?",
    answer:
      "Ano, pokud jde o banku s licencí v ČR nebo v EU. Vklady bývají ze zákona pojištěné, takže jde o jeden z nejkonzervativnějších způsobů uložení peněz.",
  },
  {
    question: "Jsou termínované vklady pojištěné?",
    answer:
      "Ano. Standardně se pojištění vztahuje do limitu 100 000 EUR na jednoho klienta v jedné bance, přičemž se započítává jistina i připsané úroky.",
  },
  {
    question: "Jak dlouho se peníze ukládají na termínovaný vklad?",
    answer:
      "Typická délka fixace se pohybuje od jednoho měsíce po několik let. Nejčastější bývají horizonty 3, 6, 12 nebo 24 měsíců.",
  },
  {
    question: "Mohu vybrat peníze před splatností?",
    answer:
      "Obvykle ano, ale často za cenu sankce. Některé banky sníží úrok, jiné účtují poplatek a někde je předčasný výběr výrazně omezený.",
  },
  {
    question: "Jaké sankce hrozí při předčasném zrušení vkladu?",
    answer:
      "Nejčastěji přijdete o část nebo o všechny úroky. V některých případech banka přidává i samostatný poplatek za předčasné ukončení.",
  },
  {
    question: "Jaká je minimální částka pro založení termínovaného vkladu?",
    answer:
      "Záleží na bance a konkrétním produktu. U běžných nabídek se často pohybuje od 1 000 Kč do 5 000 Kč, u vybraných produktů může být výrazně vyšší.",
  },
  {
    question: "Existuje i maximální výše termínovaného vkladu?",
    answer:
      "Ano, některé banky stanovují horní limit pro jeden vklad nebo pro zvýhodněnou sazbu. Vyšší částky je pak vhodné rozdělit mezi více bank nebo více smluv.",
  },
  {
    question: "Je lepší krátká nebo dlouhá fixace?",
    answer:
      "Krátká fixace nabízí větší flexibilitu, dlouhá fixace dává jistotu sazby na delší dobu. Správná volba záleží na tom, kdy budete peníze potřebovat a jaký čekáte vývoj sazeb.",
  },
  {
    question: "Kdy se vyplatí termínovaný vklad více než spořicí účet?",
    answer:
      "Typicky tehdy, když peníze několik měsíců nebudete potřebovat a chcete si zafixovat známou sazbu. Naopak pro pohotovostní rezervu bývá vhodnější spořicí účet.",
  },
  {
    question: "Jaký je hlavní rozdíl mezi termínovaným vkladem a spořicím účtem?",
    answer:
      "Spořicí účet nabízí rychlou dostupnost peněz, ale sazba se může měnit. Termínovaný vklad omezuje přístup k penězům, ale za to dává větší jistotu výnosu po dobu fixace.",
  },
  {
    question: "Vyplatí se termínovaný vklad i při nižších sazbách?",
    answer:
      "Může dávat smysl, pokud je pro vás prioritou jistota a ne maximální výnos. Nízká sazba ale vždy stojí za porovnání se spořicím účtem, inflací a alternativami.",
  },
  {
    question: "Jak termínovaný vklad ovlivňuje inflace?",
    answer:
      "Inflace snižuje reálnou hodnotu výnosu. I když nominálně vyděláte, při vyšší inflaci může být skutečný přínos slabší nebo dokonce záporný.",
  },
  {
    question: "Platí se z úroků daň?",
    answer:
      "Ano. U fyzických osob banka standardně strhne srážkovou daň automaticky, takže klient většinou dostává už čistý výnos a nic dalšího neřeší.",
  },
  {
    question: "Jak spočítat čistý výnos termínovaného vkladu?",
    answer:
      "Nestačí sledovat jen nominální sazbu. Je potřeba započítat délku uložení, způsob úročení a srážkovou daň, aby bylo jasné, kolik skutečně dostanete po splatnosti.",
  },
  {
    question: "Lze založit termínovaný vklad online?",
    answer:
      "Ano, řada bank umožňuje sjednání kompletně online. Obvykle potřebujete běžný účet, ověření identity a potvrzení smluvních podmínek.",
  },
  {
    question: "Musím mít u banky běžný účet?",
    answer:
      "Někde ano, jinde ne. Některé banky bez běžného účtu termínovaný vklad nezaloží, jiné umožní samostatný produkt nebo založení přes referenční účet.",
  },
  {
    question: "Co znamená automatická obnova termínovaného vkladu?",
    answer:
      "Po splatnosti banka vklad automaticky prodlouží na nové období podle tehdy platných podmínek. Pokud si to nepohlídáte, můžete skončit s méně výhodnou sazbou, než jakou nabízí trh.",
  },
  {
    question: "Jak vypnout automatickou obnovu?",
    answer:
      "Záleží na podmínkách banky. Obvykle ji lze zrušit v internetovém bankovnictví, na pobočce nebo písemnou instrukcí ještě před datem splatnosti.",
  },
  {
    question: "Mohu mít více termínovaných vkladů najednou?",
    answer:
      "Ano. Rozdělení peněz do více vkladů s různou splatností je běžná strategie, která zlepšuje likviditu a snižuje závislost na jediném termínu.",
  },
  {
    question: "Má smysl rozložit peníze mezi více bank?",
    answer:
      "Ano, zejména u vyšších částek. Pomáhá to kvůli limitu pojištění vkladů i kvůli lepší flexibilitě při budoucím přesouvání peněz.",
  },
  {
    question: "Co si zkontrolovat ve smlouvě před podpisem?",
    answer:
      "Klíčové jsou délka fixace, přesná sazba, daňový režim, podmínky předčasného ukončení, automatická obnova a způsob výplaty po splatnosti.",
  },
  {
    question: "Jsou úroky pevné po celou dobu vkladu?",
    answer:
      "Ve většině případů ano, ale vždy záleží na konkrétní smlouvě. Právě jistota sazby je jedním z hlavních důvodů, proč si lidé termínovaný vklad vybírají.",
  },
  {
    question: "Jak poznat výhodný termínovaný vklad?",
    answer:
      "Porovnávejte čistý výnos, délku fixace, podmínky při předčasném výběru, minimální částku a pravidla obnovy. Samotná sazba bez kontextu nestačí.",
  },
  {
    question: "Je vhodné uložit na termínovaný vklad celou rezervu?",
    answer:
      "Obvykle ne. Pohotovostní rezerva by měla zůstat likvidní, aby byla kdykoliv k dispozici. Termínovaný vklad je vhodnější pro peníze, které opravdu nebudete potřebovat.",
  },
  {
    question: "Pro koho je termínovaný vklad vhodný?",
    answer:
      "Hodí se pro konzervativní střadatele, kteří chtějí předem známý výnos a nechtějí podstupovat investiční riziko. Využití dává i při plánování budoucího výdaje v jasném termínu.",
  },
  {
    question: "Pro koho termínovaný vklad vhodný není?",
    answer:
      "Nehodí se pro peníze, které můžete potřebovat kdykoliv, ani pro lidi, kteří hledají vysoký dlouhodobý výnos a jsou ochotni přijmout kolísání hodnoty investic.",
  },
  {
    question: "Jaký je rozdíl mezi hrubým a čistým výnosem?",
    answer:
      "Hrubý výnos je částka před zdaněním. Čistý výnos je to, co vám po odečtení daně skutečně zůstane a co má smysl mezi bankami reálně porovnávat.",
  },
  {
    question: "Kde najdu další informace k výběru termínovaného vkladu?",
    answer:
      "Praktické návody najdete v našem infocentru, kde řešíme porovnání se spořicím účtem, délku fixace, pojištění vkladů i časté chyby při výběru.",
  },
] as const;

export const metadata: Metadata = {
  title: "Časté dotazy k termínovaným vkladům",
  description:
    "30 praktických otázek a odpovědí k termínovaným vkladům: bezpečnost, pojištění, předčasný výběr, daň, délka fixace i výběr vhodné nabídky.",
  alternates: {
    canonical: "/caste-dotazy",
  },
};

export default function CasteDotazyPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <Breadcrumbs
        items={[
          { label: "Domů", href: "/" },
          { label: "Časté dotazy" },
        ]}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <header className="mb-10">
        <span className="inline-flex items-center rounded-full border border-[#cbd8ef] bg-[#eef4ff] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#2a5298]">
          FAQ k termínovaným vkladům
        </span>
        <h1 className="mt-4 text-3xl md:text-4xl font-extrabold text-[#1e3a5f]">
          Časté dotazy k termínovaným vkladům
        </h1>
        <p className="mt-4 max-w-3xl text-slate-600 leading-relaxed">
          Přehled 30 nejdůležitějších otázek, které lidé řeší před založením termínovaného vkladu.
          Najdete tu stručné a praktické odpovědi k bezpečnosti, výnosu, zdanění, délce fixace i práci s rezervou.
        </p>
      </header>

      <section className="mb-10 rounded-2xl bg-gradient-to-br from-[#1e3a5f] to-[#2a5298] p-6 md:p-8 text-white shadow-sm">
        <h2 className="text-xl font-bold">Co na této stránce najdete</h2>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-blue-100">
          Dotazy jsou záměrně psané jednoduše a bez marketingové omáčky. Pokud budete chtít jít více do hloubky,
          navazuje na ně infocentrum se samostatnými články o pojištění vkladů, předčasném ukončení nebo výběru délky vkladu.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {faqs.map((faq, index) => (
          <article key={faq.question} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-wide text-[#2a5298]">
              Dotaz {String(index + 1).padStart(2, "0")}
            </p>
            <h2 className="mt-2 text-xl font-bold text-[#1e3a5f]">{faq.question}</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-700">{faq.answer}</p>
          </article>
        ))}
      </section>

      <section className="mt-12 grid gap-6 md:grid-cols-3">
        <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <h2 className="text-lg font-bold text-[#1e3a5f]">Začněte průvodcem</h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            Pokud řešíte první výběr, nejpraktičtější je projít si hlavní článek o tom, jak termínovaný vklad vybírat.
          </p>
          <Link href="/infocentrum/jak-vybrat-terminovany-vklad" className="mt-4 inline-block text-sm font-semibold text-[#2a5298] hover:text-[#1e3a5f]">
            Jak vybrat termínovaný vklad →
          </Link>
        </article>
        <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <h2 className="text-lg font-bold text-[#1e3a5f]">Porovnejte alternativy</h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            Ne každá situace končí termínovaným vkladem. Někdy je vhodnější spořicí účet nebo rozdělení peněz mezi více řešení.
          </p>
          <Link href="/infocentrum/terminovany-vklad-vs-sporici-ucet" className="mt-4 inline-block text-sm font-semibold text-[#2a5298] hover:text-[#1e3a5f]">
            Termínovaný vklad vs spořicí účet →
          </Link>
        </article>
        <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <h2 className="text-lg font-bold text-[#1e3a5f]">Spočítejte čistý výnos</h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            Pro rychlé rozhodnutí je důležitější čistý výnos než samotná sazba. Kalkulačka na homepage to ukáže během pár sekund.
          </p>
          <Link href="/#kalkulator" className="mt-4 inline-block text-sm font-semibold text-[#2a5298] hover:text-[#1e3a5f]">
            Otevřít kalkulačku →
          </Link>
        </article>
      </section>
    </div>
  );
}
