import { SearchX, ShieldX, Banknote, Search, ShieldCheck, CreditCard } from 'lucide-react';
import styles from './ProblemSolution.module.css';

export default function ProblemSolution() {
  const problems = [
    {
      icon: SearchX,
      title: "Manque de visibilité",
      description: "Les bons logements se trouvent par bouche-à-oreille. Impossible de comparer les offres facilement.",
    },
    {
      icon: ShieldX,
      title: "Arnaques fréquentes",
      description: "Faux démarcheurs, biens inexistants, absence de preuves de paiement.",
    },
    {
      icon: Banknote,
      title: "Paiements en cash risqués",
      description: "Pas de traçabilité, litiges fréquents, aucun reçu officiel.",
    },
  ];

  const solutions = [
    {
      icon: Search,
      title: "Recherche intelligente",
      description: "Filtres avancés, carte interactive, photos HD de tous les biens.",
    },
    {
      icon: ShieldCheck,
      title: "Vérification KYC",
      description: "Tous les démarcheurs sont vérifiés avec CNI et documents officiels.",
    },
    {
      icon: CreditCard,
      title: "Paiement sécurisé",
      description: "Orange Money intégré, répartition automatique, reçus PDF générés.",
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Problems */}
          <div className={styles.problemsColumn}>
            <span className={styles.badge}>Le problème</span>
            <h2 className={styles.title}>
              Le marché immobilier guinéen est <span className={styles.highlight}>complexe et risqué</span>
            </h2>
            <div className={styles.itemsList}>
              {problems.map((problem) => (
                <div key={problem.title} className={styles.problemItem}>
                  <div className={styles.problemIcon}>
                    <problem.icon />
                  </div>
                  <div>
                    <h3 className={styles.itemTitle}>{problem.title}</h3>
                    <p className={styles.itemDescription}>{problem.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div className={styles.solutionsColumn}>
            <span className={styles.badgeSolution}>La solution Konkon</span>
            <h2 className={styles.titleSolution}>
              Une plateforme <span className={styles.highlightSolution}>sécurisée</span> et{" "}
              <span className={styles.highlightSolution}>transparente</span>
            </h2>
            <div className={styles.itemsList}>
              {solutions.map((solution) => (
                <div key={solution.title} className={styles.solutionItem}>
                  <div className={styles.solutionIcon}>
                    <solution.icon />
                  </div>
                  <div>
                    <h3 className={styles.itemTitleSolution}>{solution.title}</h3>
                    <p className={styles.itemDescriptionSolution}>{solution.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
