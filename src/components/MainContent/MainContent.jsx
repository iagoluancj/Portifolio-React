import styles from './MainContent.module.css'
import jsonData from '../../assets/profile.json'

import { FaInstagram, FaGithub, FaLinkedin, FaFigma, FaAws, FaReact, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { PiFileSql } from "react-icons/pi";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTypescript } from "react-icons/si";


import email from '../../assets/img/emailWhite.png'
import location from '../../assets/img/locationWhite.png'
import skills from '../../assets/img/skillsWhite.png'
import tel from '../../assets/img/callWhite.png'
import user from '../../assets/img/userWhite.png'
import { IoLogoJavascript } from "react-icons/io5";

import { useState } from 'react';

import ButtonMore from '../ButtonMore/ButtonMore';
import Section from './section/Section';

function MainContent() {
    const [techs, setTechs] = useState([
        1, 2, 3, 4, 5
    ])
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    function handleCreateNewTech() {
        //essa linha impede que o coportamento padrão do HTML seja executado (abrir em uma nova aba, diverge do SPA)
        if (techs.length >= jsonData.skills.hardSkills.length) {
            setIsButtonDisabled(true);
        }
        setTechs([...techs, techs.length + 1])
    }

    const iconMap = {
        'JavaScript': <IoLogoJavascript size={100} />,
        'Figma': <FaFigma size={100}/>,
        'AWS DevOps': <FaAws size={100} />,
        'Typescript': <SiTypescript size={100} />,
        'React': <FaReact size={100} />,
        'NextJS': <TbBrandNextjs size={100} />,
        'SQL': <PiFileSql size={100} />,
        'HTML5': <FaHtml5 size={100} />,
        'CSS3': <FaCss3Alt size={100} />,
    };

    return (
        <main>
            <IoLogoJavascript />

            <div className={styles.main__div}>
                <aside>
                    <div className={styles.profile}>
                        <span className={styles.profile__divPhoto}>
                            <img src={jsonData.photo} alt="" className={styles.profile__Img} />
                        </span>
                        <div className={styles.profile__Occupation}><span>{jsonData.occupation}</span></div>
                        <div className={styles.profile__Medias}>
                            <a href={jsonData.socialMedias.instagram} aria-label="Link para o Instagram" target='blank'><FaInstagram size={40} /></a>
                            <a href={jsonData.socialMedias.linkedin} aria-label="Link para o Linkedin" target='blank'><FaLinkedin size={40} /></a>
                            <a href={jsonData.socialMedias.github} aria-label="Link para o Github" target='blank'><FaGithub size={40} /></a>
                        </div>
                        <div id="Contact" className={styles.profile__Informations}>
                            <div className={`${styles.profile__Name} ${styles.profile__InfoGeneralStyle}`}>
                                <img className={styles.profile__Icon} src={user} alt="Ícone de usuário" />
                                <div>
                                    <div className={styles.profile__InfoTitle}>Name:</div>
                                    <div className={styles.profile__InfoP}>{jsonData.name}</div>
                                    <div className={styles.profile__Line}></div>
                                </div>
                            </div>
                            <div className={styles.profile__InfoGeneralStyle}>
                                <img className={styles.profile__Icon} src={tel} alt="Telefone: Entre em contato comigo" />
                                <div>
                                    <div className={styles.profile__InfoTitle}>Phone: </div>
                                    <div className={styles.profile__InfoP}>{jsonData.phone}</div>
                                    <div className={styles.profile__Line}></div>
                                </div>
                            </div>
                            <div className={styles.profile__InfoGeneralStyle}>
                                <img className={styles.profile__Icon} src={email} alt="Ícone de e-mail para contato" />
                                <div>
                                    <div className={styles.profile__InfoTitle}>E-mail: </div>
                                    <div className={styles.profile__InfoP}>{jsonData.email} </div>
                                    <div className={styles.profile__Line}></div>
                                </div>
                            </div>
                            <div className={styles.profile__InfoGeneralStyle}>
                                <img className={styles.profile__IconLocation} src={location} alt="Dados de endereço" />
                                <div>
                                    <div className={styles.profile__InfoTitle}>Location: </div>
                                    <div className={styles.profile__InfoP}>{jsonData.location} </div>
                                    <div className={styles.profile__Line}></div>
                                </div>
                            </div>

                            <div className={styles.profile__Skills}>
                                <div className={styles.profile__Title_Skills}>
                                    <img className={styles.profile__Icon} src={skills} alt="Competência" />
                                    <h2 className={styles.profile__InfoP}>Education:</h2>
                                </div>
                                <ul>
                                    {jsonData.skills.competencias.slice(0, 5).map((competencia, index) => (
                                        <li key={index} className={styles.profile__InfoTitle}>
                                            {competencia}
                                            <div className={styles.profile__Line}></div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <ButtonMore disabled={true} className={styles.buttonCurriculo} value="Curriculum PDF" href="https://drive.google.com/file/d/17tYRNteuDTNl0JlMQOuhP1s0PnD3lBQq/view?usp=sharing" />
                        </div>
                    </div>

                    <div id="Techs" className={styles.profile__Techs}>
                        <h2>Technologies and tools</h2>
                        <div className={styles.profile__TechsCarrousel}>
                            {jsonData.skills.hardSkills.slice(0, techs.length).map((hardSkills, index) => (
                                <div key={index} className={styles.profile__TechsOne}>
                                    <div className={styles.profile__TechsHeader}>
                                        <h3 className={styles.profile__InfoP}>{jsonData.skills.hardSkills[index].name}</h3>
                                        <div className={styles.profile__Line}></div>
                                    </div>
                                    <span className={styles.profile__InfoP}>{jsonData.skills.hardSkills[index].level}</span>
                                    <div className={styles.profile__TechsImageAndP}>
                                        <div className={styles.profile__IconContainer}>
                                            {iconMap[jsonData.skills.hardSkills[index].name]}
                                        </div>
                                        <p>{jsonData.skills.hardSkills[index].description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div onClick={handleCreateNewTech}>
                            <ButtonMore id="MoreTechs" disabled={isButtonDisabled} value="Ver mais" />
                        </div>
                    </div>
                </aside>
                <Section />
            </div>
        </main>
    )
}

export default MainContent