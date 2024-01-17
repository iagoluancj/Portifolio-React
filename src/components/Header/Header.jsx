import styles from './Header.module.css'

function Header() {
    return (
        <header>
            <div id="inicio" className={styles.header__Content}>
                <h1 className={styles.header__Content_h1}>Who am I? My projects? Let&apos;s see!</h1>
                <p>This is my portfolio, where I share a bit about myself, my projects, and skills. I hope you&apos;re as excited as I am :{')'}</p>
            </div>
        </header>
    )
}

export default Header
