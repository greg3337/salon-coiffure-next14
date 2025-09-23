import './globals.css';
import Link from 'next/link';
import type { Metadata, Viewport } from 'next';

export const viewport: Viewport = {
width: 'device-width',
initialScale: 1,
};

export const metadata: Metadata = {
title: 'Belle&Chic Coiffure | Bordeaux',
description:
'Salon de coiffure moderne à Bordeaux : coupes, balayages et soins professionnels.',
openGraph: {
title: 'Belle&Chic Coiffure | Bordeaux',
description:
'Coupes, couleurs, balayages et soins pros — réservez votre créneau.',
url: 'https://ton-domaine.fr',
siteName: 'Belle&Chic Coiffure',
images: [
{
url: '/og-image.jpg',
width: 1200,
height: 630,
},
],
locale: 'fr_FR',
type: 'website',
},
};

export default function RootLayout({
children,
}: {
children: React.ReactNode;
}) {
return (
<html lang="fr">
<body>
{/* HEADER */}
<header className="navbar">
<Link href="/" className="logo">
Belle&Chic Coiffure
</Link>
<nav>
<Link href="#services">Services</Link>
<Link href="#tarifs">Tarifs</Link>
<Link href="#galerie">Galerie</Link>
<Link href="#avis">Avis</Link>
</nav>
</header>

{/* CONTENU */}
{children}

{/* FOOTER */}
<footer className="site-footer">
<p className="brand">
© {new Date().getFullYear()} Belle&Chic Coiffure
</p>
<p className="meta">
<a
className="address"
href="https://www.google.com/maps/search/?api=1&query=12+Rue+Sainte-Catherine,+33000+Bordeaux"
target="_blank"
rel="noopener noreferrer"
>
12 Rue Sainte-Catherine, 33000 Bordeaux
</a>
</p>

<p className="contact">
📞 <a href="tel:+33556936788">05 56 93 67 88</a> <br />
✉️ <a href="mailto:contact@bellechic.fr">contact@bellechic.fr</a>
</p>

{/* Réseaux sociaux */}
<nav className="social">
<a
aria-label="Instagram"
href="#"
title="Instagram"
target="_blank"
rel="noopener noreferrer"
>
<svg
xmlns="http://www.w3.org/2000/svg"
width="24"
height="24"
fill="currentColor"
viewBox="0 0 24 24"
>
<path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9zm4.5 3a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11zm0 2a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm5.75-.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0z" />
</svg>
</a>
<a
aria-label="Facebook"
href="#"
title="Facebook"
target="_blank"
rel="noopener noreferrer"
>
<svg
xmlns="http://www.w3.org/2000/svg"
width="24"
height="24"
fill="currentColor"
viewBox="0 0 24 24"
>
<path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2v1.8h2.3l-.4 3h-1.9v7A10 10 0 0 0 22 12z" />
</svg>
</a>
</nav>

{/* SEO JSON-LD */}
<script
type="application/ld+json"
dangerouslySetInnerHTML={{
__html: JSON.stringify({
'@context': 'https://schema.org',
'@type': 'HairSalon',
name: 'Belle&Chic Coiffure',
address: {
'@type': 'PostalAddress',
streetAddress: '12 Rue Sainte-Catherine',
addressLocality: 'Bordeaux',
postalCode: '33000',
addressCountry: 'FR',
},
telephone: '+33556000000',
image: 'https://ton-domaine.fr/og-image.jpg',
url: 'https://ton-domaine.fr',
priceRange: '€€',
openingHours: 'Tu-Sa 09:30-19:00',
}),
}}
/>
</footer>
</body>
</html>
);
}
