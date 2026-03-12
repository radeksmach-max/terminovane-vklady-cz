import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0f1f35] text-slate-300 mt-20">
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="font-bold text-white text-lg mb-3">Terminované‑vklady.cz</div>
          <p className="text-sm leading-relaxed text-slate-400">
            Nezávislý informační portál o terminovaných vkladech. Pomáháme spořit výhodněji.
          </p>
        </div>

        <div>
          <div className="font-semibold text-white mb-3">Navigace</div>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-white transition-colors">Úvod</Link></li>
            <li><Link href="/#kalkulator" className="hover:text-white transition-colors">Kalkulačka výnosů</Link></li>
            <li><Link href="/infocentrum/jak-vybrat-terminovany-vklad" className="hover:text-white transition-colors">Jak vybrat termínovaný vklad</Link></li>
            <li><Link href="/caste-dotazy" className="hover:text-white transition-colors">Časté dotazy</Link></li>
            <li><Link href="/kontakty" className="hover:text-white transition-colors">Kontakty</Link></li>
            <li>
              <a
                href="/podminky-pouziti.php"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Podmínky použití
              </a>
            </li>
          </ul>
        </div>

        <div>
          <div className="font-semibold text-white mb-3">Upozornění</div>
          <p className="text-sm text-slate-400 leading-relaxed">
            Obsah tohoto webu má pouze informační charakter a nepředstavuje investiční poradenství.
            Před jakýmkoli finančním rozhodnutím se poraďte s odborníkem.
          </p>
        </div>
      </div>

      <div className="border-t border-slate-700 py-4">
        <div className="max-w-6xl mx-auto px-4 text-center text-xs text-slate-500">
          © {year} terminované-vklady.cz · Všechna práva vyhrazena
        </div>
      </div>
    </footer>
  );
}
