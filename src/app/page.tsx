"use client";

import { useEffect } from "react";
import Image from "next/image";

export default function Home() {
// Ombre sur la navbar au scroll
useEffect(() => {
const nav = document.querySelector('.navbar');
const onScroll = () => {
if (!nav) return;
if (window.scrollY > 8) nav.classList.add('scrolled');
else nav.classList.remove('scrolled');
};
onScroll();
window.addEventListener('scroll', onScroll);
return () => window.removeEventListener('scroll', onScroll);
}, []);

return (
<main>
{/* HERO */}
<section className="hero-grid">
<div className="hero-text">
<h1>Votre nouveau style, <span>entre de bonnes mains.</span></h1>
<p>
Salon de coiffure moderne à Bordeaux. Coupes, couleurs, balayages et soins profonds —
avec des produits professionnels et une équipe aux petits soins.
</p>

<div className="actions">
<a href="/reservation" className="btn">Prendre rendez-vous</a>
<a href="#services" className="btn-secondary">Voir les services</a>
<a href="tel:+33658936788" className="btn-secondary">Appeler</a>
</div>

<ul className="features">
<li>✅ Ouvert du mardi au samedi</li>
<li>✅ Rendez-vous en ligne</li>
<li>✅ Produits pros</li>
<li>✅ À 3 min du tram</li>
</ul>
</div>

<div className="hero-image">
{/* Slider minimal (remplace /g1..g3 par tes fichiers dans /public) */}
<div className="slider">
<Image src="/g1.jpg" alt="Coiffure 1" width={800} height={600} />
<Image src="/g2.jpg" alt="Coiffure 2" width={800} height={600} />
<Image src="/g3.jpg" alt="Coiffure 3" width={800} height={600} />
</div>
</div>
</section>

{/* SERVICES */}
<section id="services">
<h2>Nos services</h2>
<p className="lead">Une carte courte et efficace pour des résultats durables.</p>

<div className="cards">
<div className="card">
<h3>Coupe & Coiffage</h3>
<p>Diagnostic, coupe personnalisée, brushing.</p>
</div>
<div className="card">
<h3>Coloration / Balayage</h3>
<p>Techniques sur-mesure, nuances naturelles.</p>
</div>
<div className="card">
<h3>Soin Profond</h3>
<p>Réparation & brillance, protocole professionnel.</p>
</div>
<div className="card">
<h3>Barbe & Taille</h3>
<p>Contours, taille, finition soignée.</p>
</div>
</div>
</section>

{/* TARIFS */}
<section id="tarifs">
<h2>Nos tarifs</h2>
<div className="prices-card">
<ul className="price-list">
<li>
<span className="label">💇‍♀️ Coupe femme <small>(shampoing inclus)</small></span>
<span className="price">35€</span>
</li>
<li>
<span className="label">💇‍♂️ Coupe homme</span>
<span className="price">22€</span>
</li>
<li>
<span className="label">🌸 Balayage / mèches</span>
<span className="price">55€</span>
</li>
<li>
<span className="label">✨ Soin profond</span>
<span className="price">25€</span>
</li>

<li>
<span className="label">🧔 Barbe & Taille</span>
<span className="price">15€</span>
</li>
</ul>
</div>
</section>

{/* GALERIE (images locales dans /public) */}
<section id="galerie">
<h2>Galerie</h2>
<div className="gallery-grid">
<Image src="/g1.jpg" alt="Coiffure" width={300} height={200} />
<Image src="/g2.jpg" alt="Brushing" width={300} height={200} />
<Image src="/g3.jpg" alt="Homme" width={300} height={200} />
<Image src="/g4.jpg" alt="Salon" width={300} height={200} />
<Image src="/g5.jpg" alt="Style" width={300} height={200} />
</div>
</section>

{/* AVIS */}
<section id="avis">
<h2>Avis clients</h2>
<div className="avis">
<blockquote>“Super équipe, coupe impeccable et ambiance chaleureuse !” <br/>— Julie M.</blockquote>
<blockquote>“Très satisfait, rapide et professionnel, je recommande vivement.” <br/>— Karim D.</blockquote>
</div>
</section>

{/* CTA */}
<section id="cta" className="cta">
<h2>Prenez rendez-vous dès aujourd’hui</h2>
<p>Offrez-vous un moment de détente et repartez avec un style qui vous ressemble.</p>
<a href="/reservation" className="btn">Réserver en ligne</a>
<a href="tel:+33658936788" className="btn-secondary">Appeler le salon</a>
</section>
</main>
);
}
