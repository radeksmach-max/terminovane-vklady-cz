import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Jak vybrat termínovaný vklad (2026): praktický návod krok za krokem",
  description:
    "Kompletní návod, podle čeho vybrat termínovaný vklad: čistý výnos, délka fixace, předčasné zrušení, autoobnova, pojištění vkladů i srovnání se spořicím účtem.",
};

export default function JakVybratTerminovanyVkladPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <Breadcrumbs
        items={[
          { label: "Domů", href: "/" },
          { label: "Infocentrum", href: "/infocentrum" },
          { label: "Jak vybrat termínovaný vklad" },
        ]}
      />

      <article className="prose prose-slate max-w-none prose-headings:text-[#1e3a5f]">
        <h1 className="!text-3xl md:!text-4xl !font-extrabold !text-[#1e3a5f] !mb-6">
          Jak vybrat termínovaný vklad
        </h1>

        <p className="text-lg leading-relaxed">
          Vybrat termínovaný vklad neznamená jen najít nejvyšší sazbu. Rozhoduje i to, kdy budete peníze potřebovat,
          jaké jsou podmínky předčasného ukončení, zda se vklad automaticky obnovuje, jak vychází čistý výnos po
          zdanění a jestli máte mimo vklad dostatečnou rezervu. Právě tyto detaily dělají rozdíl mezi „dobrou nabídkou
          na papíře“ a skutečně vhodným řešením pro vaši situaci.
        </p>

        <p>
          V tomto hlavním průvodci najdete konkrétní rozhodovací postup, přehledné tabulky, modelové scénáře i odkazy
          na navazující články v infocentru. Cíl je jednoduchý: pomoct vám vybrat termínovaný vklad prakticky,
          bezpečně a bez zbytečných chyb.
        </p>

        <h2 id="ve-zkratce">Jak vybrat termínovaný vklad ve zkratce</h2>
      </article>

      <section className="mt-6 mb-10 bg-white border border-slate-200 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-[#1e3a5f] mb-3">Obsah článku</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
          <a href="#ve-zkratce" className="text-[#2a5298] font-semibold hover:text-[#1e3a5f]">Jak vybrat vklad ve zkratce</a>
          <a href="#checklist" className="text-[#2a5298] font-semibold hover:text-[#1e3a5f]">Checklist krok za krokem</a>
          <a href="#parametry" className="text-[#2a5298] font-semibold hover:text-[#1e3a5f]">Podle čeho porovnávat vklady</a>
          <a href="#vs-sporici" className="text-[#2a5298] font-semibold hover:text-[#1e3a5f]">Vklad vs spořicí účet</a>
          <a href="#delka-vkladu" className="text-[#2a5298] font-semibold hover:text-[#1e3a5f]">Jak zvolit délku vkladu</a>
          <a href="#predcasne" className="text-[#2a5298] font-semibold hover:text-[#1e3a5f]">Předčasné ukončení</a>
          <a href="#bezpecnost" className="text-[#2a5298] font-semibold hover:text-[#1e3a5f]">Bezpečnost a pojištění vkladů</a>
          <a href="#faq" className="text-[#2a5298] font-semibold hover:text-[#1e3a5f]">FAQ</a>
        </div>
      </section>

      <section className="mt-6 mb-10 bg-slate-50 border border-slate-200 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-[#1e3a5f] mb-3">Jak vybrat termínovaný vklad v kostce</h2>
        <ul className="list-disc pl-5 space-y-2 text-sm text-slate-700">
          <li>
            Určete si, <strong>kdy nejdříve budete peníze potřebovat</strong>, a podle toho zvolte fixaci.
          </li>
          <li>
            Na vklad dejte jen částku, kterou můžete postrádat. <strong>Rezerva má zůstat likvidní</strong>.
          </li>
          <li>
            Porovnávejte <strong>čistý výnos po zdanění</strong>, ne jen reklamní sazbu.
          </li>
          <li>
            Ověřte podmínky <strong>předčasného výběru</strong> (ztráta úroku, poplatek, sankce).
          </li>
          <li>
            Zkontrolujte pravidla <strong>automatické obnovy</strong> po splatnosti.
          </li>
          <li>
            U větší částky zvažte <strong>rozdělení do více vkladů</strong> s různou splatností.
          </li>
          <li>
            Ověřte <strong>pojištění vkladů</strong> a porovnejte i alternativu
            <Link href="/infocentrum/terminovany-vklad-vs-sporici-ucet" className="text-[#2a5298] font-semibold hover:text-[#1e3a5f]">
              {" "}
              termínovaný vklad vs spořicí účet
            </Link>
            .
          </li>
        </ul>
      </section>

      <article className="prose prose-slate max-w-none prose-headings:text-[#1e3a5f]">
        <h2 id="checklist">Checklist výběru termínovaného vkladu krok za krokem</h2>
        <p>
          Níže je osvědčený postup, podle kterého zvládnete porovnat nabídky bez zmatku. Hodí se pro běžného
          střadatele, který řeší hlavně bezpečnost, výnos, dostupnost peněz a jednoduchost.
        </p>

        <h3>1) Ujasněte si časový horizont</h3>
        <p>
          Nejdřív si odpovězte: „Kdy nejpozději budu tyto peníze potřebovat?“ Pokud víte, že za 9 měsíců budete
          financovat auto, rekonstrukci nebo jiné větší výdaje, dvouletá fixace je spíš riziko. Termínovaný vklad má
          fungovat pro váš plán, ne proti němu.
        </p>

        <h3>2) Oddělte rezervu od peněz, které můžete zamknout</h3>
        <p>
          Na termínovaný vklad patří až peníze „navíc“. Pohotovostní rezerva by měla zůstat dostupná, typicky na
          spořicím účtu. Pokud rezervu teprve budujete, bývá lepší začít likvidněji a fixovat až další volné prostředky.
        </p>

        <h3>3) Porovnávejte čistý výnos, ne jen sazbu</h3>
        <p>
          Sazba je jen jeden údaj. Rozhodující je čistý výnos po dani a po zohlednění podmínek produktu. Pro rychlou
          orientaci můžete použít
          <Link href="/#kalkulator" className="text-[#2a5298] font-semibold hover:text-[#1e3a5f]">
            {" "}
            kalkulačku výnosů
          </Link>
          . Podrobněji téma vysvětluje článek
          <Link href="/infocentrum/dan-z-uroku-terminovany-vklad" className="text-[#2a5298] font-semibold hover:text-[#1e3a5f]">
            {" "}
            Daň z úroků u termínovaného vkladu
          </Link>
          .
        </p>

        <h3>4) Zkontrolujte podmínky předčasného ukončení</h3>
        <p>
          Jedna z nejdůležitějších částí výběru. U některých bank přijdete při předčasném ukončení o část úroku,
          jinde o celý úrok a někde může být i další poplatek. Pokud tenhle bod podceníte, i „výhodná“ sazba může
          dopadnout špatně.
        </p>

        <h3>5) Prověřte automatickou obnovu</h3>
        <p>
          Některé vklady se po splatnosti obnoví automaticky na další období. To může být pohodlné, ale jen pokud o tom
          víte a hlídáte si termín i novou sazbu. V praxi jde o častý zdroj nepříjemných překvapení.
        </p>

        <h3>6) Sledujte minimální vklad a další omezení</h3>
        <p>
          Ověřte, od jaké částky lze vklad založit, zda jsou podmínky pro nové klienty, nebo jestli je nutné mít běžný
          účet u stejné banky. Předejdete tak situaci, kdy je nabídka „dobrá“, ale ve vaší realitě ji nelze využít.
        </p>

        <h3>7) Zvažte rozdělení peněz do více vkladů</h3>
        <p>
          Rozdělení částky (např. na 6 a 12 měsíců) zlepšuje likviditu. Část peněz se vám uvolní dříve a nemusíte rušit
          celý vklad před splatností. U větších částek je to často velmi praktický kompromis.
        </p>

        <h3>8) Přečtěte si smlouvu a sazebník</h3>
        <p>
          Před potvrzením vždy ověřte sazbu, splatnost, připisování úroku, autoobnovu i přesné podmínky předčasného
          ukončení. Rychlý kontrolní seznam najdete na stránce
          <Link href="/infocentrum/co-si-zkontrolovat-ve-smlouve-terminovany-vklad" className="text-[#2a5298] font-semibold hover:text-[#1e3a5f]">
            {" "}
            Co si zkontrolovat ve smlouvě termínovaného vkladu
          </Link>
          .
        </p>

        <h2 id="parametry">Podle čeho opravdu porovnávat termínované vklady</h2>
        <p>
          Nehledejte jednu „zázračnou“ metriku. Smysl dává porovnávat parametry společně, protože se vzájemně ovlivňují.
        </p>
      </article>

      <section className="not-prose mt-6 mb-10 overflow-x-auto border border-slate-200 rounded-2xl bg-white">
        <table className="min-w-full text-sm">
          <thead className="bg-slate-50 text-[#1e3a5f]">
            <tr>
              <th className="text-left p-3 font-bold">Parametr</th>
              <th className="text-left p-3 font-bold">Proč je důležitý</th>
              <th className="text-left p-3 font-bold">Na co si dát pozor</th>
            </tr>
          </thead>
          <tbody className="text-slate-700">
            <tr className="border-t border-slate-100">
              <td className="p-3 font-semibold">Úroková sazba</td>
              <td className="p-3">Určuje hrubý výnos.</td>
              <td className="p-3">Neporovnávejte ji izolovaně bez podmínek produktu.</td>
            </tr>
            <tr className="border-t border-slate-100">
              <td className="p-3 font-semibold">Délka fixace</td>
              <td className="p-3">Určí, jak dlouho budou peníze vázané.</td>
              <td className="p-3">Příliš dlouhá fixace může zhoršit vaši flexibilitu.</td>
            </tr>
            <tr className="border-t border-slate-100">
              <td className="p-3 font-semibold">Minimální vklad</td>
              <td className="p-3">Rozhoduje o dostupnosti produktu.</td>
              <td className="p-3">Některé sazby platí jen od vyšších částek.</td>
            </tr>
            <tr className="border-t border-slate-100">
              <td className="p-3 font-semibold">Frekvence připisování úroků</td>
              <td className="p-3">Ovlivní načasování výplaty výnosu.</td>
              <td className="p-3">Zjistěte, zda se úrok připisuje průběžně, nebo až na konci.</td>
            </tr>
            <tr className="border-t border-slate-100">
              <td className="p-3 font-semibold">Možnost předčasného výběru</td>
              <td className="p-3">Určuje, co se stane při změně plánu.</td>
              <td className="p-3">Banky mají velmi odlišná pravidla.</td>
            </tr>
            <tr className="border-t border-slate-100">
              <td className="p-3 font-semibold">Sankce/poplatky</td>
              <td className="p-3">Mohou výrazně snížit výsledek.</td>
              <td className="p-3">Čtěte sazebník i obchodní podmínky.</td>
            </tr>
            <tr className="border-t border-slate-100">
              <td className="p-3 font-semibold">Automatická obnova</td>
              <td className="p-3">Mění, co se stane po splatnosti.</td>
              <td className="p-3">Pohlídejte si lhůty pro změnu instrukce.</td>
            </tr>
            <tr className="border-t border-slate-100">
              <td className="p-3 font-semibold">Měna vkladu</td>
              <td className="p-3">Vliv na stabilitu i měnové riziko.</td>
              <td className="p-3">U cizí měny řešíte i kurzový vývoj.</td>
            </tr>
            <tr className="border-t border-slate-100">
              <td className="p-3 font-semibold">Způsob založení</td>
              <td className="p-3">Ovlivní pohodlí a rychlost sjednání.</td>
              <td className="p-3">Někdy je nutná pobočka nebo doplňkový účet.</td>
            </tr>
            <tr className="border-t border-slate-100">
              <td className="p-3 font-semibold">Pojištění vkladů</td>
              <td className="p-3">Klíčové pro bezpečnost peněz.</td>
              <td className="p-3">Sledujte limit 100 000 EUR na osobu a banku.</td>
            </tr>
          </tbody>
        </table>
      </section>

      <article className="prose prose-slate max-w-none prose-headings:text-[#1e3a5f]">
        <h2>Nejčastější chyba: výběr jen podle sazby</h2>
        <p>
          Nejvyšší sazba nemusí být nejlepší volba. Pokud potřebujete flexibilitu, může být vhodnější mírně nižší sazba
          s lepšími podmínkami předčasného ukončení. U termínovaného vkladu je potřeba dívat se na celý balíček,
          ne na jedno číslo.
        </p>
        <p>
          Prakticky: nabídka A má vyšší sazbu, ale při předčasném ukončení přijdete o všechen úrok. Nabídka B má o něco
          nižší sazbu, ale méně přísná pravidla. Pokud je šance, že budete peníze potřebovat dřív, může být nabídka B
          rozumnější.
        </p>
      </article>

      <section className="mt-8 mb-10 bg-amber-50 border border-amber-200 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-[#1e3a5f] mb-3">Na co si dát pozor</h2>
        <ul className="list-disc pl-5 space-y-2 text-sm text-slate-700">
          <li>Nejvyšší sazba sama o sobě neřeší dostupnost peněz.</li>
          <li>Předčasné ukončení může „smazat“ značnou část výnosu.</li>
          <li>Automatická obnova bez kontroly může prodloužit vázanost prostředků.</li>
          <li>Bez rezervy mimo vklad roste riziko, že budete muset rušit předčasně.</li>
        </ul>
      </section>

      <article className="prose prose-slate max-w-none prose-headings:text-[#1e3a5f]">
        <h2 id="vs-sporici">Termínovaný vklad vs spořicí účet</h2>
        <p>
          Oba produkty jsou konzervativní, ale používají se jinak. Spořicí účet je primárně o dostupnosti peněz,
          termínovaný vklad o dočasném „uzamčení“ peněz za předem daných podmínek.
        </p>
      </article>

      <section className="not-prose mt-6 mb-10 overflow-x-auto border border-slate-200 rounded-2xl bg-white">
        <table className="min-w-full text-sm">
          <thead className="bg-slate-50 text-[#1e3a5f]">
            <tr>
              <th className="text-left p-3 font-bold">Kritérium</th>
              <th className="text-left p-3 font-bold">Termínovaný vklad</th>
              <th className="text-left p-3 font-bold">Spořicí účet</th>
            </tr>
          </thead>
          <tbody className="text-slate-700">
            <tr className="border-t border-slate-100">
              <td className="p-3 font-semibold">Dostupnost peněz</td>
              <td className="p-3">Omezená do splatnosti.</td>
              <td className="p-3">Vysoká, obvykle kdykoliv.</td>
            </tr>
            <tr className="border-t border-slate-100">
              <td className="p-3 font-semibold">Stabilita podmínek</td>
              <td className="p-3">Sazba bývá fixovaná na období.</td>
              <td className="p-3">Sazba se může měnit častěji.</td>
            </tr>
            <tr className="border-t border-slate-100">
              <td className="p-3 font-semibold">Vhodné použití</td>
              <td className="p-3">Peníze, které dočasně nepotřebujete.</td>
              <td className="p-3">Rezerva a krátkodobé cíle.</td>
            </tr>
            <tr className="border-t border-slate-100">
              <td className="p-3 font-semibold">Předčasný výběr</td>
              <td className="p-3">Může znamenat sankci nebo ztrátu úroků.</td>
              <td className="p-3">Standardně bez sankce.</td>
            </tr>
          </tbody>
        </table>
      </section>

      <article className="prose prose-slate max-w-none prose-headings:text-[#1e3a5f]">
        <h3>Kdy je lepší spořicí účet</h3>
        <ul>
          <li>Když můžete peníze potřebovat kdykoliv.</li>
          <li>Když teprve budujete rezervu.</li>
          <li>Když nechcete hlídat splatnost a případnou autoobnovu.</li>
        </ul>

        <h3>Kdy dává smysl termínovaný vklad</h3>
        <ul>
          <li>Když máte rezervu bokem a víte, že část peněz dočasně nevyužijete.</li>
          <li>Když chcete konzervativní řešení a předvídatelný výsledek.</li>
          <li>Když chcete mít jasně daná pravidla po celou dobu fixace.</li>
        </ul>

        <h3>Kdy je rozumná kombinace obou</h3>
        <p>
          V praxi často funguje kombinace: likvidní rezerva na spořicím účtu a část volných prostředků na termínovaném
          vkladu. Tím získáte rovnováhu mezi dostupností peněz a vyšší disciplínou při spoření.
        </p>

        <h2 id="delka-vkladu">Jak zvolit správnou délku vkladu</h2>
        <h3>Krátká fixace (3–6 měsíců)</h3>
        <p>
          Vhodná, pokud chcete vyšší flexibilitu nebo čekáte, že se situace může rychle změnit. Je to častá volba pro
          opatrnější začátek.
        </p>

        <h3>Střední fixace (okolo 12 měsíců)</h3>
        <p>
          Praktická varianta pro střadatele s ročním plánem. Nabízí rozumný kompromis mezi výnosem a dostupností.
        </p>

        <h3>Delší fixace (24 měsíců a více)</h3>
        <p>
          Hodí se, pokud peníze opravdu dlouho nepotřebujete. Získáte stabilitu podmínek, ale menší možnost reagovat,
          když se změní vaše potřeby nebo tržní sazby.
        </p>

        <p>
          V období měnících se sazeb bývá často rozumné peníze rozdělit do více splatností. Detailní průvodce najdete v
          článku
          <Link href="/infocentrum/jaka-delka-terminovaneho-vkladu-je-nejlepsi" className="text-[#2a5298] font-semibold hover:text-[#1e3a5f]">
            {" "}
            Jaká délka termínovaného vkladu je nejlepší
          </Link>
          .
        </p>

        <h2 id="predcasne">Co se stane, když budu chtít peníze dřív</h2>
        <p>
          Předčasné ukončení je obvykle možné, ale podmínky se výrazně liší. V praxi můžete přijít o část úroku,
          o celý úrok, případně zaplatit i další poplatek. Právě proto je nutné mít tento bod vyjasněný ještě před
          založením vkladu.
        </p>
        <p>
          Podrobný přehled včetně praktického postupu najdete na stránce
          <Link href="/infocentrum/predcasne-zruseni-terminovaneho-vkladu" className="text-[#2a5298] font-semibold hover:text-[#1e3a5f]">
            {" "}
            Předčasné zrušení termínovaného vkladu
          </Link>
          .
        </p>

        <h2 id="bezpecnost">Je termínovaný vklad bezpečný?</h2>
        <p>
          U termínovaných vkladů v bankách platí pojištění vkladů. Zjednodušeně: prostředky jsou chráněné do limitu
          100 000 EUR na jednu osobu u jedné banky. Pro běžného střadatele to znamená vysokou úroveň bezpečnosti.
        </p>
        <p>
          Bezpečnost ale neznamená automaticky nejlepší reálný výnos. Ten ovlivňuje i inflace, délka fixace, daň a
          konkrétní podmínky produktu.
        </p>

        <h2>Hrubý vs čistý výnos</h2>
        <p>
          Hrubý výnos vychází ze sazby. Čistý výnos je to, co po zdanění opravdu dostanete. Pro porovnání nabídek je
          klíčové právě čisté číslo.
        </p>
        <p>
          <strong>Modelový příklad:</strong> Vklad 300 000 Kč na 12 měsíců se sazbou 4 % p.a. znamená hrubý úrok
          12 000 Kč. Po 15% dani je čistý úrok 10 200 Kč. Pokud by jiná nabídka měla nižší sazbu, ale výrazně lepší
          podmínky při předčasném ukončení, může být ve výsledku praktičtější.
        </p>

        <h2>Kdy se termínovaný vklad vyplatí</h2>
        <ul>
          <li>Máte rezervu bokem a nechcete investiční riziko.</li>
          <li>Víte, že peníze 6–12 měsíců nebudete potřebovat.</li>
          <li>Chcete zafixovat podmínky a mít předvídatelný výsledek.</li>
          <li>Nechcete aktivně investovat, ale chcete bezpečně uložit volné prostředky.</li>
        </ul>

        <h2>Kdy termínovaný vklad není nejlepší volba</h2>
        <ul>
          <li>Peníze můžete potřebovat kdykoliv.</li>
          <li>Nemáte vytvořenou pohotovostní rezervu.</li>
          <li>Řešíte dlouhý horizont a hledáte vyšší výnos za cenu kolísání.</li>
          <li>Nechcete hlídat splatnost, podmínky obnovy a smluvní pravidla.</li>
        </ul>

        <h2>Nejčastější chyby při výběru</h2>
        <ol>
          <li>Výběr jen podle sazby bez kontroly smluvních podmínek.</li>
          <li>Uzamčení celé rezervy do jedné fixace.</li>
          <li>Ignorování podmínek předčasného výběru.</li>
          <li>Nepohlídaná automatická obnova.</li>
          <li>Neřešení čistého výnosu po zdanění.</li>
          <li>Nepřečtení sazebníku a smlouvy.</li>
          <li>Špatně zvolená délka fixace vzhledem k reálným plánům.</li>
        </ol>
      </article>

      <section className="mt-10 bg-slate-50 border border-slate-200 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-[#1e3a5f] mb-3">Komu se to hodí / nehodí</h2>
        <div className="space-y-3 text-sm text-slate-700">
          <p>
            <strong>„Chci mít peníze kdykoliv po ruce.“</strong>
            <br />
            Spíš spořicí účet.
          </p>
          <p>
            <strong>„Vím, že 12 měsíců peníze nepotřebuji.“</strong>
            <br />
            Může dávat smysl termínovaný vklad.
          </p>
          <p>
            <strong>„Chci část rezervy volně a část zafixovat.“</strong>
            <br />
            V praxi často nejrozumnější kombinace obou produktů.
          </p>
        </div>
      </section>

      <section className="mt-10 bg-gradient-to-br from-[#1e3a5f] to-[#2a5298] rounded-2xl p-6 md:p-8 text-white shadow-sm">
        <h2 className="text-xl font-bold mb-2">Kalkulačka</h2>
        <p className="text-blue-100 mb-4">
          Spočítejte si varianty v kalkulačce a porovnejte hrubý i čistý výnos podle částky, sazby a délky vkladu.
        </p>
        <Link
          href="/#kalkulator"
          className="inline-flex items-center justify-center gap-2 bg-[#f59e0b] text-[#0f1f35] font-bold px-5 py-2.5 rounded-xl hover:bg-[#fbbf24] transition-colors"
        >
          Otevřít kalkulačku výnosů
        </Link>
      </section>

      <section id="faq" className="mt-10 bg-white border border-slate-200 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-[#1e3a5f] mb-4">FAQ</h2>
        <div className="space-y-3 text-sm text-slate-700">
          <details>
            <summary className="cursor-pointer font-semibold text-[#1e3a5f]">
              Je nejvyšší sazba vždy nejlepší volba?
            </summary>
            <p className="mt-2">Ne. Důležité jsou i podmínky předčasného ukončení, délka fixace, autoobnova a čistý výnos po zdanění.</p>
          </details>
          <details>
            <summary className="cursor-pointer font-semibold text-[#1e3a5f]">
              Vyplatí se rozdělit vklad na více částí?
            </summary>
            <p className="mt-2">Ve většině případů ano. Zlepšíte likviditu a snížíte riziko předčasného rušení celé částky.</p>
          </details>
          <details>
            <summary className="cursor-pointer font-semibold text-[#1e3a5f]">
              Co je lepší: termínovaný vklad nebo spořicí účet?
            </summary>
            <p className="mt-2">Záleží na cíli. Pro rezervu je vhodnější spořicí účet, pro dočasně volné peníze může být vhodný termínovaný vklad.</p>
          </details>
          <details>
            <summary className="cursor-pointer font-semibold text-[#1e3a5f]">
              Můžu peníze vybrat předčasně?
            </summary>
            <p className="mt-2">Obvykle ano, ale často za cenu ztráty části úroků, celého úroku nebo další sankce.</p>
          </details>
          <details>
            <summary className="cursor-pointer font-semibold text-[#1e3a5f]">
              Jsou termínované vklady pojištěné?
            </summary>
            <p className="mt-2">Ano, u bank platí pojištění vkladů. Obvyklý limit je 100 000 EUR na osobu a banku.</p>
          </details>
          <details>
            <summary className="cursor-pointer font-semibold text-[#1e3a5f]">
              Jak poznám, že je délka vkladu vhodná?
            </summary>
            <p className="mt-2">Vhodná délka odpovídá datu, kdy budete peníze potřebovat. Pokud si nejste jistí, pomáhá rozdělení do více splatností.</p>
          </details>
          <details>
            <summary className="cursor-pointer font-semibold text-[#1e3a5f]">
              Co znamená automatická obnova?
            </summary>
            <p className="mt-2">Po splatnosti se vklad automaticky prodlouží na nové období podle podmínek banky.</p>
          </details>
          <details>
            <summary className="cursor-pointer font-semibold text-[#1e3a5f]">
              Musím řešit daň z úroků?
            </summary>
            <p className="mt-2">Ano. Pro srovnání nabídek sledujte hlavně čistý výnos po zdanění.</p>
          </details>
          <details>
            <summary className="cursor-pointer font-semibold text-[#1e3a5f]">
              Kdy se termínovaný vklad nevyplatí?
            </summary>
            <p className="mt-2">Když nemáte rezervu, můžete peníze potřebovat kdykoliv, nebo řešíte dlouhý horizont s cílem vyššího výnosu.</p>
          </details>
        </div>
      </section>

      <section className="mt-10 bg-slate-50 border border-slate-200 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-[#1e3a5f] mb-3">Související témata</h2>
        <div className="flex flex-col gap-2 text-sm">
          <Link href="/infocentrum/predcasne-zruseni-terminovaneho-vkladu" className="text-[#2a5298] font-semibold hover:text-[#1e3a5f]">
            Předčasné zrušení termínovaného vkladu →
          </Link>
          <Link href="/infocentrum/pojisteni-terminovanych-vkladu" className="text-[#2a5298] font-semibold hover:text-[#1e3a5f]">
            Pojištění termínovaných vkladů →
          </Link>
          <Link href="/infocentrum/dan-z-uroku-terminovany-vklad" className="text-[#2a5298] font-semibold hover:text-[#1e3a5f]">
            Daň z úroků u termínovaného vkladu →
          </Link>
          <Link href="/infocentrum/jaka-delka-terminovaneho-vkladu-je-nejlepsi" className="text-[#2a5298] font-semibold hover:text-[#1e3a5f]">
            Jaká délka termínovaného vkladu je nejlepší →
          </Link>
          <Link href="/infocentrum/terminovany-vklad-vs-sporici-ucet" className="text-[#2a5298] font-semibold hover:text-[#1e3a5f]">
            Termínovaný vklad vs spořicí účet →
          </Link>
          <Link href="/infocentrum/co-si-zkontrolovat-ve-smlouve-terminovany-vklad" className="text-[#2a5298] font-semibold hover:text-[#1e3a5f]">
            Co si zkontrolovat ve smlouvě termínovaného vkladu →
          </Link>
          <Link href="/#kalkulator" className="text-[#2a5298] font-semibold hover:text-[#1e3a5f]">
            Kalkulačka výnosů →
          </Link>
          <Link href="/" className="text-[#2a5298] font-semibold hover:text-[#1e3a5f]">
            Hlavní přehled / srovnání termínovaných vkladů →
          </Link>
        </div>
      </section>
    </div>
  );
}
