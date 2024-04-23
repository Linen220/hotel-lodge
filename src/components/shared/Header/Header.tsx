import styles from './Header.module.css'

export const Header = () => {
  return (
    <header className={`${styles.header} container`}>
      <div className={styles.header__logo}>
        <a className={styles.header__icon} href="#" >
          <img className={styles.logo} src="./lodgelogo.png" alt="logo de Tacna Lodge & Spa" />
        </a>
      </div>
      <nav>
        <ul className={styles.header__menu}>
          <li><a className={styles.header__link} href="#">Inicio</a></li>
          <li><a className={styles.header__link} href="#">Paquetes</a></li>
          <li><a className={styles.header__link} href="#">Reservaciones</a></li>
          <li><a className={styles.header__link} href="#">Galerias</a></li>
          <li><a className={styles.header__link} href="#">Localización</a></li>
        </ul>
      </nav>
    </header>
  )
}
