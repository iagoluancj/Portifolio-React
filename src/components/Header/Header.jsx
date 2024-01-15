import styles from './Header.module.css'

function Header() {
    return (
        <header>
            <div id="inicio" className={styles.header__Content}>
                <h1 className={styles.header__Content_h1}>Quem sou eu? My projects? bora ver!</h1>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using</p>
            </div>
        </header>
    )
}

export default Header
