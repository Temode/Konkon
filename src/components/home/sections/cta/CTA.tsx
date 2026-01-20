import { Link } from 'react-router-dom';
import { UserPlus, Search } from 'lucide-react';
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
              Prêt à trouver votre logement idéal ?
            </h2>
            <p className={styles.description}>
              Rejoignez des milliers d'utilisateurs satisfaits et trouvez votre prochain chez-vous en toute confiance.
            </p>

            {/* Buttons */}
            <div className={styles.buttons}>
              <Link to="/inscription" className={styles.primaryButton}>
                <UserPlus />
                Créer un compte gratuit
              </Link>
              <Link to="/recherche" className={styles.secondaryButton}>
                <Search />
                Parcourir les annonces
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
