import styles from './Stats.module.css';

export default function Stats() {
  const stats = [
    { value: "2,847+", label: "Annonces actives" },
    { value: "450+", label: "Démarcheurs vérifiés" },
    { value: "12K+", label: "Utilisateurs actifs" },
    { value: "98%", label: "Satisfaction client" },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {stats.map((stat) => (
            <div key={stat.label} className={styles.statItem}>
              <p className={styles.value}>{stat.value}</p>
              <p className={styles.label}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
