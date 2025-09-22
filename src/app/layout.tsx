import './globals.css';
export const viewport = {
width: 'device-width',
initialScale: 1,
};

export const metadata = {
title: 'Belle&Chic Coiffure | Bordeaux',
description: 'Salon de coiffure moderne à Bordeaux : coupes, balayages et soins professionnels.',
openGraph: {
title: 'Belle&Chic Coiffure | Bordeaux',
description: 'Coupes, couleurs, balayages et soins pros — réservez votre créneau.',
url: 'https://ton-domaine.fr',
siteName: 'Belle&Chic Coiffure',
images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
locale: 'fr_FR',
type: 'website',
},
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
return (
<html lang="fr">
<body>
<header className="navbar">
<a href="/" className="logo">Belle&Chic Coiffure</a>
<nav>
<a href="#services">Services</a>
<a href="#tarifs">Tarifs</a>
<a href="#galerie">Galerie</a>
<a href="#avis">Avis</a>
</nav>
</header>

{children}

<footer className="site-footer">
<p className="brand">© {new Date().getFullYear()} Belle&Chic Coiffure</p>

<p className="meta">
<a
className="address"
href="https://www.google.com/maps/search/?api=1&query=12+Rue+Sainte-Catherine,+33000+Bordeaux"
target="_blank"
rel="noopener noreferrer"
>
12 Rue Sainte-Catherine, 33000 Bordeaux
</a>
<span className="sep">•</span>
<span>Mar–Sam 9:30–19:00</span>
<span className="sep">•</span>
<a className="tel" href="tel:+33658936788">06 58 93 67 88</a>
</p>

<nav className="social">
<a aria-label="Instagram" href="#" title="Instagram" target="_blank" rel="noopener noreferrer">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
<path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-.9a1.1 1.1 0 100 2.2 1.1 1.1 0 000-2.2z"/>
</svg>
</a>

<a aria-label="Facebook" href="#" title="Facebook" target="_blank" rel="noopener noreferrer">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
<path d="M22 12a10 10 0 10-11.6 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.2 1.8.2v2h-1c-1 0-1.3.6-1.3 1.2V12h2.3l-.4 3h-1.9v7A10 10 0 0022 12z"/>
</svg>
</a>

<a aria-label="TikTok" href="#" title="TikTok" target="_blank" rel="noopener noreferrer">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
<path d="M12 2c1.1 0 2 .9 2 2v1c0 .6.4 1 1 1h1c.6 0 1 .4 1 1a5 5 0 01-5 5h-1v5a4 4 0 11-4-4h1V7c0-1.1.9-2 2-2z"/>
</svg>
</a>
</nav>
</footer>


{/* JSON-LD LocalBusiness */}
<script
type="application/ld+json"
// @ts-ignore
dangerouslySetInnerHTML={{
__html: JSON.stringify({
"@context": "https://schema.org",
"@type": "HairSalon",
"name": "Belle&Chic Coiffure",
"address": {
"@type": "PostalAddress",
"streetAddress": "12 Rue Sainte-Catherine",
"addressLocality": "Bordeaux",
"postalCode": "33000",
"addressCountry": "FR"
},
"telephone": "+33556000000",
"image": "https://ton-domaine.fr/og-image.jpg",
"url": "https://ton-domaine.fr",
"priceRange": "€€",
"openingHours": "Tu-Sa 09:30-19:00"
})
}}
/>
</body>
</html>
);
}
