import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Search,
  ChevronDown,
  ShieldCheck,
  FileText,
  Heart,
  MapPin,
  Bed,
  Maximize,
  Car,
  BadgeCheck,
  CheckCircle,
  TrendingUp,
  Star
} from 'lucide-react';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchType, setSearchType] = useState('location');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/recherche?q=${searchQuery}&type=${searchType}`);
  };

  return (
    <section className={styles.heroSection}>
      {/* Decorative elements */}
      <div className={styles.decorCircle1} />
      <div className={styles.decorCircle2} />
      <div className={styles.decorCircle3} />

      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Left: Content */}
          <div className={styles.contentColumn}>
            {/* Badge */}
            <div className={styles.badge}>
              <span className={styles.badgeDot} />
              <span>La plateforme immobilière #1 en Guinée</span>
            </div>

            {/* Headline */}
            <h1 className={styles.title}>
              Trouvez votre{' '}
              <span className={styles.titleGradient}>logement idéal</span>{' '}
              en toute confiance
            </h1>

            {/* Subheadline */}
            <p className={styles.description}>
              Location, achat, paiement sécurisé. Konkon connecte locataires, propriétaires et démarcheurs vérifiés sur une plateforme unique.
            </p>

            {/* Search Box */}
            <form onSubmit={handleSearch} className={styles.searchBox}>
              <div className={styles.searchContent}>
                <div className={styles.searchInput}>
                  <Search className={styles.searchIcon} />
                  <input
                    type="text"
                    placeholder="Quartier, ville ou type de bien..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className={styles.input}
                  />
                </div>
                <div className={styles.selectWrapper}>
                  <select
                    value={searchType}
                    onChange={(e) => setSearchType(e.target.value)}
                    aria-label="Type de recherche"
                    className={styles.select}
                  >
                    <option value="location">Location</option>
                    <option value="achat">Achat</option>
                    <option value="terrain">Terrain</option>
                  </select>
                  <ChevronDown className={styles.selectIcon} />
                </div>
                <button type="submit" className={styles.searchButton}>
                  <Search className={styles.buttonIcon} />
                  <span>Rechercher</span>
                </button>
              </div>
            </form>

            {/* Trust badges */}
            <div className={styles.trustBadges}>
              <div className={styles.trustBadge}>
                <div className={styles.trustIcon}>
                  <ShieldCheck />
                </div>
                <span>Démarcheurs vérifiés</span>
              </div>
              <div className={styles.trustBadge}>
                <div className={styles.trustIconOrange}>
                  <span>OM</span>
                </div>
                <span>Paiement Orange Money</span>
              </div>
              <div className={styles.trustBadge}>
                <div className={styles.trustIconCyan}>
                  <FileText />
                </div>
                <span>Reçus automatiques</span>
              </div>
            </div>
          </div>

          {/* Right: Visual */}
          <div className={styles.visualColumn}>
            {/* Main property card */}
            <div className={styles.propertyCard}>
              <div className={styles.propertyImage}>
                <img
                  src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop"
                  alt="Villa moderne"
                />
                <div className={styles.propertyBadges}>
                  <span className={styles.badgeLocation}>Location</span>
                  <span className={styles.badgeFeatured}>
                    <Star className={styles.starIcon} /> À la une
                  </span>
                </div>
                <button
                  type="button"
                  aria-label="Ajouter aux favoris"
                  className={styles.favoriteButton}
                >
                  <Heart />
                </button>
              </div>
              <div className={styles.propertyContent}>
                <div className={styles.propertyLocation}>
                  <MapPin />
                  Kipé, Ratoma, Conakry
                </div>
                <h3 className={styles.propertyTitle}>
                  Villa moderne 4 pièces avec jardin et piscine
                </h3>
                <div className={styles.propertyFeatures}>
                  <span><Bed /> 4 pièces</span>
                  <span><Maximize /> 320 m²</span>
                  <span><Car /> Parking</span>
                </div>
                <div className={styles.propertyFooter}>
                  <p className={styles.propertyPrice}>
                    5 500 000 <span>GNF/mois</span>
                  </p>
                  <div className={styles.agentInfo}>
                    <div className={styles.agentAvatar}>
                      <span>MD</span>
                    </div>
                    <BadgeCheck className={styles.verifiedBadge} />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating notification card */}
            <div className={styles.floatingNotification}>
              <div className={styles.notificationIcon}>
                <CheckCircle />
              </div>
              <div>
                <p className={styles.notificationTitle}>Paiement reçu !</p>
                <p className={styles.notificationText}>3 500 000 GNF • Orange Money</p>
              </div>
            </div>

            {/* Floating stats card */}
            <div className={styles.floatingStats}>
              <div className={styles.statsIcon}>
                <TrendingUp />
              </div>
              <div>
                <p className={styles.statsValue}>2,847</p>
                <p className={styles.statsLabel}>Annonces actives</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className={styles.scrollIndicator}>
          <span>Découvrir</span>
          <ChevronDown />
        </div>
      </div>
    </section>
  );
}
