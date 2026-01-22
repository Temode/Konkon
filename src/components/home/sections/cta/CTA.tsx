import { Link } from 'react-router-dom';
import { Rocket, PlayCircle } from 'lucide-react';
import styles from './CTA.module.css';

export default function CTA() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.ctaContainer}>
          {/* Decorative Circles */}
          <div className={styles.decorCircle1} />
          <div className={styles.decorCircle2} />

          {/* Content */}
          <div className={styles.content}>
            <h2 className={styles.title}>
              Prêt à transformer votre expérience immobilière ?
            </h2>
            <p className={styles.description}>
              Rejoignez des milliers d'utilisateurs qui font confiance à Konkon pour leurs transactions immobilières en Guinée.
            </p>

            {/* Buttons */}
            <div className={styles.buttons}>
              <Link to="/inscription" className={styles.primaryButton}>
                <Rocket />
                Commencer gratuitement
              </Link>
              <Link to="/recherche" className={styles.secondaryButton}>
                <PlayCircle />
                Voir la démo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
