import Link from "next/link";
import Calculator from "@/components/Calculator";

const features = [
  {
    icon: "🔒",
    title: "Pojištění vkladů ze zákona",
    desc: "Každý terminovaný vklad v licencované bance je ze zákona pojištěn Fondem pojištění vkladů. Limit je 100 000 EUR na osobu a banku — v přepočtu přibližně 2,5 mil. Kč.",
  },
  {
    icon: "📋",
    title: "Výnos znáte předem",
    desc: "Před podpisem smlouvy přesně víte, kolik dostanete zpět. Žádná překvapení, žádné výkyvy trhu. Banka je smluvně zavázána vyplatit dohodnutý úrok.",
  },
  {
    icon: "⏱️",
    title: "Pevná doba uložení",
    desc: "Délka fixace bývá od 1 měsíce do 5 let. Kratší vklady jsou flexibilnější, delší obvykle nabízejí vyšší sazbu — vyberte podle toho, kdy peníze budete potřebovat.",
  },
  {
    icon: "🏦",
    title: "Pod dohledem ČNB",
    desc: "Banky v ČR podléhají přísné regulaci České národní banky. Terminovaný vklad je jedno z nejbezpečnějších uložení peněz vůbec.",
  },
];

const howItWorksSteps = [
  {
    num: "01",
    title: "Vyberte banku a délku vkladu",
    desc: "Porovnejte nabídky — klíčová je výše sazby, délka fixace a podmínky předčasného výběru. Každá smlouva se liší.",
  },
  {
    num: "02",
    title: "Podepište smlouvu a vložte peníze",
    desc: "Vklad lze zřídit online nebo na pobočce. Minimální částky začínají obvykle od 1 000 Kč, u některých bank od 5 000 nebo 10 000 Kč.",
  },
  {
    num: "03",
    title: "Nechte peníze pracovat",
    desc: "Po celou dobu fixace jsou vaše peníze úročeny pevnou sazbou. Nevybírejte předčasně — hrozí ztráta části nebo všech úroků.",
  },
  {
    num: "04",
    title: "Na konci dostanete vše zpět",
    desc: "Po uplynutí doby banka automaticky připíše jistinu i čistý výnos (po odečtení 15% srážkové daně). Peníze jsou opět volné.",
  },
];

const forWhom = [
  {
    icon: "💼",
    title: "Máte peníze, které teď nepotřebujete",
    desc: "Naspořili jste větší částku a víte, že ji příštích 6–24 měsíců nebudete potřebovat. Terminovaný vklad je ideální způsob, jak je mezitím zhodnotit.",
  },
  {
    icon: "🛡️",
    title: "Nechcete riskovat",
    desc: "Investování do akcií nebo fondů vás stresuje nebo vám nesedí. Chcete jistý, předvídatelný výnos bez starostí o výkyvy na trzích.",
  },
  {
    icon: "🏠",
    title: "Šetříte na konkrétní cíl",
    desc: "Plánujete koupi auta, rekonstrukci, nebo odkládáte peníze na zálohu pro děti. Terminovaný vklad vám pomůže peníze uzamknout a nenechat se svést k útratě.",
  },
  {
    icon: "⚖️",
    title: "Chcete vyvážit rizikové investice",
    desc: "Část portfolia máte v akciích nebo nemovitostech. Terminovaný vklad slouží jako stabilní, bezriziková složka, která jistí celkové portfolio.",
  },
];

