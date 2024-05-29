import React from 'react';
import styles from './Nav.module.css';
import { Link } from 'react-router-dom';
import logo from '../images/logo.svg';
import calculation from '../images/calculation.svg';
import measering from '../images/measering.svg';

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="Logo" className={styles.logo} />
      </div>
      <ul className={styles.navList}>
        <li><Link to="/Services" className={styles.navLink}>Сервис</Link></li>
        <li><Link to="/Products" className={styles.navLink}>Продукты</Link></li>
        <li><Link to="/AboutUs" className={styles.navLink}>О компании</Link></li>
        <li><Link to="/Portfolio" className={styles.navLink}>Портфолио</Link></li>
        <li><Link to="/FAQ" className={styles.navLink}>FAQ</Link></li>
        <li><Link to="/Contacts" className={styles.navLink}>Контакты</Link></li>
      </ul>
      <div className={styles.containerbtn}>
        <Link to="/make-request" className={`${styles.btn} ${styles.requestbtn}`}>
          <img src={measering} alt="Make Request" className={styles.icon} /> Сделать запрос
        </Link>
        <Link to="/calculation" className={`${styles.btn} ${styles.calculationbtn}`}>
          <img src={calculation} alt="Calculation" className={styles.icon} /> Калькулятор
        </Link>
      </div>
    </nav>
  );
};

export default Nav;