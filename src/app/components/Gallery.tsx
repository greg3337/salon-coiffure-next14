export default function Gallery() {
const imgs = ["/g1.jpg", "/g2.jpg", "/g3.jpg", "/g4.jpg", "/g5.jpg"];

return (
<section id="galerie" className="mx-auto max-w-6xl px-4 py-16">
<h2 className="text-2xl font-semibold">Galerie</h2>
<div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
{imgs.map((src, i) => (
<img
key={i}
src={src}
alt={`Réalisation ${i + 1}`}
className="w-full rounded-lg object-cover aspect-[4/3]"
/>
))}
</div>
</section>
);
}
