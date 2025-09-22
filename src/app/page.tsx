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
<span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-violet-600 text-white">
BC
</span>
<span className="font-semibold">Belle&Chic Coiffure</span>
</div>
<nav className="hidden sm:flex items-center gap-6 text-sm">
<a href="#services" className="hover:text-violet-700">Services</a>
<a href="#tarifs" className="hover:text-violet-700">Tarifs</a>
<a href="#galerie" className="hover:text-violet-700">Galerie</a>
<a href="#avis" className="hover:text-violet-700">Avis</a>
<a
href="#cta"
className="px-3 py-1.5 rounded-md bg-violet-600 text-white hover:bg-violet-700"
>
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
Votre nouveau style,{" "}
<span className="text-violet-600">entre de bonnes mains.</span>
</h1>
<p className="mt-4 text-slate-600">
Salon de coiffure moderne à Bordeaux. Coupes, couleurs, balayages et
soins profonds — avec des produits professionnels et une équipe aux petits soins.
</p>
<div className="mt-6 flex gap-4">
<a
href="#cta"
className="px-4 py-2 bg-violet-600 text-white rounded-md hover:bg-violet-700"
>
Réserver un créneau
</a>
<a
href="#services"
className="px-4 py-2 border rounded-md hover:bg-slate-50"
>
Voir les services
</a>
</div>
<ul className="mt-6 grid grid-cols-2 gap-2 text-sm text-slate-600">
<li>✅ Ouvert du mardi au samedi</li>
<li>✅ Produits pros (sans cruauté)</li>
<li>✅ Rendez-vous en ligne</li>
<li>✅ À 3 min du tram</li>
</ul>
</div>
<div className="rounded-lg border bg-slate-100 h-64 flex items-center justify-center text-slate-500">
Galerie à venir
</div>
</div>
</section>
);
}

function Services() {
return (
<section id="services" className="mx-auto max-w-6xl px-4 py-16">
<h2 className="text-2xl font-semibold">Nos services</h2>
<p className="mt-2 text-slate-600">
Une carte courte et efficace pour des résultats durables.
</p>
<div className="mt-6 grid sm:grid-cols-2 md:grid-cols-4 gap-4">
<div className="border rounded-lg p-4">
<h3 className="font-medium">Coupe & Coiffage</h3>
<p className="text-sm text-slate-600">Diagnostic, coupe personnalisée, brushing.</p>
</div>
<div className="border rounded-lg p-4">
<h3 className="font-medium">Coloration / Balayage</h3>
<p className="text-sm text-slate-600">Techniques sur-mesure, nuances naturelles.</p>
</div>
<div className="border rounded-lg p-4">
<h3 className="font-medium">Soin Profond</h3>
<p className="text-sm text-slate-600">Réparation & brillance, protocole professionnel.</p>
</div>
<div className="border rounded-lg p-4">
<h3 className="font-medium">Barbe & Taille</h3>
<p className="text-sm text-slate-600">Contours, taille, finition soignée.</p>
</div>
</div>
</section>
);
}

function Pricing() {
return (
<section id="tarifs" className="mx-auto max-w-6xl px-4 py-16">
<h2 className="text-2xl font-semibold">Nos tarifs</h2>
<p className="mt-2 text-slate-600">Des prix clairs et accessibles.</p>
<ul className="mt-6 space-y-3">
<li>✂️ Coupe femme : 35€</li>
<li>✂️ Coupe homme : 22€</li>
<li>🎨 Balayage / mèches : dès 55€</li>
<li>💆 Soin profond : 25€</li>
</ul>
</section>
);
}

function Testimonials() {
return (
<section id="avis" className="mx-auto max-w-6xl px-4 py-16">
<h2 className="text-2xl font-semibold">Avis clients</h2>
<div className="mt-6 grid sm:grid-cols-2 gap-6">
<blockquote className="p-4 border rounded-lg bg-slate-50">
<p>“Super équipe, coupe impeccable et ambiance chaleureuse !”</p>
<footer className="mt-2 text-sm text-slate-600">— Julie M.</footer>
</blockquote>
<blockquote className="p-4 border rounded-lg bg-slate-50">
<p>“Très satisfait, rapide et professionnel, je recommande vivement.”</p>
<footer className="mt-2 text-sm text-slate-600">— Karim D.</footer>
</blockquote>
</div>
</section>
);
}

function CTA() {
return (
<section id="cta" className="mx-auto max-w-6xl px-4 py-16 text-center">
<h2 className="text-2xl font-bold">Prenez rendez-vous dès aujourd’hui</h2>
<p className="mt-2 text-slate-600">
Offrez-vous un moment de détente et repartez avec un style qui vous ressemble.
</p>
<a
href="#"
className="mt-6 inline-block px-6 py-3 bg-violet-600 text-white rounded-md hover:bg-violet-700"
>
Réserver en ligne
</a>
</section>
);
}

function Footer() {
return (
<footer className="bg-slate-900 text-white py-6 mt-12">
<div className="mx-auto max-w-6xl px-4 flex justify-between items-center">
<p>&copy; 2025 Belle&Chic Coiffure. Tous droits réservés.</p>
<nav className="flex gap-4 text-sm">
<a href="#services" className="hover:text-violet-400">Services</a>
<a href="#tarifs" className="hover:text-violet-400">Tarifs</a>
<a href="#galerie" className="hover:text-violet-400">Galerie</a>
<a href="#avis" className="hover:text-violet-400">Avis</a>
</nav>
</div>
</footer>
);
}
