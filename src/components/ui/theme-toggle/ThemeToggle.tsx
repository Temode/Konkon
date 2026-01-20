import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../../context/theme';
import styles from './ThemeToggle.module.css';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={styles.toggleButton}
      aria-label={theme === 'dark' ? 'Activer le mode clair' : 'Activer le mode sombre'}
    >
      <span className={`${styles.iconWrapper} ${theme === 'dark' ? styles.active : ''}`}>
        <Moon size={18} />
      </span>
      <span className={`${styles.iconWrapper} ${theme === 'light' ? styles.active : ''}`}>
        <Sun size={18} />
      </span>
      <span className={`${styles.slider} ${theme === 'light' ? styles.sliderLight : ''}`} />
    </button>
  );
}
