import { Search, MessageCircle, Home, CreditCard, ChevronRight } from 'lucide-react';
import styles from './HowItWorks.module.css';

const steps = [
  {
    icon: Search,
    title: 'Recherchez',
    description: 'Explorez des milliers d\'annonces avec filtres, carte et photos HD. Sauvegardez vos favoris.',
  },
  {
    icon: MessageCircle,
    title: 'Contactez',
    description: 'Discutez directement avec le démarcheur vérifié via notre messagerie sécurisée.',
  },
  {
    icon: Home,
    title: 'Visitez',
    description: 'Planifiez et effectuez votre visite. Vérifiez le bien en personne avant de vous engager.',
  },
  {
    icon: CreditCard,
    title: 'Payez',
    description: 'Payez en toute sécurité via Orange Money. Recevez votre reçu PDF automatiquement.',
  },
];

export default function HowItWorks() {
  return (
    <section className={styles.section} id="comment-ca-marche">
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.badge}>Comment ça marche</span>
          <h2 className={styles.title}>
            Trouvez et payez votre logement en <span className={styles.highlight}>4 étapes simples</span>
          </h2>
          <p className={styles.description}>
            De la recherche au paiement, Konkon simplifie chaque étape de votre parcours immobilier.
          </p>
        </div>

        {/* Steps Grid */}
        <div className={styles.stepsGrid}>
          {steps.map((step, index) => (
            <div key={step.title} className={styles.stepCard}>
              <div className={styles.stepNumber}>{index + 1}</div>

              <div className={styles.stepIcon}>
                <step.icon />
              </div>

              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDescription}>{step.description}</p>

              {/* Arrow (desktop only, hidden on last card) */}
              {index < steps.length - 1 && (
                <ChevronRight className={styles.arrow} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