const faqs = [
  {
    q: "Co se stane, když banka zkrachuje?",
    a: "Váš vklad je pojištěn Fondem pojištění vkladů do výše 100 000 EUR (cca 2,5 mil. Kč). Toto pojištění je povinné ze zákona a platí pro všechny banky s licencí ČNB. Státní záruka je de facto srovnatelná se státními dluhopisy.",
  },
  {
    q: "Mohu peníze vybrat předčasně?",
    a: "Záleží na podmínkách konkrétní banky a smlouvy. Některé banky předčasný výběr umožňují s poplatkem nebo ztrátou úroků, jiné ho zcela zakazují. Vždy si pečlivě přečtěte obchodní podmínky před podpisem.",
  },
  {
    q: "Musím platit daň z výnosů?",
    a: "Ano, ale nemusíte nic dělat — banka za vás odvede 15% srážkovou daň přímo u zdroje. Dostanete čistý výnos, o nic se nestarat. Výnos nemusíte uvádět v daňovém přiznání.",
  },
  {
    q: "Co je automatická obnova a jak na ni?",
    a: "Většina bank po uplynutí fixace automaticky obnoví vklad za tehdy platných podmínek. Pokud sazby mezitím klesly, prodělali jste. Hlídejte si termín ukončení vkladu a rozhodněte se vědomě, zda obnovit, nebo peníze přesunout.",
  },
  {
    q: "Jaký je rozdíl oproti spořicímu účtu?",
    a: "Spořicí účet je flexibilní — peníze máte kdykoli k dispozici, ale banka může sazbu kdykoli snížit. Terminovaný vklad zamkne peníze na pevnou dobu, ale výměnou za to garantuje neměnnou sazbu po celou dobu fixace.",
  },
  {
    q: "Můžu mít víc terminovaných vkladů najednou?",
    a: "Ano. Můžete mít více vkladů u jedné banky i u různých bank. Oblíbenou strategií je tzv. laddering — rozložení vkladů do různých délek fixace, abyste vždy měli přístup k části prostředků.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#0f1f35] via-[#1e3a5f] to-[#2a5298] text-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none select-none">
          <div className="absolute top-10 right-10 text-[22rem] leading-none font-black text-white/5">%</div>
        </div>
        <div className="max-w-6xl mx-auto px-4 py-20 md:py-28 relative">
          <div className="max-w-2xl">
            <span className="inline-block bg-[#f59e0b]/20 text-[#fbbf24] text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-5 border border-[#f59e0b]/30">
              Nezávislý informační portál
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-5">
              Terminované vklady —<br />
              <span className="text-[#fbbf24]">vše na jednom místě</span>
            </h1>
            <p className="text-lg text-blue-100 mb-4 leading-relaxed">
              Jak terminované vklady fungují, co si pohlídat ve smlouvě
              a jak si spočítat reálný čistý výnos po zdanění.
            </p>
            <p className="text-sm text-blue-200 mb-8">
              Vše co potřebujete vědět o termínovaných vkladech. Jen fakta.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#kalkulator"
                className="inline-flex items-center justify-center gap-2 bg-[#f59e0b] text-[#0f1f35] font-bold px-6 py-3 rounded-xl hover:bg-[#fbbf24] transition-colors text-sm"
              >
                Spočítat čistý výnos →
              </a>
              <a
                href="#jak-funguje"
                className="inline-flex items-center justify-center gap-2 border border-white/25 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/10 transition-colors text-sm"
              >
                Jak to funguje
              </a>
            </div>
          </div>

          {/* Trvalé fakty — nepotřebují aktualizaci */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-12 max-w-2xl">
            {[
              { value: "100 000 EUR", label: "pojištění vkladu ze zákona" },
              { value: "15 %", label: "srážková daň z výnosů" },
              { value: "1 měs.–5 let", label: "typická délka fixace" },
              { value: "od 1 000 Kč", label: "minimální vklad (obvykle)" },
            ].map(({ value, label }) => (
              <div key={label} className="text-center border border-white/15 bg-white/5 rounded-xl p-3">
                <div className="text-base font-bold text-[#fbbf24] leading-tight">{value}</div>
                <div className="text-xs text-blue-300 mt-1 leading-tight">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Co to je — krátké intro */}
      <section className="bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 py-12 text-center">
          <h2 className="text-xl font-bold text-[#1e3a5f] mb-3">Co je terminovaný vklad?</h2>
          <p className="text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Terminovaný vklad je bankovní produkt, při kterém uložíte peníze na předem stanovenou dobu
            za předem dohodnutou úrokovou sazbu. Po celou dobu fixace jsou peníze nedostupné — výměnou
            za to banka garantuje výnos, který se nemůže změnit. Na konci dostanete jistinu i úroky zpět.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-[#1e3a5f] text-center mb-3">
          Klíčové vlastnosti terminovaného vkladu
        </h2>
        <p className="text-center text-slate-500 text-sm mb-10">Platí bez ohledu na to, u které banky vklad zřídíte</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon, title, desc }) => (
            <div
              key={title}
              className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-3xl mb-3">{icon}</div>
              <h3 className="font-bold text-[#1e3a5f] mb-2 text-sm leading-snug">{title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Calculator */}
      <section id="kalkulator" className="bg-slate-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-[#1e3a5f] mb-2">Kalkulačka čistého výnosu</h2>
            <p className="text-slate-600 max-w-xl mx-auto">
              Zadejte parametry vkladu a okamžitě uvidíte hrubý výnos, srážkovou daň i to,
              co skutečně dostanete na ruku.
            </p>
          </div>
          <Calculator />
        </div>
      </section>

      {/* How it works */}
      <section id="jak-funguje" className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-[#1e3a5f] mb-2">Jak to celé funguje?</h2>
          <p className="text-slate-600 max-w-xl mx-auto">
            Terminovaný vklad má jednoduchý životní cyklus — od sjednání po výplatu.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {howItWorksSteps.map(({ num, title, desc }) => (
            <div key={num} className="relative">
              <div className="text-6xl font-black text-slate-100 absolute -top-3 -left-2 select-none">{num}</div>
              <div className="relative bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
                <h3 className="font-bold text-[#1e3a5f] mb-2 text-sm">{title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 bg-amber-50 border border-amber-200 rounded-2xl p-5 max-w-2xl mx-auto text-center">
          <p className="text-sm text-amber-800">
            <strong>Důležité:</strong> Před podpisem si vždy přečtěte podmínky předčasného výběru.
            U některých bank je výběr zcela zakázán, u jiných přijdete o část nebo všechny úroky.
          </p>
        </div>
      </section>

      {/* Pro koho se hodí */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-[#1e3a5f] mb-2">Pro koho se terminovaný vklad hodí?</h2>
            <p className="text-slate-600 max-w-xl mx-auto">
              Terminovaný vklad není pro každého — ale pokud se poznáte v některé z těchto situací, dává smysl.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {forWhom.map(({ icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm flex gap-4">
                <div className="text-2xl shrink-0">{icon}</div>
                <div>
                  <h3 className="font-bold text-[#1e3a5f] mb-1 text-sm">{title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pros/Cons */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-[#1e3a5f] text-center mb-10">Výhody a nevýhody — bez příkras</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
            <h3 className="font-bold text-green-800 mb-4 flex items-center gap-2 text-sm">
              <span className="w-5 h-5 rounded-full bg-green-500 text-white flex items-center justify-center text-xs">✓</span>
              Co funguje dobře
            </h3>
            <ul className="space-y-3">
              {[
                ["Výnos znáte předem", "Přesná částka je ve smlouvě — banka ji nemůže jednostranně změnit."],
                ["Pojištění ze zákona", "Do 100 000 EUR nenesete žádné kreditní riziko."],
                ["Nulová správa", "Zřídíte jednou, nepotřebujete sledovat kurzy ani trhy."],
                ["Žádné riziko ztráty", "Na rozdíl od fondů nebo akcií nemůžete přijít o vložené peníze."],
                ["Srážková daň je automatická", "Banka vše odvede za vás, vy neřešíte daňové přiznání."],
              ].map(([title, note]) => (
                <li key={title} className="text-sm text-slate-700">
                  <span className="font-semibold text-green-800">{title}</span>
                  <span className="text-slate-500"> — {note}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
            <h3 className="font-bold text-red-800 mb-4 flex items-center gap-2 text-sm">
              <span className="w-5 h-5 rounded-full bg-red-400 text-white flex items-center justify-center text-xs">✗</span>
              Na co si dát pozor
            </h3>
            <ul className="space-y-3">
              {[
                ["Peníze jsou uzamčené", "Po dobu fixace se k nim (zpravidla) nedostanete bez sankce."],
                ["Inflace může výnos smazat", "Pokud je inflace vyšší než sazba, reálně vyděláváte méně."],
                ["Automatická obnova", "Pokud si nedáte pozor, banka obnoví vklad za horších podmínek."],
                ["Nižší výnos než akcie", "V dlouhém horizontu akcie vynášejí historicky více — za cenu rizika."],
                ["Sazba je fixní i dolů", "Pokud sazby na trhu vzrostou, vy stále máte původní, nižší úrok."],
              ].map(([title, note]) => (
                <li key={title} className="text-sm text-slate-700">
                  <span className="font-semibold text-red-700">{title}</span>
                  <span className="text-slate-500"> — {note}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-[#1e3a5f] mb-2">Nejčastější otázky</h2>
            <p className="text-slate-500 text-sm">Odpovědi, které se nemění — platí bez ohledu na aktuální sazby</p>
          </div>
          <div className="space-y-4">
            {faqs.map(({ q, a }) => (
              <div key={q} className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
                <h3 className="font-bold text-[#1e3a5f] mb-2 text-sm">{q}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Blog */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="bg-gradient-to-br from-[#1e3a5f] to-[#2a5298] rounded-2xl p-8 md:p-10 text-white text-center shadow-sm">
          <h2 className="text-2xl font-bold mb-3">Chcete jít do hloubky?</h2>
          <p className="text-blue-100 mb-6 max-w-xl mx-auto text-sm leading-relaxed">
            V blogu rozebíráme konkrétní témata podrobněji — jak funguje zdanění, co je laddering,
            jak porovnat nabídky bank a co si ohlídat ve smlouvě.
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 bg-[#f59e0b] text-[#0f1f35] font-bold px-6 py-3 rounded-xl hover:bg-[#fbbf24] transition-colors text-sm"
          >
            Číst blog →
          </Link>
        </div>
      </section>
    </>
  );
}
