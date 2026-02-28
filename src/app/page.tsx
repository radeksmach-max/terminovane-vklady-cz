import Link from "next/link";
import Calculator from "@/components/Calculator";

const features = [
  {
    icon: "🔒",
    title: "Pojištění vkladů",
    desc: "Terminované vklady jsou pojištěny Fondem pojištění vkladů do výše 100 000 EUR na osobu a banku.",
  },
  {
    icon: "📈",
    title: "Garantovaný výnos",
    desc: "Na rozdíl od akcií nebo fondů je úrokový výnos terminovaného vkladu pevně stanoven předem.",
  },
  {
    icon: "⏱️",
    title: "Flexibilní délka",
    desc: "Vybírejte z vkladů na 1 měsíc až 5 let. Kratší vklady obvykle nabízejí nižší, ale rychlejší výnos.",
  },
  {
    icon: "🏦",
    title: "Bezpečné v bance",
    desc: "Peníze jsou uloženy u licencované banky pod dohledem ČNB. Žádné riziko ztráty vlivem trhu.",
  },
];

const howItWorksSteps = [
  {
    num: "01",
    title: "Zvolte banku a podmínky",
    desc: "Porovnejte úrokové sazby různých bank a vyberte dobu vkladu, která vám vyhovuje.",
  },
  {
    num: "02",
    title: "Složte vklad",
    desc: "Převedete dohodnutou částku na termínovaný účet. Minimální vklady bývají od 1 000 Kč.",
  },
  {
    num: "03",
    title: "Čekejte na výnos",
    desc: "Po celou dobu vkladu jsou vaše peníze úročeny pevnou sazbou. Nevybírejte předčasně!",
  },
  {
    num: "04",
    title: "Vyberte i s úroky",
    desc: "Po uplynutí doby obdržíte zpět vklad + čistý výnos po zdanění 15% srážkovou daní.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#0f1f35] via-[#1e3a5f] to-[#2a5298] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none select-none">
          <div className="absolute top-10 right-10 text-[20rem] leading-none font-bold text-white/20">%</div>
        </div>
        <div className="max-w-6xl mx-auto px-4 py-20 md:py-28 relative">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              Terminované vklady —<br />
              <span className="text-[#fbbf24]">spořte chytřeji</span>
            </h1>
            <p className="text-lg text-blue-100 mb-8 leading-relaxed">
              Porovnejte úrokové sazby, spočítejte si výnosy a zjistěte vše, co potřebujete vědět
              o terminovaných vkladech. Srozumitelně, bez zbytečných složitostí.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#kalkulator"
                className="inline-flex items-center justify-center gap-2 bg-[#f59e0b] text-[#0f1f35] font-bold px-6 py-3 rounded-xl hover:bg-[#fbbf24] transition-colors text-sm"
              >
                Spočítat výnosy →
              </a>
              <a
                href="#jak-funguje"
                className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/10 transition-colors text-sm"
              >
                Jak to funguje
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-[#1e3a5f] text-center mb-10">
          Proč terminovaný vklad?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon, title, desc }) => (
            <div
              key={title}
              className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-3xl mb-3">{icon}</div>
              <h3 className="font-bold text-[#1e3a5f] mb-2">{title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Calculator */}
      <section id="kalkulator" className="bg-slate-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-[#1e3a5f] mb-2">Kalkulačka výnosů</h2>
            <p className="text-slate-600">
              Spočítejte si, kolik vyděláte na terminovaném vkladu — včetně srážkové daně.
            </p>
          </div>
          <Calculator />
        </div>
      </section>

      {/* How it works */}
      <section id="jak-funguje" className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-[#1e3a5f] mb-2">Jak funguje terminovaný vklad?</h2>
          <p className="text-slate-600 max-w-xl mx-auto">
            Terminovaný vklad je jednoduchý finanční nástroj. Uložíte peníze na pevnou dobu a banka vám garantuje výnos.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {howItWorksSteps.map(({ num, title, desc }) => (
            <div key={num} className="relative">
              <div className="text-6xl font-black text-slate-100 absolute -top-3 -left-2 select-none">{num}</div>
              <div className="relative bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
                <h3 className="font-bold text-[#1e3a5f] mb-2">{title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pros/Cons */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#1e3a5f] text-center mb-10">Výhody a nevýhody</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-green-100 rounded-2xl p-6 shadow-sm">
              <h3 className="font-bold text-green-700 mb-4 flex items-center gap-2">
                <span className="text-green-500">✓</span> Výhody
              </h3>
              <ul className="space-y-3 text-sm text-slate-700">
                {[
                  "Garantovaný, předem známý výnos",
                  "Pojištění vkladů do 100 000 EUR",
                  "Nulové riziko ztráty vlivem trhu",
                  "Žádná správa, jednoduché nastavení",
                  "Vhodné pro konzervativní spořitele",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">•</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white border border-red-100 rounded-2xl p-6 shadow-sm">
              <h3 className="font-bold text-red-700 mb-4 flex items-center gap-2">
                <span className="text-red-500">✗</span> Nevýhody
              </h3>
              <ul className="space-y-3 text-sm text-slate-700">
                {[
                  "Peníze nepřístupné po dobu vkladu",
                  "Výnos nemusí překonat inflaci",
                  "Předčasný výběr = sankce nebo ztráta úroků",
                  "Nižší výnos oproti akciím (v dlouhém horizontu)",
                  "Srážková daň 15 % z výnosů",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-red-400 mt-0.5">•</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Blog */}
      <section className="max-w-6xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-[#1e3a5f] mb-3">Chcete vědět více?</h2>
        <p className="text-slate-600 mb-6 max-w-lg mx-auto">
          V našem blogu najdete podrobné průvodce, srovnání bank a tipy jak z terminovaných vkladů vytěžit maximum.
        </p>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 bg-[#1e3a5f] text-white font-semibold px-6 py-3 rounded-xl hover:bg-[#2a5298] transition-colors"
        >
          Číst blog →
        </Link>
      </section>
    </>
  );
}
