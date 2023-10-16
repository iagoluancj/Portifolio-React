import styles from './MainContent.module.css'
import jsonData from '../../assets/profile.json'
import { FaInstagram, FaGithub, FaLinkedin, FaPhone, FaUser} from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { FaMapLocationDot } from 'react-icons/fa6';
import email from '../../assets/img/email.png'
import location from '../../assets/img/location.png'
import skills from '../../assets/img/skills.png'
import tel from '../../assets/img/tel.png'


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
                            <div className={`${styles.profile__Name} ${styles.profile__InfoGeneralStyle}`}>
                                <img className={styles.profile__Icon} src={email} alt="" />
                                <div>
                                    <div className={styles.profile__InfoTitle}>Nome:</div>
                                    <div className={styles.profile__InfoP}>{jsonData.name}</div>
                                    <div className={styles.profile__Line}></div>
                                </div>
                            </div>
                            <div className={styles.profile__InfoGeneralStyle}>
                                <img className={styles.profile__Icon} src={tel} alt="" />
                                <div>
                                    <div className={styles.profile__InfoTitle}>Telefone: </div>
                                    <div className={styles.profile__InfoP}>{jsonData.phone}</div>
                                    <div className={styles.profile__Line}></div>
                                </div>
                            </div>
                            <div className={styles.profile__InfoGeneralStyle}>
                                <img className={styles.profile__Icon} src={email} alt="" />
                                <div>
                                    <div className={styles.profile__InfoTitle}>Email: </div>
                                    <div className={styles.profile__InfoP}>{jsonData.email} </div>
                                    <div className={styles.profile__Line}></div>
                                </div>
                            </div>
                            <div className={styles.profile__InfoGeneralStyle}>
                                <img className={styles.profile__Icon} src={location} alt="" />
                                <div>
                                    <div className={styles.profile__InfoTitle}>Location: </div>
                                    <div className={styles.profile__InfoP}>{jsonData.location} </div>
                                    <div className={styles.profile__Line}></div>
                                </div>
                            </div>

                            <div className={styles.profile__Skills}>
                                <span>Skills:</span>
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