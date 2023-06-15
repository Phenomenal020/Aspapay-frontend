import styles from "./navbar.module.css"
import { RiArrowDropDownLine } from 'react-icons/ri';

const Navbar = () => {
    return (
        <nav className={styles.navWrapper}>

            <div className={styles.left}> AspaPay
            </div>

            <div className={styles.middle}>
                <button className={styles.midBtn}>
                    <a href="#" className={styles.midBtnHref}>developer tools
                    </a><RiArrowDropDownLine size={24} />
                    <span></span>
                </button>
                <button className={styles.midBtn}>
                    <a href="#" className={styles.midBtnHref}>support</a><RiArrowDropDownLine size={24} />
                    <span></span>
                </button>
            </div>

            <div className={styles.right}>
                <button className={styles.loginBtn}><a href="#" className={styles.loginRef}>login</a></button>
                <button className={styles.signUpBtn}><a href="#" className={styles.signUpRef}>sign up</a></button>
            </div>
        </nav>
    )
}

export default Navbar