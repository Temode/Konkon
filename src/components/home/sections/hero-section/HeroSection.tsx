import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin, CheckCircle, Building2, Users, ShieldCheck } from 'lucide-react';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchType, setSearchType] = useState<'location' | 'vente'>('location');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/recherche?q=${searchQuery}&type=${searchType}`);
  };

  const stats = [
    { value: '1 500+', label: 'Annonces actives', icon: Building2 },
    { value: '200+', label: 'Démarcheurs vérifiés', icon: ShieldCheck },
    { value: '5 000+', label: 'Utilisateurs satisfaits', icon: Users },
  ];

  const quartiers = ['Kipé', 'Nongo', 'Lambanyi', 'Taouyah', 'Kaporo', 'Cosa'];

  return (
    <section className={styles.heroSection}>
      {/* Background decorations */}
      <div className={styles.background} />
      <div className={styles.decorCircle1} />
      <div className={styles.decorCircle2} />

      <div className={styles.container}>
        <div className={styles.content}>
          {/* Badge */}
          <div className={styles.badge}>
            <CheckCircle size={16} />
            Plateforme immobilière #1 en Guinée
          </div>

          {/* Title */}
          <h1 className={styles.title}>
            Trouvez votre logement idéal{' '}
            <span className={styles.titleGradient}>en Guinée</span>
          </h1>

          {/* Description */}
          <p className={styles.description}>
            Konkon connecte locataires, propriétaires et démarcheurs vérifiés pour une expérience immobilière simple, sécurisée et transparente.
          </p>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className={styles.searchForm}>
            <div className={styles.searchFormContent}>
              <div className={styles.searchInputWrapper}>
                <MapPin />
                <input
                  type="text"
                  placeholder="Quartier, commune ou ville..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={styles.searchInput}
                />
              </div>
              <select
                value={searchType}
                onChange={(e) => setSearchType(e.target.value as 'location' | 'vente')}
                className={styles.searchSelect}
              >
                <option value="location">Location</option>
                <option value="vente">Achat</option>
              </select>
              <button type="submit" className={styles.searchButton}>
                <Search />
                <span className={styles.searchButtonText}>Rechercher</span>
              </button>
            </div>
          </form>

          {/* Popular Quartiers */}
          <div className={styles.quartiersWrapper}>
            <span className={styles.quartiersLabel}>Quartiers populaires :</span>
            {quartiers.map((quartier) => (
              <button
                key={quartier}
                onClick={() => setSearchQuery(quartier)}
                className={styles.quartierButton}
              >
                {quartier}
              </button>
            ))}
          </div>

          {/* Stats */}
          <div className={styles.stats}>
            {stats.map((stat) => (
              <div key={stat.label} className={styles.statItem}>
                <div className={styles.statIcon}>
                  <stat.icon />
                </div>
                <div className={styles.statText}>
                  <p className={styles.statValue}>{stat.value}</p>
                  <p className={styles.statLabel}>{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
