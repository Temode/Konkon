import { Star } from 'lucide-react';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    content: "J'ai trouvé mon appartement en 3 jours ! Le démarcheur était vérifié et le paiement via Orange Money m'a rassuré. Plus besoin de transporter du cash.",
    name: 'Aissatou Barry',
    role: 'Locataire, Conakry',
    initials: 'AB',
    gradient: 'from-primary-100 to-accent-cyan/20',
    textColor: 'text-primary-600',
  },
  {
    content: "En tant que démarcheur, le badge vérifié m'a permis de gagner la confiance de mes clients. Mes revenus ont augmenté de 40% depuis que j'utilise Konkon.",
    name: 'Mamadou Diallo',
    role: 'Démarcheur Pro, Ratoma',
    initials: 'MD',
    gradient: 'from-amber-100 to-red-100',
    textColor: 'text-amber-600',
  },
  {
    content: "Depuis Paris, je gère 3 appartements à Conakry. Les reçus automatiques et le suivi des paiements me facilitent énormément la vie. Merci Konkon !",
    name: 'Fatoumata Sylla',
    role: 'Propriétaire, Diaspora',
    initials: 'FS',
    gradient: 'from-purple-100 to-blue-100',
    textColor: 'text-purple-600',
  },
];

export default function Testimonials() {
  return (
    <section className={styles.section} id="temoignages">
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.badge}>Témoignages</span>
          <h2 className={styles.title}>
            Ce que disent nos <span className={styles.highlight}>utilisateurs</span>
          </h2>
          <p className={styles.description}>
            Des milliers de personnes font confiance à Konkon pour leurs transactions immobilières.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className={styles.grid}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className={styles.card}>
              {/* Rating Stars */}
              <div className={styles.rating}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={styles.star} />
                ))}
              </div>

              {/* Quote */}
              <p className={styles.quote}>"{testimonial.content}"</p>

              {/* Author */}
              <div className={styles.author}>
                <div className={`${styles.avatar} ${styles[testimonial.gradient]}`}>
                  <span className={styles[testimonial.textColor]}>{testimonial.initials}</span>
                </div>
                <div className={styles.authorInfo}>
                  <p className={styles.authorName}>{testimonial.name}</p>
                  <p className={styles.authorRole}>{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
