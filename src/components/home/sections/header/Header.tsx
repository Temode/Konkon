import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search } from 'lucide-react';
import styles from './Header.module.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.headerContent}>
          {/* Logo */}
          <Link to="/" className={styles.logo}>
            <div className={styles.logoIcon}>
              <span>K</span>
            </div>
            <span className={styles.logoText}>Konkon</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className={styles.desktopNav}>
            <Link to="/recherche" className={styles.navLink}>
              <Search size={16} />
              Rechercher
            </Link>
            <Link to="/comment-ca-marche" className={styles.navLink}>
              Comment ça marche
            </Link>
            <Link to="/devenir-demarcheur" className={styles.navLink}>
              Devenir démarcheur
            </Link>
          </nav>

          {/* Auth Buttons */}
          <div className={styles.authButtons}>
            <Link to="/connexion" className={styles.loginButton}>
              Connexion
            </Link>
            <Link to="/inscription" className={styles.signupButton}>
              Inscription
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={styles.mobileMenuButton}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={styles.mobileMenu}>
            <nav className={styles.mobileNav}>
              <Link
                to="/recherche"
                className={styles.mobileNavLink}
                onClick={() => setIsMenuOpen(false)}
              >
                <Search size={16} />
                Rechercher
              </Link>
              <Link
                to="/comment-ca-marche"
                className={styles.mobileNavLink}
                onClick={() => setIsMenuOpen(false)}
              >
                Comment ça marche
              </Link>
              <Link
                to="/devenir-demarcheur"
                className={styles.mobileNavLink}
                onClick={() => setIsMenuOpen(false)}
              >
                Devenir démarcheur
              </Link>
              <div className={styles.mobileAuthButtons}>
                <Link
                  to="/connexion"
                  className={styles.mobileLoginButton}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Connexion
                </Link>
                <Link
                  to="/inscription"
                  className={styles.mobileSignupButton}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Inscription
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
