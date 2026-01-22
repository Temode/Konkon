import { User, Home, Briefcase, Globe, Check } from 'lucide-react';
import styles from './ForWho.module.css';

export default function ForWho() {
  const audiences = [
    {
      icon: User,
      title: "Locataires",
      description: "Trouvez le logement parfait et payez en toute sécurité.",
      items: ["Recherche gratuite", "Paiement sécurisé", "Reçus automatiques"],
      gradient: "from-primary-500 to-accent-cyan",
    },
    {
      icon: Home,
      title: "Propriétaires",
      description: "Recevez vos loyers directement et suivez vos biens.",
      items: ["Réception automatique", "Tableau de bord", "Historique complet"],
      gradient: "from-blue-500 to-primary-500",
    },
    {
      icon: Briefcase,
      title: "Démarcheurs",
      description: "Professionnalisez votre activité et gagnez en crédibilité.",
      items: ["Badge vérifié", "Gestion des annonces", "Commissions tracées"],
      gradient: "from-amber-500 to-red-500",
    },
    {
      icon: Globe,
      title: "Diaspora",
      description: "Gérez vos biens en Guinée depuis n'importe où dans le monde.",
      items: ["Accès à distance", "Paiement carte/virement", "Suivi en temps réel"],
      gradient: "from-purple-500 to-blue-500",
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.badge}>Pour qui ?</span>
          <h2 className={styles.title}>
            Une plateforme pour <span className={styles.highlight}>tous les acteurs</span> de l'immobilier
          </h2>
          <p className={styles.description}>
            Que vous cherchiez un logement, gériez des biens ou fassiez de l'intermédiation, Konkon est fait pour vous.
          </p>
        </div>

        {/* Grid */}
        <div className={styles.grid}>
          {audiences.map((audience, index) => (
            <div key={audience.title} className={styles.card} data-index={index}>
              <div className={`${styles.iconWrapper} ${styles[audience.gradient]}`}>
                <audience.icon />
              </div>
              <h3 className={styles.cardTitle}>{audience.title}</h3>
              <p className={styles.cardDescription}>{audience.description}</p>
              <ul className={styles.itemsList}>
                {audience.items.map((item) => (
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
