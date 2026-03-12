"use client";

import { useEffect, useState } from "react";

const CONSENT_KEY = "tv_cookie_analytics_consent";

function injectToplist() {
  if (document.getElementById("toplist-tracker")) return;

  const ref = encodeURIComponent(document.referrer || "");
  const wi = encodeURIComponent(String(window.screen.width || ""));
  const he = encodeURIComponent(String(window.screen.height || ""));
  const cd = encodeURIComponent(String(window.screen.colorDepth || ""));
  const t = encodeURIComponent(document.title || "");

  const link = document.createElement("a");
  link.id = "toplist-tracker";
  link.href = "https://www.toplist.cz/stat/819931";
  link.style.position = "absolute";
  link.style.left = "-9999px";

  const img = document.createElement("img");
  img.src = `https://toplist.cz/dot.asp?id=872859&http=${ref}&wi=${wi}&he=${he}&cd=${cd}&t=${t}`;
  img.width = 1;
  img.height = 1;
  img.alt = "TOPlist";
  img.style.border = "0";

  link.appendChild(img);
  document.body.appendChild(link);
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(CONSENT_KEY);

    if (saved === "accepted") {
      injectToplist();
      return;
    }

    if (saved === "rejected") {
      return;
    }

    setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem(CONSENT_KEY, "accepted");
    injectToplist();
    setVisible(false);
  };

  const reject = () => {
    localStorage.setItem(CONSENT_KEY, "rejected");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:max-w-xl z-[60] bg-white border border-slate-200 shadow-xl rounded-2xl p-4">
      <p className="text-sm text-slate-700 leading-relaxed">
        Tento web používá anonymní měření návštěvnosti (TOPlist) pro zlepšování obsahu. Souhlasíte s použitím
        analytické cookies?
      </p>
      <div className="mt-3 flex gap-2 justify-end">
        <button
          onClick={reject}
          className="px-4 py-2 rounded-lg border border-slate-300 text-slate-700 text-sm hover:bg-slate-50"
        >
          Odmítnout
        </button>
        <button
          onClick={accept}
          className="px-4 py-2 rounded-lg bg-[#1e3a5f] text-white text-sm hover:bg-[#2a5298]"
        >
          Souhlasím
        </button>
      </div>
    </div>
  );
}
