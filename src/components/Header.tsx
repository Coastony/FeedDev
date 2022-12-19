import styles from './Header.module.css'

import igniteLogo from '../assets/ignite-logo.svg';

export function Header() {
    return (
        <header className={styles.header}>
            <h1><span>Feed</span>Dev</h1>
        </header>
    );
}