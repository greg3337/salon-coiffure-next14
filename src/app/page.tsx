import Link from "next/link";
import GallerySection from "./components/Gallery";

export default function Home() {
return (
<main className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
<Header />
<Hero />
<Services />
<Pricing />
<GallerySection />
<Testimonials />
<CTA />
<Footer />
</main>
);
}

function Header() {
return (
<header className="sticky top-0 z-10 bg-white/70 backdrop-blur border-b">
<div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-violet-600 text-white font-semibold">
BC
</span>
<span className="font-semibold">Belle&Chic Coiffure</span>
</div>
<nav className="hidden sm:flex items-center gap-6 text-sm">
<a href="#services" className="hover:text-violet-700">Services</a>
<a href="#tarifs" className="hover:text-violet-700">Tarifs</a>
<a href="#galerie" className="hover:text-violet-700">Galerie</a>
<a href="#avis" className="hover:text-violet-700">Avis</a>
<a href="#cta" className="px-3 py-1.5 rounded-md bg-violet-600 text-white hover:bg-violet-700">
Prendre rendez-vous
</a>
</nav>
</div>
</header>
);
}

function Hero() {
return (
<section className="mx-auto max-w-6xl px-4 pt-14 pb-12 sm:pt-20 sm:pb-16">
<div className="grid md:grid-cols-2 items-center gap-8">
<div>
<h1 className="text-3xl sm:text-5xl font-bold leading-tight">
Votre nouveau style, <span className="text-violet-600">entre de bonnes mains</span>.
</h1>
<p className="mt-4 text-slate-600">
Salon de coiffure moderne à Bordeaux. Coupes, couleurs, balayages et soins
profonds — avec des produits professionnels et une équipe aux petits soins.
</p>
<div className="mt-6 flex gap-3">
<a href="#cta" className="px-5 py-3 rounded-md bg-violet-600 text-white hover:bg-violet-700">
Réserver un créneau
</a>
<a href="#services" className="px-5 py-3 rounded-md border hover:bg-slate-50">
Voir les services
</a>
</div>
<ul className="mt-6 grid grid-cols-2 gap-3 text-sm text-slate-600">
<li>✅ Ouvert du mardi au samedi</li>
<li>✅ Produits pro (sans cruauté)</li>
<li>✅ Rendez-vous en ligne</li>
<li>✅ À 3 min du tram</li>
</ul>
</div>
<div className="rounded-xl border bg-white p-6 shadow-sm">
<div className="aspect-[4/3] rounded-lg bg-gradient-to-br from-violet-100 to-fuchsia-100 grid place-items-center text-violet-700 text-lg">
Galerie à venir
</div>
<p className="mt-3 text-center text-sm text-slate-500">
(Images fictives — maquettes pour démonstration)
</p>
</div>
</div>
</section>
);
}

function Services() {
const items = [
{ title: "Coupe & Coiffage", desc: "Diagnostic, coupe personnalisée, brushing." },
{ title: "Coloration / Balayage", desc: "Techniques sur-mesure, nuances naturelles." },
{ title: "Soin Profond", desc: "Réparation & brillance, protocole professionnel." },
{ title: "Barbe & Taille", desc: "Contours, taille, finition soignée." },
];
return (
<section id="services" className="border-t bg-white">
<div className="mx-auto max-w-6xl px-4 py-12">
<h2 className="text-2xl sm:text-3xl font-semibold">Nos services</h2>
<p className="mt-2 text-slate-600">
Une carte courte et efficace pour des résultats durables.
</p>
<div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
{items.map((s) => (
<div key={s.title} className="rounded-lg border p-5 hover:shadow-sm">
<h3 className="font-medium">{s.title}</h3>
<p className="mt-2 text-sm text-slate-600">{s.desc}</p>
</div>
))}
</div>
</div>
</section>
);
}

function Pricing() {
const rows = [
{ name: "Coupe + Coiffage", price: "29€" },
{ name: "Couleur racines", price: "39€" },
{ name: "Balayage", price: "69€" },
{ name: "Soin profond", price: "19€" },
{ name: "Barbe (taille/entretien)", price: "15€" },
];
return (
<section id="tarifs" className="border-t">
<div className="mx-auto max-w-6xl px-4 py-12">
<h2 className="text-2xl sm:text-3xl font-semibold">Tarifs clairs</h2>
<p className="mt-2 text-slate-600">Pas de surprise — juste du beau travail.</p>
<div className="mt-6 overflow-hidden rounded-lg border">
<table className="w-full text-sm">
<tbody>
{rows.map((r, i) => (
<tr key={r.name} className={i % 2 ? "bg-slate-50" : "bg-white"}>
<td className="px-4 py-3">{r.name}</td>
<td className="px-4 py-3 text-right font-medium">{r.price}</td>
</tr>
))}
</tbody>
</table>
</div>
<p className="mt-3 text-xs text-slate-500">
*Tarifs indicatifs pour maquette (ajustez selon le vrai salon).
</p>
</div>
</section>
);
}

function Gallery() {
return (
<section id="galerie" className="border-t bg-white">
<div className="mx-auto max-w-6xl px-4 py-12">
<h2 className="text-2xl sm:text-3xl font-semibold">Galerie</h2>
<p className="mt-2 text-slate-600">Avant / après, couleurs, coiffages…</p>
<div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
{Array.from({ length: 6 }).map((_, i) => (
<div
key={i}
className="aspect-square rounded-md bg-gradient-to-br from-violet-100 to-fuchsia-100"
/>
))}
</div>
</div>
</section>
);
}

function Testimonials() {
const items = [
{ name: "Camille", text: "Accueil top et coupe parfaite, je reviens !" },
{ name: "Léo", text: "Balayage super naturel. Conseils pros, nickel." },
{ name: "Maya", text: "Rdv à l’heure, salon propre, équipe adorable." },
];
return (
<section id="avis" className="border-t">
<div className="mx-auto max-w-6xl px-4 py-12">
<h2 className="text-2xl sm:text-3xl font-semibold">Ils nous recommandent</h2>
<div className="mt-6 grid sm:grid-cols-3 gap-4">
{items.map((t) => (
<blockquote key={t.name} className="rounded-lg border p-5 bg-white">
<p className="text-slate-700">“{t.text}”</p>
<footer className="mt-3 text-sm text-slate-500">— {t.name}</footer>
</blockquote>
))}
</div>
</div>
</section>
);
}

function CTA() {
return (
<section id="cta" className="border-t bg-gradient-to-br from-violet-50 to-fuchsia-50">
<div className="mx-auto max-w-6xl px-4 py-12 text-center">
<h2 className="text-2xl sm:text-3xl font-semibold">
Prêt(e) à changer de tête ?
</h2>
<p className="mt-2 text-slate-600">
Réservez en ligne en 2 minutes. Annulation gratuite jusqu’à 24h.
</p>
<div className="mt-6 flex justify-center gap-3">
<Link
href="#"
className="px-5 py-3 rounded-md bg-violet-600 text-white hover:bg-violet-700"
>
Réserver maintenant
</Link>
<Link href="#services" className="px-5 py-3 rounded-md border bg-white">
Voir la carte
</Link>
</div>
</div>
</section>
);
}

function Footer() {
return (
<footer className="border-t">
<div className="mx-auto max-w-6xl px-4 py-8 text-sm text-slate-600 flex flex-col sm:flex-row gap-2 justify-between">
<p>© {new Date().getFullYear()} Belle&Chic Coiffure — Maquette.</p>
<p>Bordeaux • Mar–Sam 9h–19h • 05 56 00 00 00</p>
</div>
</footer>
);
}
