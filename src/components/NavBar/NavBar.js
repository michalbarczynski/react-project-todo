import styles from './NavBar.module.scss';
import 'font-awesome/css/font-awesome.min.css';

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
                <a href='/'>Home</a>
                <a href='/about'>About</a>
                <a href='/favourite'>Favourite</a>
            </div>
        </div>
    </nav>
    )
}

export default NavBar