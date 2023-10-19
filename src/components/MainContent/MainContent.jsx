import styles from './MainContent.module.css'
import jsonData from '../../assets/profile.json'
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import email from '../../assets/img/email.png'
import location from '../../assets/img/location.png'
import skills from '../../assets/img/skills.png'
import tel from '../../assets/img/tel.png'
import user from '../../assets/img/user.png'
import one from '../../assets/img/one.png'
import two from '../../assets/img/two.png'
import three from '../../assets/img/three.png'

import ButtonMore from '../ButtonMore/ButtonMore';

function MainContent() {
    return (
        <main>
            <div className={styles.main__div}>
                <aside>
                    <div className={styles.profile}>
                        <span className={styles.profile__divPhoto}>
                            <img src={jsonData.photo} alt="" className={styles.profile__Img} />
                        </span>
                        <div className={styles.profile__Occupation}><h4>{jsonData.occupation}</h4></div>
                        <div className={styles.profile__Medias}>
                            <a href={jsonData.socialMedias.instagram} target='blank'><FaInstagram size={40} /></a>
                            <a href={jsonData.socialMedias.linkedin} target='blank'><FaLinkedin size={40} /></a>
                            <a href={jsonData.socialMedias.github} target='blank'><FaGithub size={40} /></a>
                        </div>
                        <div className={styles.profile__Informations}>
                            <div className={`${styles.profile__Name} ${styles.profile__InfoGeneralStyle}`}>
                                <img className={styles.profile__Icon} src={user} alt="" />
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
                                <img className={styles.profile__IconLocation} src={location} alt="" />
                                <div>
                                    <div className={styles.profile__InfoTitle}>Location: </div>
                                    <div className={styles.profile__InfoP}>{jsonData.location} </div>
                                    <div className={styles.profile__Line}></div>
                                </div>
                            </div>

                            <div className={styles.profile__Skills}>
                                <div className={styles.profile__Title_Skills}>
                                    <img className={styles.profile__Icon} src={skills} alt="" />
                                    <h2 className={styles.profile__InfoP} >Skills:</h2>
                                </div>
                                <ul>
                                    {jsonData.skills.competencias.map((competencia, index) => (
                                        <li key={index} className={styles.profile__InfoTitle}>
                                            {competencia}
                                            <div className={styles.profile__Line}></div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <ButtonMore value="Curriculo completo" />
                        </div>
                    </div>
                    <div className={styles.profile__Techs}>
                        <h2>Técnologias e ferramentas</h2>
                        {jsonData.skills.hardSkills.map((hardSkills, index) => (
                            <div key={index} className={styles.profile__TechsOne}>
                                <div className={styles.profile__TechsHeader}>
                                    <h3 className={styles.profile__InfoP}>{jsonData.skills.hardSkills[index].name}</h3>
                                    <div className={styles.profile__Line}></div>
                                </div>
                                <span className={styles.profile__InfoP}>{jsonData.skills.hardSkills[index].level}</span>
                                <div className={styles.profile__TechsImageAndP}>
                                    <img src={jsonData.skills.hardSkills[index].logo} alt="" />
                                    <p>{jsonData.skills.hardSkills[index].description}</p>
                                </div>
                            </div>
                        ))}
                        <ButtonMore value="Ver mais..." />
                    </div>
                </aside>
                <section className={styles.main__Content}>
                    <div className={styles.about__me}>
                        <h1>Sobre mim</h1>
                        <div className={styles.profile__Line}></div>
                        <p>{jsonData.resume}</p>
                        <p>{jsonData.resume}</p>
                    </div>

                    <div className={styles.about__card}>
                        <div className={styles.about__cardOne}>
                            <div className="styles card__Icon"></div>
                            <img src={one} alt="Simbolos padrão para representar código web" />
                            <h1>Desenvolvendo do inico ao fim</h1>
                            <p>{`It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribut'Content here, content here', making it look like readable English. Many desktop publishing pacage editors now use `}</p>
                        </div>
                        <div className={styles.about__cardTwo}>
                            <div className="styles card__Icon"></div>
                            <img src={two} alt="Folha estilisada UI/UX" />
                            <h1>Foco no melhor para o usuário</h1>
                            <p>{`It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribut'Content here, content here', making it look like readable English. Many desktop publishing pacage editors now use `}</p>
                        </div>
                        <div className={styles.about__cardThree}>
                            <div className="styles card__Icon">{three}</div>
                            <img src={three} alt="Imagem representativa HTML to CSS" />
                            <h1>Com acessibilidade e equidade a todos</h1>
                            <p>{`It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribut'Content here, content here', making it look like readable English. Many desktop publishing pacage editors now use `}</p>
                        </div>
                    </div>

                    <div className={styles.projects}>
                        <h1>Últimos projetos e destaques</h1>
                        <div className={styles.profile__Line}></div>

                        <div>
                            {/* Criar codigo para buscar projetos no GITHUB e com base no nome puxar uma imagem thumb salva localmente.  */}
                            <h2>TITLE PROJECT</h2>
                            <img src="" alt="" />
                            <p>{`It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of istribution of letters, as opp use `}</p>
                        </div>
                        <ButtonMore value="Ver mais..." />
                    </div>
                </section>
            </div>
        </main>
    )
}

export default MainContent