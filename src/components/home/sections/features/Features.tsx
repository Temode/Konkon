import { Search, ShieldCheck, CreditCard, FileText, MessageCircle, LayoutDashboard, Check } from 'lucide-react';
import styles from './Features.module.css';

const features = [
  {
    icon: Search,
    title: 'Recherche avancée',
    description: 'Filtres par quartier, prix, type de bien, nombre de pièces. Vue carte ou liste avec photos HD.',
    items: ['Filtres multicritères', 'Vue carte interactive', 'Alertes personnalisées'],
  },
  {
    icon: ShieldCheck,
    title: 'Vérification KYC',
    description: 'Tous les démarcheurs passent par un processus de vérification d\'identité rigoureux.',
    items: ['Vérification CNI', 'Badge "Vérifié"', 'Notation et avis'],
  },
  {
    icon: CreditCard,
    title: 'Paiement sécurisé',
    description: 'Payez votre loyer ou avance via Orange Money. Répartition automatique entre les parties.',
    items: ['Orange Money intégré', 'Répartition automatique', 'Historique complet'],
  },
  {
    icon: FileText,
    title: 'Reçus automatiques',
    description: 'Un reçu PDF professionnel est généré automatiquement après chaque paiement.',
    items: ['PDF téléchargeable', 'Envoi par email', 'Valeur légale'],
  },
  {
    icon: MessageCircle,
    title: 'Messagerie intégrée',
    description: 'Communiquez directement avec les démarcheurs sans partager vos coordonnées personnelles.',
    items: ['Chat en temps réel', 'Partage de photos', 'Notifications push'],
  },
  {
    icon: LayoutDashboard,
    title: 'Tableaux de bord',
    description: 'Gérez vos annonces, paiements et conversations depuis un espace dédié et intuitif.',
    items: ['Vue d\'ensemble', 'Statistiques détaillées', 'Gestion simplifiée'],
  },
];

export default function Features() {
  return (
    <section className={styles.section} id="fonctionnalites">
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.badge}>Fonctionnalités</span>
          <h2 className={styles.title}>
            Tout ce dont vous avez besoin pour <span className={styles.highlight}>réussir</span>
          </h2>
          <p className={styles.description}>
            Une suite complète d'outils pour locataires, propriétaires et démarcheurs.
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
              <ul className={styles.itemsList}>
                {feature.items.map((item) => (
                  <li key={item} className={styles.item}>
                    <Check className={styles.checkIcon} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
