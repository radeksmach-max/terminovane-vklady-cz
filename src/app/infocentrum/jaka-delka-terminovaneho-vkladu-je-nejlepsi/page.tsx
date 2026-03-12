import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Jaká délka termínovaného vkladu je nejlepší",
  description:
    "Srovnání délky termínovaného vkladu 3, 6, 12 a 24 měsíců. Jak zvolit fixaci podle cíle, likvidity a očekávaného vývoje sazeb.",
};

export default function JakaDelkaTerminovanehoVkladuJeNejlepsiPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <Breadcrumbs items={[{ label: "Domů", href: "/" }, { label: "Infocentrum", href: "/infocentrum" }, { label: "Jaká délka termínovaného vkladu je nejlepší" }]} />

      <article className="prose prose-slate max-w-none prose-headings:text-[#1e3a5f]">
        <h1 className="!text-3xl md:!text-4xl !font-extrabold !text-[#1e3a5f] !mb-6">Jaká délka termínovaného vkladu je nejlepší</h1>
        <p>
          Univerzálně nejlepší délka neexistuje. Vhodná fixace záleží na tom, kdy budete peníze potřebovat, jak moc
          chcete flexibilitu a jak čekáte, že se budou vyvíjet sazby.
        </p>

        <h2>Rychlé srovnání fixací</h2>
        <ul>
          <li><strong>3 měsíce:</strong> vysoká flexibilita, často nižší sazba.</li>
          <li><strong>6 měsíců:</strong> rozumný kompromis výnos/flexibilita.</li>
          <li><strong>12 měsíců:</strong> častá volba pro stabilní roční plán.</li>
          <li><strong>24 měsíců+:</strong> delší jistota, ale menší manévrovací prostor.</li>
        </ul>

        <h2>Jak se rozhodnout</h2>
        <ol>
          <li>Nejdřív si určete datum, kdy peníze nejpozději potřebujete.</li>
          <li>Ověřte, že máte oddělenou pohotovostní rezervu.</li>
          <li>Zvažte rozdělení částky do více fixací (tzv. žebříček vkladů).</li>
        </ol>

        <h2>Shrnutí</h2>
        <p>
          Většině domácností dává smysl kombinace 6 a 12 měsíců. U větších částek je praktické rozdělení do více vkladů,
          které zlepší dostupnost peněz bez nutnosti předčasného rušení.
        </p>
      </article>

      <section className="mt-10 bg-white border border-slate-200 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-[#1e3a5f] mb-4">FAQ</h2>
        <div className="space-y-3 text-sm text-slate-700">
          <details>
            <summary className="cursor-pointer font-semibold text-[#1e3a5f]">Je lepší 6 nebo 12 měsíců?</summary>
            <p className="mt-2">Záleží na vašem cíli a potřebě likvidity. Pro řadu lidí funguje kombinace obou fixací.</p>
          </details>
          <details>
            <summary className="cursor-pointer font-semibold text-[#1e3a5f]">Má smysl rozdělit částku do více splatností?</summary>
            <p className="mt-2">Ano, obvykle tím zlepšíte flexibilitu a snížíte riziko předčasného rušení celé částky.</p>
          </details>
        </div>
      </section>

      <section className="mt-10 bg-slate-50 border border-slate-200 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-[#1e3a5f] mb-3">Související témata</h2>
        <div className="flex flex-col gap-2 text-sm">
          <Link href="/infocentrum/predcasne-zruseni-terminovaneho-vkladu" className="text-[#2a5298] font-semibold hover:text-[#1e3a5f]">Předčasné zrušení termínovaného vkladu →</Link>
          <Link href="/infocentrum/uroceni-terminovanych-vkladu" className="text-[#2a5298] font-semibold hover:text-[#1e3a5f]">Úročení termínovaných vkladů →</Link>
          <Link href="/blog/jak-vybrat-delku-terminovaneho-vkladu" className="text-[#2a5298] font-semibold hover:text-[#1e3a5f]">Blog: jak vybrat délku vkladu →</Link>
        </div>
      </section>
    </div>
  );
}
