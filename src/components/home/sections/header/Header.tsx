import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, User } from 'lucide-react';
import './Header.module.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark-800/80 backdrop-blur-md border-b border-white/[0.05]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center">
              <span className="text-white font-bold text-xl">K</span>
            </div>
            <span className="font-display text-2xl font-bold text-white group-hover:text-primary-500 transition-colors">
              Konkon
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/recherche"
              className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"
            >
              <Search className="w-4 h-4" />
              Rechercher
            </Link>
            <Link
              to="/comment-ca-marche"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Comment ça marche
            </Link>
            <Link
              to="/devenir-demarcheur"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Devenir démarcheur
            </Link>
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/connexion"
              className="px-4 py-2 text-gray-300 hover:text-white transition-colors"
            >
              Connexion
            </Link>
            <Link
              to="/inscription"
              className="px-6 py-2.5 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-500 text-white rounded-xl font-medium transition-all hover:shadow-lg hover:shadow-primary-500/20"
            >
              Inscription
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-white"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-white/[0.05]">
            <nav className="flex flex-col gap-4">
              <Link
                to="/recherche"
                className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <Search className="w-4 h-4" />
                Rechercher
              </Link>
              <Link
                to="/comment-ca-marche"
                className="text-gray-300 hover:text-white transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Comment ça marche
              </Link>
              <Link
                to="/devenir-demarcheur"
                className="text-gray-300 hover:text-white transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Devenir démarcheur
              </Link>
              <div className="border-t border-white/[0.05] pt-4 mt-2 flex flex-col gap-3">
                <Link
                  to="/connexion"
                  className="px-4 py-2.5 text-center text-gray-300 hover:text-white border border-white/[0.1] rounded-xl transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Connexion
                </Link>
                <Link
                  to="/inscription"
                  className="px-4 py-2.5 text-center bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl font-medium"
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
