import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Kontakty",
  description: "Kontaktní a identifikační údaje provozovatele webu terminované-vklady.cz.",
};

export default function KontaktyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <Breadcrumbs
        items={[
          { label: "Domů", href: "/" },
          { label: "Kontakty" },
        ]}
      />

      <article className="prose prose-slate max-w-none prose-headings:text-[#1e3a5f]">
        <h1 className="!text-3xl md:!text-4xl !font-extrabold !text-[#1e3a5f] !mb-6">Kontakty</h1>

        <p>
          <strong>Provozovatel www stránek:</strong>
        </p>

        <p>
          SIALINI, spol. s r.o.
          <br />
          Komenského 3143/32
          <br />
          747 21 Kravaře
        </p>

        <p>
          IČO: 27807959
          <br />
          DIČ: CZ27807959
        </p>

        <p>
          Spisová značka: C 30257
          <br />
          vedená u rejstříkového soudu v Ostravě
        </p>
      </article>
    </div>
  );
}
