import ButtonMore from "../../ButtonMore/ButtonMore"
import styles from './Section.module.css'

import jsonData from '../../../assets/profile.json'
import { useEffect, useState } from "react";
import profileJson from '../../../assets/profile.json'

function Section() {
    const [projects, setProjects] = useState([]);
    const [moreProjects, setMoreProjects] = useState(5)
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    const favorites = ['coffeeDelivery', 'design-system', 'toDo-list']

    function capitalizeFirstLetter(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    useEffect(() => {
        handleProjects();
    }, [moreProjects]);

    function handleProjects() {
        fetch(`https://api.github.com/users/iagoluancj/repos?type=public&sort=updated`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Erro na solicitação da API do GitHub');
                }
                return response.json();
            })
            .then((data) => {
                const repositoriosOrdenados = data.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
                const lastProjects = repositoriosOrdenados.slice(0, moreProjects);
                const favoriteProjects = favorites.map(favoriteName => lastProjects.find(project => project.name === favoriteName)).filter(Boolean);
                const otherProjects = lastProjects.filter(project => !favorites.includes(project.name));
                const allProjects = [...favoriteProjects, ...otherProjects];

                setProjects(allProjects);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    function handleMoreProjects() {
        if (moreProjects < 9) {
            setMoreProjects(moreProjects => moreProjects + 1);
        } else {
            setIsButtonDisabled(true);
        }
    }

    return (
        <section>
            <div id="About" className={styles.about__me}>
                <div className={styles.about__meHeader}>
                    <h1>Sobre mim</h1>
                    <div className={styles.profile__Line}></div>
                </div>
                <div className={styles.about__meResume}>
                    <p>{jsonData.resume}</p>
                    <p>{jsonData.resume}</p>
                </div>
            </div>

            <div className={styles.about__card}>
                {jsonData.aboutMe.map((card, index) => (
                    <div key={index} className={styles.about__cardS}>
                        <div className={styles.about__cardSHeader}>
                            <img src={jsonData.aboutMe[index].icon} alt="Simbolos padrão para representar código web" />
                            <h2>{jsonData.aboutMe[index].title}</h2>
                        </div>
                        <p>{jsonData.aboutMe[index].description}</p>
                    </div>
                ))}
            </div>

            <div id="Project" className={styles.projects}>
                <div className={styles.about__meHeader} >
                    <h1>Últimos projetos e destaques</h1>
                    <div className={styles.profile__Line}></div>
                </div>

                <div className={styles.projectDiv}>
                    {projects.map((project, index) => (
                        <div key={index} className={styles.project}>
                            {favorites.includes(project.name) && (
                                <span className={styles.favoriteIcon}>★</span>
                            )}
                            <a href={project.html_url} target="_blank" rel="noopener noreferrer">
                                <h2>{capitalizeFirstLetter(project.name)}</h2>
                                <div className={styles.thumbProject}>
                                    {profileJson.projectsIMGS.map((projectImg, imgIndex) => (
                                        project.name === projectImg.nameProject && (
                                            <img
                                                key={imgIndex}
                                                src={projectImg.url}
                                                alt={`Thumbnail de ${project.name}`}
                                            />
                                        )
                                    ))}
                                </div>
                                <p>{`Publicado há ${Math.floor((new Date() - new Date(project.updated_at)) / (1000 * 60 * 60 * 24))} dias.`}</p>
                            </a>
                        </div>
                    ))}
                </div>
                <button onClick={handleMoreProjects}><ButtonMore value="Ver mais..." disabled={isButtonDisabled}></ButtonMore></button>
            </div>
        </section>
    )
}

export default Section