import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Bed, Maximize, Car, Heart, ShieldCheck } from 'lucide-react';
import styles from './PropertyCard.module.css';

interface PropertyCardProps {
  id: string;
  title: string;
  type: string;
  transactionType: 'location' | 'vente';
  price: string;
  priceLabel: string;
  quartier: string;
  ville: string;
  pieces?: number;
  surface?: number;
  parking?: boolean;
  imageUrl: string;
  demarcheur: {
    name: string;
    verified: boolean;
  };
}

export default function PropertyCard({
  id,
  title,
  type,
  transactionType,
  price,
  priceLabel,
  quartier,
  ville,
  pieces,
  surface,
  parking,
  imageUrl,
  demarcheur,
}: PropertyCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className={styles.card}>
      {/* Image */}
      <div className={styles.imageWrapper}>
        <img src={imageUrl} alt={title} className={styles.image} />

        {/* Badges */}
        <div className={styles.badges}>
          <span className={transactionType === 'location' ? styles.badgeLocation : styles.badgeVente}>
            {transactionType === 'location' ? 'Location' : 'Vente'}
          </span>
        </div>

        {/* Favorite Button */}
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className={`${styles.favoriteButton} ${isFavorite ? styles.active : ''}`}
          aria-label={isFavorite ? 'Retirer des favoris' : 'Ajouter aux favoris'}
        >
          <Heart size={18} />
        </button>
      </div>

      {/* Content */}
      <div className={styles.content}>
        <div className={styles.header}>
          <h3 className={styles.title}>{title}</h3>
          <div className={styles.location}>
            <MapPin />
            <span>{quartier}, {ville}</span>
          </div>
        </div>

        {/* Features */}
        {(pieces || surface || parking !== undefined) && (
          <div className={styles.features}>
            {pieces && (
              <div className={styles.feature}>
                <Bed />
                <span>{pieces} pièces</span>
              </div>
            )}
            {surface && (
              <div className={styles.feature}>
                <Maximize />
                <span>{surface} m²</span>
              </div>
            )}
            {parking && (
              <div className={styles.feature}>
                <Car />
                <span>Parking</span>
              </div>
            )}
          </div>
        )}

        {/* Footer */}
        <div className={styles.footer}>
          <div className={styles.price}>
            <span className={styles.priceAmount}>{price}</span>
            <span className={styles.priceLabel}>{priceLabel}</span>
          </div>
          <Link to={`/propriete/${id}`} className={styles.viewButton}>
            Voir détails
          </Link>
        </div>

        {/* Demarcheur */}
        <div className={styles.demarcheur}>
          <div className={styles.demarcheurAvatar}>
            {demarcheur.name.charAt(0)}
          </div>
          <div className={styles.demarcheurInfo}>
            <div className={styles.demarcheurName}>
              {demarcheur.name}
              {demarcheur.verified && (
                <ShieldCheck size={14} className={styles.verifiedBadge} />
              )}
            </div>
            <div className={styles.demarcheurRole}>Démarcheur vérifié</div>
          </div>
        </div>
      </div>
    </div>
  );
}
