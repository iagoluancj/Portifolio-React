import styles from './Nav.module.css'
function Nav() {
    return (
    <nav>    
        <div className={styles.nav}>
            <div className={styles.nav__Logo}>
                <div className={styles.nav__ImgLogo}></div>
                <div className={styles.nav__ImgNameDescribe}>
                    <span className={styles.nav_describeOne}>Iago Jesus</span>
                    <span className={styles.nav_describeTwo}>UX Engineer</span>
                </div>
            </div>
            
            <div className={styles.nav__Options}>
                <div>
                    <a href="" className={styles.nav__Options_Button}>Projects</a>
                    <a href="" className={styles.nav__Options_Button}>Techs</a>
                    <a href="" className={styles.nav__Options_Button}>Contact</a>
                    <a href="" className={styles.nav__Options_Button}>About me</a>
                </div>
                <div className={`${styles.nav__Options_Button} ${styles.acessibility}`}></div>
            </div>
        </div>
    </nav>    
    )
}

export default Nav
