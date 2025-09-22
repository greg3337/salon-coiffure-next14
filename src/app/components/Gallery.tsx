import Image from "next/image";

const images = [
"/g1.jpg",
"/g2.jpg",
"/g3.jpg",
"/g4.jpg",
"/g5.jpg",
];

export default function Gallery() {
return (
<section id="galerie" className="py-16 bg-gray-50">
<div className="max-w-6xl mx-auto px-4">
<h2 className="text-3xl font-bold text-center text-slate-800 mb-8">
Galerie
</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
{images.map((src, index) => (
<div
key={index}
className="relative w-full h-64 overflow-hidden rounded-lg shadow-md"
>
<Image
src={src}
alt={`Photo salon ${index + 1}`}
fill
className="object-cover hover:scale-110 transition-transform duration-300"
/>
</div>
))}
</div>
</div>
</section>
);
}