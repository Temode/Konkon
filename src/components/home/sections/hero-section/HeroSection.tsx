import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin, Home, CheckCircle, Building2, Users, ShieldCheck } from 'lucide-react';
import './HeroSection.module.css';

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
    <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-32">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-800 to-dark-900" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full text-primary-500 text-sm font-medium">
            <CheckCircle className="w-4 h-4" />
            Plateforme immobilière #1 en Guinée
          </div>

          {/* Title */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
            Trouvez votre logement idéal{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-accent-cyan">
              en Guinée
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Konkon connecte locataires, propriétaires et démarcheurs vérifiés pour une expérience immobilière simple, sécurisée et transparente.
          </p>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="bg-dark-800/50 backdrop-blur-sm p-3 rounded-2xl border border-white/[0.05] shadow-2xl">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 flex items-center gap-3 px-4 py-3 bg-dark-700 rounded-xl">
                <MapPin className="w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Quartier, commune ou ville..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 bg-transparent text-white placeholder:text-gray-500 focus:outline-none"
                />
              </div>
              <select
                value={searchType}
                onChange={(e) => setSearchType(e.target.value as 'location' | 'vente')}
                className="px-4 py-3 bg-dark-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-primary-500 border border-white/[0.05]"
              >
                <option value="location">Location</option>
                <option value="vente">Achat</option>
              </select>
              <button
                type="submit"
                className="px-8 py-3 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-500 text-white rounded-xl font-medium transition-all hover:shadow-lg hover:shadow-primary-500/20 flex items-center justify-center gap-2"
              >
                <Search className="w-5 h-5" />
                <span className="hidden sm:inline">Rechercher</span>
              </button>
            </div>
          </form>

          {/* Popular Quartiers */}
          <div className="flex flex-wrap justify-center gap-3 pt-4">
            <span className="text-gray-400 text-sm">Quartiers populaires :</span>
            {quartiers.map((quartier) => (
              <button
                key={quartier}
                onClick={() => {
                  setSearchQuery(quartier);
                }}
                className="px-4 py-1.5 bg-dark-800 hover:bg-dark-700 border border-white/[0.05] rounded-lg text-gray-300 hover:text-white text-sm transition-colors"
              >
                {quartier}
              </button>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-12">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-3">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500/20 to-primary-600/20 border border-primary-500/20 flex items-center justify-center">
                  <stat.icon className="w-7 h-7 text-primary-500" />
                </div>
                <div className="text-center">
                  <p className="font-display font-bold text-3xl text-white mb-1">{stat.value}</p>
                  <p className="text-sm text-gray-400">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
