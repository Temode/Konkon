import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, ArrowLeft } from 'lucide-react';
import styles from './Login.module.css';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement authentication logic
    console.log('Login:', formData);
    // navigate('/dashboard');
  };

  const handleGoogleLogin = () => {
    // TODO: Implement Google OAuth
    console.log('Google login');
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

      {/* Login Card */}
      <div className={styles.card}>
        {/* Header */}
        <div className={styles.header}>
          <Link to="/" className={styles.logo}>
            <div className={styles.logoIcon}>
              <span>K</span>
            </div>
            <span className={styles.logoText}>Konkon</span>
          </Link>

          <h1 className={styles.title}>Bon retour !</h1>
          <p className={styles.subtitle}>
            Connectez-vous pour accéder à votre compte
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className={styles.form}>
          {/* Email */}
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

          {/* Password */}
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

          {/* Remember & Forgot */}
          <div className={styles.row}>
            <div className={styles.checkbox}>
              <input
                type="checkbox"
                id="remember"
                checked={formData.remember}
                onChange={(e) =>
                  setFormData({ ...formData, remember: e.target.checked })
                }
              />
              <label htmlFor="remember">Se souvenir de moi</label>
            </div>

            <Link to="/mot-de-passe-oublie" className={styles.forgotLink}>
              Mot de passe oublié ?
            </Link>
          </div>

          {/* Submit Button */}
          <button type="submit" className={styles.submitButton}>
            Se connecter
          </button>
        </form>

        {/* Divider */}
        <div className={styles.divider}>
          <span className={styles.dividerText}>Ou continuer avec</span>
        </div>

        {/* Google Login */}
        <button onClick={handleGoogleLogin} className={styles.googleButton}>
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

        {/* Footer */}
        <div className={styles.footer}>
          <p className={styles.footerText}>
            Vous n'avez pas de compte ?{' '}
            <Link to="/inscription" className={styles.footerLink}>
              Inscrivez-vous
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
