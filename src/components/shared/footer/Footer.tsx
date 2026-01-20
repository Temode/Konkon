import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Linkedin, MapPin, Mail, Phone, Heart } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const platformLinks = [
    { label: 'Rechercher un logement', href: '/recherche' },
    { label: 'Devenir démarcheur', href: '/devenir-demarcheur' },
    { label: 'Publier une annonce', href: '/publier-annonce' },
    { label: 'Comment ça marche', href: '/comment-ca-marche' },
  ];

  const companyLinks = [
    { label: 'À propos', href: '/a-propos' },
    { label: 'Notre équipe', href: '/equipe' },
    { label: 'Carrières', href: '/carrieres' },
    { label: 'Blog', href: '/blog' },
  ];

  const supportLinks = [
    { label: 'Centre d\'aide', href: '/aide' },
    { label: 'Contactez-nous', href: '/contact' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Signaler un problème', href: '/signaler' },
  ];

  const legalLinks = [
    { label: 'Conditions d\'utilisation', href: '/conditions' },
    { label: 'Politique de confidentialité', href: '/confidentialite' },
    { label: 'Mentions légales', href: '/mentions-legales' },
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com/konkon', label: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com/konkon', label: 'Instagram' },
    { icon: Twitter, href: 'https://twitter.com/konkon', label: 'Twitter' },
    { icon: Linkedin, href: 'https://linkedin.com/company/konkon', label: 'LinkedIn' },
  ];

  return (
    <footer className={styles.footer}>
      {/* Top Section */}
      <div className={styles.topSection}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {/* Brand Column */}
            <div className={styles.brandColumn}>
              <Link to="/" className={styles.logo}>
                <div className={styles.logoIcon}>
                  <span>K</span>
                </div>
                <span className={styles.logoText}>Konkon</span>
              </Link>

              <p className={styles.brandDescription}>
                La plateforme immobilière #1 en Guinée. Trouvez votre logement idéal en toute confiance avec des démarcheurs vérifiés.
              </p>

              <div className={styles.badge}>
                <Heart size={14} fill="currentColor" />
                Fabriqué en Guinée
              </div>

              {/* Social Links */}
              <div className={styles.socialLinks}>
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                    aria-label={social.label}
                  >
                    <social.icon />
                  </a>
                ))}
              </div>
            </div>

            {/* Plateforme */}
            <div className={styles.linksColumn}>
              <h3 className={styles.columnTitle}>Plateforme</h3>
              <ul className={styles.linksList}>
                {platformLinks.map((link) => (
                  <li key={link.label} className={styles.linkItem}>
                    <Link to={link.href} className={styles.link}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Entreprise */}
            <div className={styles.linksColumn}>
              <h3 className={styles.columnTitle}>Entreprise</h3>
              <ul className={styles.linksList}>
                {companyLinks.map((link) => (
                  <li key={link.label} className={styles.linkItem}>
                    <Link to={link.href} className={styles.link}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div className={styles.linksColumn}>
              <h3 className={styles.columnTitle}>Support</h3>
              <ul className={styles.linksList}>
                {supportLinks.map((link) => (
                  <li key={link.label} className={styles.linkItem}>
                    <Link to={link.href} className={styles.link}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className={styles.linksColumn}>
              <h3 className={styles.columnTitle}>Contact</h3>
              <ul className={styles.linksList}>
                <li className={styles.linkItem}>
                  <a href="mailto:contact@konkon.gn" className={styles.link}>
                    <Mail size={14} />
                    contact@konkon.gn
                  </a>
                </li>
                <li className={styles.linkItem}>
                  <a href="tel:+224622000000" className={styles.link}>
                    <Phone size={14} />
                    +224 622 00 00 00
                  </a>
                </li>
                <li className={styles.linkItem}>
                  <span className={styles.link}>
                    <MapPin size={14} />
                    Conakry, Guinée
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className={styles.bottomSection}>
        <div className={styles.container}>
          <div className={styles.bottomContent}>
            <p className={styles.copyright}>
              © {currentYear}{' '}
              <Link to="/" className={styles.copyrightLink}>
                Konkon
              </Link>
              . Tous droits réservés.
            </p>

            <div className={styles.bottomLinks}>
              {legalLinks.map((link) => (
                <Link key={link.label} to={link.href} className={styles.bottomLink}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
