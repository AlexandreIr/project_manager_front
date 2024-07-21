import { useState } from 'react'
import  styles from '../Navbar.module.css';
import avatar from '../assets/avatar.png'
import out from '../assets/sair.png'


function Navbar(props) {
    const [isActive, setIsActive] = useState(false);
    const toggleActiveClass = () => {
        setIsActive(!isActive);
    };
    const removeActive = () => {
        setIsActive(false)
    }
   

    return (
    <div className="App">
        <header className="App-header">
        <nav className={`${styles.navbar}`}>
            <a href='#home' className={`${styles.navLink} ${styles.headLine}`}>{props.user}</a>
            <a href='#home' className={`${styles.logo} ${styles.headLine}`}>Project Manager </a>
                <ul className={`${styles.navMenu} ${isActive ? styles.active : ''}`}>
                    <li onClick={removeActive}>
                        <a href='#home' className={`${styles.navLink}`}>
                            <span className={styles.imageText}>Meu Perfil</span><img src={avatar} className={`${styles.avatar}`} alt="React logo"/>
                        </a>
                    </li>
                    <li>
                        <a href='#home' className={`${styles.navLink}`}>
                            <span className={styles.imageText}>Logout</span> <img src={out} className={`${styles.avatar}`} alt="React logo"/>
                        </a>
                    </li>
                    
                </ul>
                <div className={`${styles.hamburger} ${isActive ? styles.active : ''}`}  onClick={toggleActiveClass}>
                    <span className={`${styles.bar}`}></span>
                    <span className={`${styles.bar}`}></span>
                    <span className={`${styles.bar}`}></span>
                </div>
        </nav>
        </header>
    </div>
    );
}
export default Navbar;