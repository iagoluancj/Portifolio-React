import styles from './Header.module.css'

function Header() {
    return (
        <header>
            <div id="inicio" className={styles.header__Content}>
                <h1 className={styles.header__Content_h1}>Quem sou eu? Meus projetos? Vamos ver!</h1>
                <p>Este é o meu portfólio, onde compartilho um pouco sobre mim, meus projetos e habilidades. Espero que você esteja tão animado quanto eu :{')'}</p>
            </div>
        </header>
    )
}

export default Header
