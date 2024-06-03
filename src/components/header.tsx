import styles from './header.module.css'
import ingniteLogo from '../assets/ignite-logo.svg';

export function Header(){
    return(
        <header className={styles.header}>
         <img src={ingniteLogo} alt="logotipo" />
        </header>
    );
}