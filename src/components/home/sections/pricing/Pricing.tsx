import { Check, X } from 'lucide-react';
import styles from './Pricing.module.css';

export default function Pricing() {
  const pricingPlans = [
    {
      name: "Gratuit",
      description: "Pour démarrer",
      price: "0",
      period: "Pour toujours",
      features: [
        { name: "Jusqu'à 3 annonces", included: true },
        { name: "Messagerie illimitée", included: true },
        { name: "3% de commission", included: true },
        { name: "Statistiques avancées", included: false },
        { name: "Support prioritaire", included: false },
      ],
      buttonText: "Commencer gratuitement",
      popular: false,
    },
    {
      name: "Pro",
      description: "Pour les professionnels",
      price: "150 000",
      period: "par mois",
      features: [
        { name: "Annonces illimitées", included: true },
        { name: "Messagerie illimitée", included: true },
        { name: "1.5% de commission", included: true, highlight: true },
        { name: "Statistiques avancées", included: true },
        { name: "Support prioritaire", included: true },
      ],
      buttonText: "Passer à Pro",
      popular: true,
    },
    {
      name: "Agence",
      description: "Pour les équipes",
      price: "400 000",
      period: "par mois",
      features: [
        { name: "Tout de Pro +", included: true },
        { name: "5 comptes utilisateurs", included: true },
        { name: "1% de commission", included: true, highlight: true },
        { name: "API d'intégration", included: true },
        { name: "Account manager dédié", included: true },
      ],
      buttonText: "Contacter les ventes",
      popular: false,
    },
  ];

  return (
    <section className={styles.section} id="tarifs">
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.badge}>Tarifs</span>
          <h2 className={styles.title}>
            Des offres <span className={styles.highlight}>adaptées</span> à vos besoins
          </h2>
          <p className={styles.description}>
            Commencez gratuitement et évoluez selon votre activité.
          </p>
        </div>

        {/* Plans Grid */}
        <div className={styles.grid}>
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={`${styles.planCard} ${plan.popular ? styles.popular : ''}`}
            >
              {plan.popular && (
                <div className={styles.popularBadge}>
                  <span>Populaire</span>
                </div>
              )}
              <div className={styles.planHeader}>
                <h3 className={styles.planName}>{plan.name}</h3>
                <p className={styles.planDescription}>{plan.description}</p>
              </div>
              <div className={styles.priceWrapper}>
                <p className={styles.price}>
                  {plan.price} <span className={styles.currency}>GNF</span>
                </p>
                <p className={styles.period}>{plan.period}</p>
              </div>
              <ul className={styles.featuresList}>
                {plan.features.map((feature) => (
                  <li
                    key={feature.name}
                    className={`${styles.feature} ${!feature.included ? styles.featureDisabled : ''}`}
                  >
                    {feature.included ? (
                      <Check className={styles.checkIcon} />
                    ) : (
                      <X className={styles.xIcon} />
                    )}
                    <span className={feature.highlight ? styles.highlighted : ''}>
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>
              <button
                className={`${styles.button} ${plan.popular ? styles.buttonPrimary : styles.buttonSecondary}`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
