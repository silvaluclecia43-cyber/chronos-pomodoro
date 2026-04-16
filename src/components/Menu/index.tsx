import { HistoryIcon, HomeIcon, LanguagesIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './styles.module.css';

export function Menu() {
  return (
    <>
      <nav className={styles.menu}>
        <a className={styles.menuLink} href='qualquer'>
          <HomeIcon />
        </a>
        <a className={styles.menuLink} href='qualquer'>
          <HistoryIcon />
        </a>
          <a className={styles.menuLink} href='qualquer'>
          <SettingsIcon />
        </a>
          <a className={styles.menuLink} href='qualquer'>
          <SunIcon />
        </a>
          <a className={styles.menuLink} href='qualquer'>
          <LanguagesIcon/>
        </a>
      </nav>
    </>
  );
}
