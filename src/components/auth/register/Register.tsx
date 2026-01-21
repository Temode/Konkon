import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, User, Phone, ArrowLeft, Home, Briefcase, Building } from 'lucide-react';
import styles from './Register.module.css';

type UserRole = 'locataire' | 'demarcheur' | 'proprietaire';

export default function Register() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    role: '' as UserRole | '',
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false,
  });

  const roles = [
    {
      value: 'locataire' as const,
      icon: Home,
      title: 'Locataire',
      description: 'Je cherche un logement à louer ou acheter',
    },
    {
      value: 'demarcheur' as const,
      icon: Briefcase,
      title: 'Démarcheur',
      description: 'Je suis agent immobilier et je gère des biens',
    },
    {
      value: 'proprietaire' as const,
      icon: Building,
      title: 'Propriétaire',
      description: 'Je possède des biens à louer ou vendre',
    },
  ];

  const handleRoleSelect = (role: UserRole) => {
    setFormData({ ...formData, role });
  };

  const handleNextStep = () => {
    if (step === 1 && formData.role) {
      setStep(2);
    }
  };

  const handleBackStep = () => {
    if (step === 2) {
      setStep(1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Les mots de passe ne correspondent pas');
      return;
    }
    if (!formData.acceptTerms) {
      alert('Veuillez accepter les conditions d\'utilisation');
      return;
    }
    // TODO: Implement registration logic
    console.log('Register:', formData);
    // navigate('/choisir-profil');
  };

  const handleGoogleRegister = () => {
    // TODO: Implement Google OAuth
    console.log('Google register');
  };

  return (
    <div className={styles.container}>
      {/* Decorative Background */}
      <div className={styles.decorCircle1} />
      <div className={styles.decorCircle2} />

      {/* Back to Home Link */}
      <Link to="/" className={styles.backLink}>
        <ArrowLeft size={16} />
        Retour à l'accueil
      </Link>

      {/* Register Card */}
      <div className={styles.card}>
        {/* Header */}
        <div className={styles.header}>
          <Link to="/" className={styles.logo}>
            <div className={styles.logoIcon}>
              <span>K</span>
            </div>
            <span className={styles.logoText}>Konkon</span>
          </Link>

          <h1 className={styles.title}>Créer un compte</h1>
          <p className={styles.subtitle}>
            {step === 1
              ? 'Choisissez votre profil pour commencer'
              : 'Complétez vos informations'}
          </p>
        </div>

        {/* Step Indicator */}
        <div className={styles.stepIndicator}>
          <div className={`${styles.stepDot} ${step >= 1 ? styles.active : ''}`} />
          <div className={`${styles.stepDot} ${step >= 2 ? styles.active : ''}`} />
        </div>

        {/* Step 1: Role Selection */}
        {step === 1 && (
          <>
            <div className={styles.roleGrid}>
              {roles.map((role) => (
                <div
                  key={role.value}
                  className={`${styles.roleCard} ${
                    formData.role === role.value ? styles.selected : ''
                  }`}
                  onClick={() => handleRoleSelect(role.value)}
                >
                  <div className={styles.roleIcon}>
                    <role.icon size={24} />
                  </div>
                  <h3 className={styles.roleTitle}>{role.title}</h3>
                  <p className={styles.roleDescription}>{role.description}</p>
                </div>
              ))}
            </div>

            <button
              onClick={handleNextStep}
              className={styles.submitButton}
              disabled={!formData.role}
            >
              Continuer
            </button>

            {/* Divider */}
            <div className={styles.divider}>
              <span className={styles.dividerText}>Ou continuer avec</span>
            </div>

            {/* Google Register */}
            <button onClick={handleGoogleRegister} className={styles.googleButton}>
              <svg width="18" height="18" viewBox="0 0 18 18">
                <path
                  fill="#4285F4"
                  d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z"
                />
                <path
                  fill="#34A853"
                  d="M9.003 18c2.43 0 4.467-.806 5.956-2.18L12.05 13.56c-.806.54-1.836.86-3.047.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332C2.438 15.983 5.482 18 9.003 18z"
                />
                <path
                  fill="#FBBC05"
                  d="M3.964 10.71c-.18-.54-.282-1.117-.282-1.71 0-.593.102-1.17.282-1.71V4.958H.957C.347 6.173 0 7.55 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z"
                />
                <path
                  fill="#EA4335"
                  d="M9.003 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.464.891 11.426 0 9.003 0 5.482 0 2.438 2.017.957 4.958L3.964 7.29c.708-2.127 2.692-3.71 5.036-3.71z"
                />
              </svg>
              Continuer avec Google
            </button>
          </>
        )}

        {/* Step 2: Personal Information */}
        {step === 2 && (
          <form onSubmit={handleSubmit} className={styles.form}>
            {/* Full Name */}
            <div className={styles.formGroup}>
              <label htmlFor="fullName" className={styles.label}>
                Nom complet
              </label>
              <div className={styles.inputWrapper}>
                <input
                  type="text"
                  id="fullName"
                  placeholder="Mamadou Diallo"
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                  className={styles.input}
                  required
                />
                <User size={18} className={styles.inputIcon} />
              </div>
            </div>

            {/* Email & Phone */}
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>
                  Adresse email
                </label>
                <div className={styles.inputWrapper}>
                  <input
                    type="email"
                    id="email"
                    placeholder="nom@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className={styles.input}
                    required
                  />
                  <Mail size={18} className={styles.inputIcon} />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="phone" className={styles.label}>
                  Téléphone
                </label>
                <div className={styles.inputWrapper}>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="+224 622 00 00 00"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className={styles.input}
                    required
                  />
                  <Phone size={18} className={styles.inputIcon} />
                </div>
              </div>
            </div>

            {/* Password & Confirm Password */}
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="password" className={styles.label}>
                  Mot de passe
                </label>
                <div className={styles.inputWrapper}>
                  <input
                    type="password"
                    id="password"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                    className={styles.input}
                    required
                  />
                  <Lock size={18} className={styles.inputIcon} />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="confirmPassword" className={styles.label}>
                  Confirmer le mot de passe
                </label>
                <div className={styles.inputWrapper}>
                  <input
                    type="password"
                    id="confirmPassword"
                    placeholder="••••••••"
                    value={formData.confirmPassword}
                    onChange={(e) =>
                      setFormData({ ...formData, confirmPassword: e.target.value })
                    }
                    className={styles.input}
                    required
                  />
                  <Lock size={18} className={styles.inputIcon} />
                </div>
              </div>
            </div>

            {/* Terms */}
            <div className={styles.terms}>
              <input
                type="checkbox"
                id="terms"
                checked={formData.acceptTerms}
                onChange={(e) =>
                  setFormData({ ...formData, acceptTerms: e.target.checked })
                }
                required
              />
              <label htmlFor="terms">
                J'accepte les{' '}
                <Link to="/conditions">conditions d'utilisation</Link> et la{' '}
                <Link to="/confidentialite">politique de confidentialité</Link> de
                Konkon
              </label>
            </div>

            {/* Buttons */}
            <div className={styles.buttonGroup}>
              <button
                type="button"
                onClick={handleBackStep}
                className={styles.backButton}
              >
                Retour
              </button>
              <button type="submit" className={styles.submitButton}>
                Créer mon compte
              </button>
            </div>
          </form>
        )}

        {/* Footer */}
        <div className={styles.footer}>
          <p className={styles.footerText}>
            Vous avez déjà un compte ?{' '}
            <Link to="/connexion" className={styles.footerLink}>
              Connectez-vous
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
