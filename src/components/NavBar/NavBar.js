import styles from './NavBar.module.scss';
import 'font-awesome/css/font-awesome.min.css';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
    <nav className={styles.navBar}>
        <div className={styles.navWrapper}>
            <div>
                <a href = '/'>
                    <span className='fa fa-th-list'></span>
                </a>
            </div>
            <div>
                <NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/">Home</NavLink>
                <NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/favourite">Favourite</NavLink>
                <NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/about">About</NavLink>
            </div>
        </div>
    </nav>
    )
}

export default NavBar