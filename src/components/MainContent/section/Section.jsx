import ButtonMore from "../../ButtonMore/ButtonMore"
import styles from './Section.module.css'

import jsonData from '../../../assets/profile.json'
import { useEffect, useState } from "react";

import coffeeDelivery from '../../../assets/img/coffeDelivery.PNG';
import portifolioReact from '../../../assets/img/portfolio.png';
import toDoList from '../../../assets/img/todoList.PNG';
import designSystem from '../../../assets/img/storyBook.PNG';
import igniteShop from '../../../assets/img/igniteShop.PNG';
import pokedex from '../../../assets/img/pokedex.PNG';
import UxProjects from "./UxProjects/UxProjects";
import doceria from '../../../assets/img/doceria.PNG'


function Section() {
    const [projects, setProjects] = useState([]);
    const [moreProjects, setMoreProjects] = useState(5)
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("devProjects");


    const favorites = ['doceria', 'Portifolio-React', 'coffeeDelivery']
    const thumbs = {
        'coffeeDelivery': coffeeDelivery,
        'Portifolio-React': portifolioReact,
        'toDo-list': toDoList,
        'design-system': designSystem,
        'ignite-shop': igniteShop,
        'pokedex': pokedex,
        'doceria': doceria,
    };
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

    function handleCategoryChange(category) {
        setSelectedCategory(category);
    }

    function filterProject(project) {
        if (project === "devProjects") {
            return projects.map((project, index) =>
                <div key={index} className={styles.project}>
                    {favorites.includes(project.name) && (
                        <span className={styles.favoriteIcon}>★</span>
                    )}
                    <a href={project.html_url} target="_blank" rel="noopener noreferrer">
                        <h2>{capitalizeFirstLetter(project.name)}</h2>
                        <div className={styles.thumbProject}>
                            {thumbs[project.name] && (
                                <img
                                    src={thumbs[project.name]}
                                    alt={`Thumbnail de ${project.name}`}
                                />
                            )}
                        </div>
                        {console.log(project.updated_at)}
                        <p>{`Updated ${Math.floor((new Date() - new Date(project.updated_at)) / (1000 * 60 * 60 * 24))} days ago.`}</p>
                    </a>
                </div>
            )
        } else if (project === "uxProjects") {
            return <UxProjects />
        }
    }

    return (
        <section>
            <div id="About" className={styles.about__me}>
                <div className={styles.about__meHeader}>
                    <h1>About me</h1>
                    <div className={styles.profile__Line}></div>
                </div>
                <div className={styles.about__meResume}>
                    <p>{jsonData.resume}</p>
                    <p>{jsonData.resume1}</p>
                </div>
            </div>

            <div className={styles.about__card}>
                {jsonData.aboutMe.map((card, index) => (
                    <div key={index} className={styles.about__cardS}>
                        <div className={styles.about__cardSHeader}>
                            <img src={jsonData.aboutMe[index].icon} alt={`Ícone representativo do título ${jsonData.aboutMe[index].title}`} />
                            <h2>{jsonData.aboutMe[index].title}</h2>
                        </div>
                        <p>{jsonData.aboutMe[index].description}</p>
                    </div>
                ))}
            </div>

            <div id="Project" className={styles.projects}>
                <div className={styles.about__meHeader} >
                    <h1>Latest Projects and Highlights</h1>
                    <div className={styles.profile__Line}></div>
                </div>
                <div className={styles.devUXProjects}>
                    <div className={`${styles.devProjects} ${selectedCategory === "devProjects" ? styles.devProjectsClicked : ''}`}
                        onClick={() => handleCategoryChange("devProjects")}>Developer Projects</div>
                    <div className={`${styles.uxProjects} ${selectedCategory === "uxProjects" ? styles.uxProjectsClicked : ''}`} onClick={() => handleCategoryChange("uxProjects")}>UX Projects</div>
                </div>
                <div className={`${selectedCategory === "devProjects" ? styles.projectDiv : ''}`}>
                    {filterProject(selectedCategory)}
                </div>
                <button onClick={handleMoreProjects}><ButtonMore value="Ver mais" disabled={selectedCategory === "uxProjects" || isButtonDisabled}></ButtonMore></button>
            </div>
        </section>
    )
}

export default Section