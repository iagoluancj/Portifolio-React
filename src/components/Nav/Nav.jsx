import styles from './Nav.module.css'

import { IoMenu } from 'react-icons/io5';


function Nav() {
    return (
        <nav>
            <div className={styles.nav}>
                <a href="#inicio">
                    <div className={styles.nav__Logo}>
                        <div className={styles.nav__ImgLogo}></div>
                        <div className={styles.nav__ImgNameDescribe}>
                            <span className={styles.nav_describeOne}>Iago Jesus</span>
                            <span className={styles.nav_describeTwo}>UX Engineer</span>
                        </div>
                    </div>
                </a>
                <div className={styles.nav__Options}>
                    <div className={styles.nav__OptionsSDiv}>
                        <a href="#Project" className={styles.nav__Options_Button}>Projects</a>
                        <a href="#Techs" className={styles.nav__Options_Button}>Tech&apos;s</a>
                        <a href="#Contact" className={styles.nav__Options_Button}>Contact</a>
                        <a href="#About" className={styles.nav__Options_Button}>About me</a>
                    </div>
                    <div id={styles.nav__menuBurguer} onClick={openMenu()}><IoMenu size={40} /></div>
                    <div className={`${styles.acessibilityFather}`}>
                        <div className={styles.optionsAcessibility}>
                            <span><a href="google.com" target='_blank'>Screen reader</a></span>
                            <span><a href="google.com" target='_blank'>Magnifying glass</a></span>
                            <span><a href="google.com" target='_blank'>Loading...</a></span>
                        </div>
                        <div className={styles.acessibility}></div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

function openMenu() {
    // if (nav__menuBurguer.style.display == 'flex') {
    //     nav__menuBurguer.style.display = 'none'
    // } else {
    //     nav__menuBurguer.style.display = 'flex'
    // }
}

export default Nav
