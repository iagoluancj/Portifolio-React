import ButtonMore from "../../ButtonMore/ButtonMore"
import styles from './Section.module.css'

import jsonData from '../../../assets/profile.json'
import bgHeader from '../../../assets/img/bgHeader.png'


function Section() {

    function handleProjects() {
        fetch(`https://api.github.com/users/iagoluancj/repos?type=public&sort=updated`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro na solicitação da API do GitHub');
                }
                return response.json();
            })
            .then(data => {
                // Ordena os projetos por data de atualização em ordem decrescente
                const repositoriosOrdenados = data.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));

                // Seleciona apenas os últimos 5 projetos
                const ultimos5Projetos = repositoriosOrdenados.slice(0, 5);

                // Exibe os últimos 5 projetos atualizados no console
                console.log('Últimos 5 projetos atualizados:');
                for (const repo of ultimos5Projetos) {
                    console.log(`Nome do repositório: ${repo.name}`);
                    console.log(`Data de atualização: ${repo.updated_at}`);
                    console.log('---');
                }
            })
            .catch(error => {
                console.error(error);
            });
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
                    <div className={styles.project}>
                        {/* Criar codigo para buscar projetos no GITHUB e com base no nome puxar uma imagem thumb salva localmente.  */}
                        <h2>TITLE PROJECT</h2>
                        <p>Publicado há 12 dias.</p>
                        <img src={bgHeader} alt="" />
                        <p>{`It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of istribution of letters, as opp use `}</p>
                    </div>
                    <div className={styles.project}>
                        {/* Criar codigo para buscar projetos no GITHUB e com base no nome puxar uma imagem thumb salva localmente.  */}
                        <h2>TITLE PROJECT</h2>
                        <img src={bgHeader} alt="" />
                        <p>{`It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of istribution of letters, as opp use `}</p>
                    </div>
                    <div className={styles.project}>
                        {/* Criar codigo para buscar projetos no GITHUB e com base no nome puxar uma imagem thumb salva localmente.  */}
                        <h2>TITLE PROJECT</h2>
                        <img src={bgHeader} alt="" />
                        <p>{`It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of istribution of letters, as opp use `}</p>
                    </div>
                    <div className={styles.project}>
                        {/* Criar codigo para buscar projetos no GITHUB e com base no nome puxar uma imagem thumb salva localmente.  */}
                        <h2>TITLE PROJECT</h2>
                        <img src={bgHeader} alt="" />
                        <p>{`It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of istribution of letters, as opp use `}</p>
                    </div>
                    <div className={styles.project}>
                        {/* Criar codigo para buscar projetos no GITHUB e com base no nome puxar uma imagem thumb salva localmente.  */}
                        <h2>TITLE PROJECT</h2>
                        <img src={bgHeader} alt="" />
                        <p>{`It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of istribution of letters, as opp use `}</p>
                    </div>
                </div>
                <button onClick={handleProjects}><ButtonMore  value="Ver mais..." ></ButtonMore></button>
            </div>
        </section>
    )
}

export default Section