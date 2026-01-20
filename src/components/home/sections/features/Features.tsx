import { Search, ShieldCheck, CreditCard, FileText, MessageSquare, LayoutDashboard, Sparkles } from 'lucide-react';
import styles from './Features.module.css';

const features = [
  {
    icon: Search,
    title: 'Recherche avancée',
    description: 'Filtrez par quartier, prix, type et caractéristiques',
  },
  {
    icon: ShieldCheck,
    title: 'Vérification KYC',
    description: 'Tous les démarcheurs sont vérifiés et certifiés',
  },
  {
    icon: CreditCard,
    title: 'Paiement sécurisé',
    description: 'Transactions protégées par cryptage bancaire',
  },
  {
    icon: FileText,
    title: 'Reçus automatiques',
    description: 'Justificatifs générés pour chaque transaction',
  },
  {
    icon: MessageSquare,
    title: 'Messagerie intégrée',
    description: 'Communiquez facilement avec les démarcheurs',
  },
  {
    icon: LayoutDashboard,
    title: 'Dashboard complet',
    description: 'Suivez vos favoris, messages et visites',
  },
];

export default function Features() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.badge}>
            <Sparkles size={16} />
            Fonctionnalités
          </div>
          <h2 className={styles.title}>Tout ce qu'il vous faut</h2>
          <p className={styles.description}>
            Konkon offre une expérience complète pour les locataires, propriétaires et démarcheurs
          </p>
        </div>

        {/* Features Grid */}
        <div className={styles.grid}>
          {features.map((feature) => (
            <div key={feature.title} className={styles.featureCard}>
              <div className={styles.iconWrapper}>
                <feature.icon />
              </div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
