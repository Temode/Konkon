import { Link } from 'react-router-dom';
import { ArrowRight, Star, Home } from 'lucide-react';
import PropertyCard from '../../../ui/property-card';
import styles from './FeaturedProperties.module.css';

// Données temporaires pour la démonstration
const featuredProperties = [
  {
    id: '1',
    title: 'Villa moderne avec piscine à Kipé',
    type: 'Villa',
    transactionType: 'location' as const,
    price: '5 500 000 GNF',
    priceLabel: '/mois',
    quartier: 'Kipé',
    ville: 'Conakry',
    pieces: 5,
    surface: 250,
    parking: true,
    imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
    demarcheur: {
      name: 'Mamadou Diallo',
      verified: true,
    },
  },
  {
    id: '2',
    title: 'Appartement neuf 3 pièces à Nongo',
    type: 'Appartement',
    transactionType: 'location' as const,
    price: '3 200 000 GNF',
    priceLabel: '/mois',
    quartier: 'Nongo',
    ville: 'Conakry',
    pieces: 3,
    surface: 120,
    parking: true,
    imageUrl: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop',
    demarcheur: {
      name: 'Aissatou Bah',
      verified: true,
    },
  },
  {
    id: '3',
    title: 'Duplex standing à Lambanyi',
    type: 'Duplex',
    transactionType: 'vente' as const,
    price: '450 000 000 GNF',
    priceLabel: '',
    quartier: 'Lambanyi',
    ville: 'Conakry',
    pieces: 6,
    surface: 300,
    parking: true,
    imageUrl: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop',
    demarcheur: {
      name: 'Ibrahim Souaré',
      verified: true,
    },
  },
];

export default function FeaturedProperties() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.headerContent}>
            <div className={styles.badge}>
              <Star size={16} />
              Annonces vedettes
            </div>
            <h2 className={styles.title}>Propriétés populaires</h2>
            <p className={styles.description}>
              Découvrez notre sélection de biens immobiliers les plus recherchés à Conakry
            </p>
          </div>
          <Link to="/recherche" className={styles.viewAllButton}>
            Voir toutes les annonces
            <ArrowRight size={18} />
          </Link>
        </div>

        {/* Grid */}
        {featuredProperties.length > 0 ? (
          <div className={styles.grid}>
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} {...property} />
            ))}
          </div>
        ) : (
          <div className={styles.emptyState}>
            <Home className={styles.emptyStateIcon} />
            <h3 className={styles.emptyStateTitle}>Aucune annonce disponible</h3>
            <p className={styles.emptyStateDescription}>
              Les annonces vedettes apparaîtront ici prochainement
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
