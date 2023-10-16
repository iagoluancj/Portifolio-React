import styles from './MainContent.module.css'
import jsonData from '../../assets/profile.json'
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

function MainContent() {
    return (
        <main>
            <div className={styles.main__div}>
                <aside>
                    {/* <img className={styles.profile__Banner} src="https://images.squarespace-cdn.com/content/v1/5e949a92e17d55230cd1d44f/daafd556-112f-4fce-9e15-dd16858cbcad/StarrySur_1x1.png?format=1500w" alt="" /> */}
                    <div className={styles.profile}>
                        <span className={styles.profile__divPhoto}>
                            <img src={jsonData.photo} alt="" className={styles.profile__Img} />
                        </span>
                        <div className={styles.profile__Occupation}>{jsonData.occupation}</div>
                        <div className={styles.profile__Medias}>
                            <a href=""><FaInstagram size={40}/></a>
                            <a href=""><FaLinkedin size={40}/></a>
                            <a href=""><FaGithub size={40}/></a>
                        </div>
                        <div className={styles.profile__Informations}>
                            <div className={styles.profile__Name}>{jsonData.name}</div>
                            <div className={styles.profile__Info_Phone}>{jsonData.phone}</div>
                            <div className={styles.profile__Info_Email}>{jsonData.email}</div>
                            <div className={styles.profile__Info_Location}>{jsonData.location}</div>

                            <div className={styles.profile__Skills}>
                                <ul>
                                    {jsonData.skills.competencias.map((competencia, index) => (
                                        <li key={index}>{competencia}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </aside>
                <section>seção principal</section>
            </div>
        </main>
    )
}

export default MainContent