import { Star, MessageCircle } from 'lucide-react';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    id: 1,
    name: 'Fatoumata Diallo',
    role: 'Locataire à Kipé',
    rating: 5,
    content:
      "J'ai trouvé mon appartement en moins d'une semaine grâce à Konkon. Les démarcheurs sont professionnels et réactifs. Je recommande vivement cette plateforme !",
  },
  {
    id: 2,
    name: 'Mamadou Sow',
    role: 'Démarcheur à Conakry',
    rating: 5,
    content:
      'Konkon a révolutionné ma façon de travailler. Je gère maintenant toutes mes annonces depuis un seul endroit et mes clients me trouvent facilement.',
  },
  {
    id: 3,
    name: 'Aissatou Bah',
    role: 'Propriétaire à Lambanyi',
    rating: 5,
    content:
      'Excellente expérience ! J\'ai loué ma villa en quelques jours. Le système de paiement sécurisé me donne une totale confiance.',
  },
];

export default function Testimonials() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.badge}>
            <MessageCircle size={16} />
            Témoignages
          </div>
          <h2 className={styles.title}>Ce que disent nos utilisateurs</h2>
        </div>

        {/* Testimonials Grid */}
        <div className={styles.grid}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className={styles.card}>
              {/* Rating Stars */}
              <div className={styles.rating}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className={styles.star} />
                ))}
              </div>

              {/* Quote */}
              <p className={styles.quote}>{testimonial.content}</p>

              {/* Author */}
              <div className={styles.author}>
                <div className={styles.avatar}>
                  {testimonial.name.charAt(0)}
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
