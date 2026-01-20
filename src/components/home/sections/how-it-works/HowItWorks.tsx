import { Search, MessageSquare, Calendar, CreditCard, ChevronRight, Lightbulb } from 'lucide-react';
import styles from './HowItWorks.module.css';

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Rechercher',
    description: 'Trouvez votre bien idéal parmi nos milliers d\'annonces vérifiées',
  },
  {
    number: '02',
    icon: MessageSquare,
    title: 'Contacter',
    description: 'Échangez directement avec des démarcheurs vérifiés et de confiance',
  },
  {
    number: '03',
    icon: Calendar,
    title: 'Visiter',
    description: 'Planifiez vos visites facilement depuis la plateforme',
  },
  {
    number: '04',
    icon: CreditCard,
    title: 'Payer',
    description: 'Réglez en toute sécurité avec notre système de paiement protégé',
  },
];

export default function HowItWorks() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.badge}>
            <Lightbulb size={16} />
            Comment ça marche
          </div>
          <h2 className={styles.title}>
            Trouvez votre logement en 4 étapes
          </h2>
          <p className={styles.description}>
            Un processus simple et sécurisé pour trouver et louer votre prochain logement
          </p>
        </div>

        {/* Steps Grid */}
        <div className={styles.stepsGrid}>
          {steps.map((step, index) => (
            <div key={step.number} className={styles.stepCard}>
              <span className={styles.stepNumber}>{step.number}</span>

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
