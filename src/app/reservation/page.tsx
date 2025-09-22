'use client';

import { FormEvent, useState } from 'react';
import './reservation.css'

export default function ReservationPage() {
const [sending, setSending] = useState(false);
const [ok, setOk] = useState(false);

const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
e.preventDefault();
const fd = new FormData(e.currentTarget);
const name = String(fd.get('name') || '');
const email = String(fd.get('email') || '');
const phone = String(fd.get('phone') || '');
const service = String(fd.get('service') || '');
const date = String(fd.get('date') || '');
const time = String(fd.get('time') || '');

// mailto pour envoyer la demande
const to = 'contact@bellechic.fr';
const subject = encodeURIComponent(`Demande de RDV – ${name}`);
const body = encodeURIComponent(
`Bonjour,\n\nJe souhaite réserver :\n` +
`• Nom : ${name}\n` +
`• Email : ${email}\n` +
`• Téléphone : ${phone}\n` +
`• Service : ${service}\n` +
`• Date : ${date}\n` +
`• Heure : ${time}\n\nMerci !`
);

setSending(true);
window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
setTimeout(() => {
setSending(false);
setOk(true);
}, 600);
};

return (
<main className="reservation-page">
<h1>Réserver un créneau</h1>
<p>Choisissez votre prestation, une date et laissez vos coordonnées.</p>

<form className="reservation-form" onSubmit={handleSubmit}>
<label>Nom complet
<input name="name" required placeholder="Jean Dupont" />
</label>
<label>Email
<input type="email" name="email" required placeholder="vous@email.com" />
</label>
<label>Téléphone
<input name="phone" required placeholder="06 12 34 56 78" />
</label>
<label>Prestation
<select name="service" defaultValue="Coupe femme">
<option>Coupe femme</option>
<option>Coupe homme</option>
<option>Balayage / mèches</option>
<option>Soin profond</option>
<option>Barbe & Taille</option>
</select>
</label>
<label>Date
<input type="date" name="date" required />
</label>
<label>Heure
<input type="time" name="time" required />
</label>

<button className="btn" disabled={sending}>
{sending ? 'Ouverture du mail…' : ok ? 'Demande envoyée ✅' : 'Confirmer la réservation'}
</button>
</form>
</main>
);
}
