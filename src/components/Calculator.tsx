"use client";

import { useState, useMemo } from "react";

function formatCZK(amount: number) {
  return new Intl.NumberFormat("cs-CZ", { style: "currency", currency: "CZK", maximumFractionDigits: 0 }).format(amount);
}

export default function Calculator() {
  const [amount, setAmount] = useState(100000);
  const [rate, setRate] = useState(5.0);
  const [months, setMonths] = useState(12);
  const [compound, setCompound] = useState(false);

  const result = useMemo(() => {
    const years = months / 12;
    let gross: number;
    if (compound) {
      gross = amount * Math.pow(1 + rate / 100, years) - amount;
    } else {
      gross = amount * (rate / 100) * years;
    }
    const tax = gross * 0.15;
    const net = gross - tax;
    const total = amount + net;
    return { gross, tax, net, total };
  }, [amount, rate, months, compound]);

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-[#1e3a5f] mb-6">Kalkulačka výnosů terminovaného vkladu</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Vklad */}
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Vkladaná částka
          </label>
          <div className="relative">
            <input
              type="number"
              min={1000}
              step={1000}
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="w-full border border-slate-300 rounded-lg px-4 py-3 pr-12 text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-[#2a5298]"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">Kč</span>
          </div>
          <div className="flex gap-2 mt-2 flex-wrap">
            {[50000, 100000, 250000, 500000].map((v) => (
              <button
                key={v}
                onClick={() => setAmount(v)}
                className={`text-xs px-2 py-1 rounded border transition-colors ${amount === v ? "bg-[#1e3a5f] text-white border-[#1e3a5f]" : "border-slate-300 text-slate-600 hover:border-[#2a5298]"}`}
              >
                {(v / 1000).toFixed(0)} tis.
              </button>
            ))}
          </div>
        </div>

        {/* Úroková sazba */}
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Úroková sazba p.a.: <span className="text-[#2a5298]">{rate.toFixed(2)} %</span>
          </label>
          <input
            type="range"
            min={0.5}
            max={8}
            step={0.1}
            value={rate}
            onChange={(e) => setRate(Number(e.target.value))}
            className="w-full accent-[#2a5298] mb-2"
          />
          <div className="flex justify-between text-xs text-slate-400">
            <span>0,5 %</span>
            <span>8 %</span>
          </div>
          <input
            type="number"
            min={0.1}
            max={20}
            step={0.1}
            value={rate}
            onChange={(e) => setRate(Number(e.target.value))}
            className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2a5298] mt-2"
          />
        </div>

        {/* Délka vkladu */}
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">Délka vkladu</label>
          <div className="flex flex-wrap gap-2">
            {[
              { label: "3 měsíce", value: 3 },
              { label: "6 měsíců", value: 6 },
              { label: "12 měsíců", value: 12 },
              { label: "24 měsíců", value: 24 },
              { label: "36 měsíců", value: 36 },
            ].map(({ label, value }) => (
              <button
                key={value}
                onClick={() => setMonths(value)}
                className={`text-sm px-3 py-2 rounded-lg border transition-colors ${months === value ? "bg-[#1e3a5f] text-white border-[#1e3a5f]" : "border-slate-300 text-slate-600 hover:border-[#2a5298]"}`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Složené úročení */}
        <div className="flex items-start gap-3 pt-2">
          <input
            id="compound"
            type="checkbox"
            checked={compound}
            onChange={(e) => setCompound(e.target.checked)}
            className="w-5 h-5 mt-0.5 accent-[#2a5298] cursor-pointer"
          />
          <label htmlFor="compound" className="text-sm text-slate-700 cursor-pointer">
            <span className="font-semibold">Složené úročení</span>
            <span className="block text-slate-500 text-xs mt-0.5">
              Úroky se připisují k jistině a samy úročí (DRIPS efekt)
            </span>
          </label>
        </div>
      </div>

      {/* Výsledky */}
      <div className="bg-gradient-to-br from-[#1e3a5f] to-[#2a5298] rounded-xl p-6 text-white">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
          <div>
            <div className="text-xs text-blue-200 mb-1">Hrubý výnos</div>
            <div className="font-bold text-lg">{formatCZK(result.gross)}</div>
          </div>
          <div>
            <div className="text-xs text-blue-200 mb-1">Srážková daň (15 %)</div>
            <div className="font-bold text-lg text-red-300">−{formatCZK(result.tax)}</div>
          </div>
          <div>
            <div className="text-xs text-blue-200 mb-1">Čistý výnos</div>
            <div className="font-bold text-lg text-green-300">{formatCZK(result.net)}</div>
          </div>
          <div>
            <div className="text-xs text-blue-200 mb-1">Celková částka</div>
            <div className="font-bold text-xl">{formatCZK(result.total)}</div>
          </div>
        </div>
        <p className="text-xs text-blue-200 border-t border-blue-400/30 pt-3 mt-2">
          * Výpočet je orientační. Skutečné výnosy se mohou lišit. Úroky z terminovaných vkladů podléhají 15% srážkové dani.
        </p>
      </div>
    </div>
  );
}
