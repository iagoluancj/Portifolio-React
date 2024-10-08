import styles from './UxProjects.module.css'

import cinesnack from '../UxProjects/img/cinesnack.PNG';
import portfolioImg from '../UxProjects/img/portfolio.PNG';
import rcpImg from '../UxProjects/img/rcp.PNG';
import ecommerceImg from '../UxProjects/img/ecommerce.PNG';
import treinamentoAiko from '../UxProjects/img/plataformaTreinamento.png'
import doceriaIzah from '../UxProjects/img/doceriaIzah.PNG'
import openTab from '../../../../assets/img/open_in_new_white_24dp.svg'


function UxProjects() {
    const projectsData = {
        "uxProjects": [
            {
                "organization": "Plataforma de treinamentos Aiko",
                "name": "treinamentoAiko",
                "description": "O projeto foi criado devido a ausência percebida atualmente na Aiko Digital, onde uma plataforma dedicada para treinamentos internos e externos se faz essencial.",
                "link": [
                    { "link": 'https://www.figma.com/proto/EIyR7nujC4PVZVbRr9IZ0k/Projetos?node-id=1-565&t=MC3ZYIRWP9rhMOXl-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A565&show-proto-sidebar=1' },
                    { "desc": "Mockup Hi-Fi" }
                ],
                "role": "UX/UI Designer",
                "process": [
                    "Design Thinking",
                    "Mockup Hi-Fi",
                    "Wireframe",
                    "User Interviews",
                ],
            },
            {
                "organization": "Portfolio React",
                "description": "No projeto de Portfolio, atuei como Desenvolvedor Web e UX/UI Designer, criando wireframes, mockups Hi-Fi e a aplicação.",
                "name": "portfolio",
                "link": [
                    { "link": "https://www.figma.com/proto/I3wDGcR6uQoOItPOvFzgNI/Curriculo?node-id=29305-185&starting-point-node-id=29305%3A185&show-proto-sidebar=1&mode=design&t=GNXuU6foktnHOprL-1" },
                    { "desc": "Mockup Hi-Fi" }
                ],
                "role": "Web Developer and UX/UI Designer",
                "process": [
                    "Created paper wireframes",
                    "Created digital wireframe",
                    "Created Hi-Fi mockup",
                    "Developed the application",
                    "Continuous monitoring"
                ],
                "observation": "Devido ao estilo pessoal, pulei algumas etapas durante a concepção. O resultado ficou conforme o esperado."
            },
            {
                "organization": "Doceria da Izah",
                "name": "doceriaIzah",
                "description": "Neste projeto, fui responsável pela criação, idealização e desenvolvimento. Visando suprir a lacuna existente na comunicação online dinâmica da Doceria da Izah devido à ausência de um site.",
                "link": [
                    { "link": 'https://www.figma.com/proto/EIyR7nujC4PVZVbRr9IZ0k/Projetos?node-id=91-256&t=MC3ZYIRWP9rhMOXl-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=91%3A256&show-proto-sidebar=1' },
                    { "desc": "Wireframe" }
                ],
                "role": "Web developer and UX/UI Designer",
                "process": [
                    "Design Thinking ",
                    "Mockup Hi-Fi",
                    "Wireframe",
                    "User Interviews",
                ],
            },
            {
                "organization": "RCP - Project for Social Welfare",
                "description": "O projeto RCP criado a ideia inicial de ser um aplicativo para o bem estár social, abrange análises competitivas, mapas de empatia e etapas de pesquisa UX, e os impactos sociais.",
                "name": "rcp",
                "link": [
                    { "link": "https://drive.google.com/file/d/1nhFCbVQrwL8FsVvXWLyU-6ZmxxR5snK-/view?usp=drive_link" },
                    { "desc": "Apresentação do projeto" }
                ],
                "role": "UX/UI Designer",
                "process": [
                    "User Persona",
                    "Low-Fidelity Prototypes",
                    "Usability Testing",
                    "Prioritized Insights",
                    "Performance Metrics",
                ],
                "observation": "O projeto onde pude aplicar melhor meus conhecimentos, embora tenha tido limitadas oportunidades de exploração de UI"
            },
            {
                "organization": "E-commerce Store",
                "description": "No projeto E-commerce Store, atuei como UX/UI Designer, destacando-me na elaboração de mockups Hi-Fi. Essa experiência envolveu aprimorar a usabilidade e o design da interface para a loja online.",
                "name": "ecommerce",
                "link": [
                    { "link": "https://www.figma.com/proto/64PHAVsmxhSUIGQkhpXhbJ/SITE-STORE---Projetos-curso-6-google?node-id=77-1187&starting-point-node-id=7%3A1754&show-proto-sidebar=1&mode=design&t=j8ZU6Qa7UjqZQaOP-1" },
                    { "desc": "Mockup Hi-Fi" }
                ],
                "role": "UX/UI Designer",
                "process": [
                    "Wireframes",
                    "Usability Testing",
                    "High-Fidelity Prototypes",
                    "Accessibility Evaluation",
                    "User Flow Analysis",
                    "Empathy Map",
                    "A/B Testing"
                ],
                "observation": "Este foi o segundo projeto, aqui tive uma virada de chave"
            },
            {
                "organization": "CineSnack",
                "name": "cinesnack",
                "description": "No projeto CineSnack, o foco era melhorar a acessibilidade ao cinema para pessoas com deficiências temporárias e permanentes. A apresentação completa oferece insights detalhados sobre o projeto.",
                "link": [
                    { "link": "https://docs.google.com/presentation/d/1YaEhYodvyu_cOkTe9gmCMC23ymOLWg4cxhCAlySDjZQ/edit?usp=sharingy" },
                    { "desc": "Case Study" }
                ],
                "role": "UX/UI Designer",
                "process": [
                    "Competitive Audit Template",
                    "Affinity Diagram",
                    "UX Research Study Plan",
                    "Prioritized Insights",
                    "Insight Identification",
                    "Research Presentation",
                    "User Journey Map"
                ],
                "observation": "Primeiro projeto UX criado"
            },
        ]

    };

    const projectImages = {
        "cinesnack": cinesnack,
        "portfolio": portfolioImg,
        "rcp": rcpImg,
        "ecommerce": ecommerceImg,
        "treinamentoAiko": treinamentoAiko,
        "doceriaIzah": doceriaIzah,
    };

    return (
        <div className={styles.uxProjects}>
            {projectsData.uxProjects.map((project, index) => (
                <div key={index} className={styles.uxProject}>
                    <div className={styles.uxProject__Organization}>
                        <img src={projectImages[project.name]}  className={styles.uxProject_ImagePrincipal} alt={`Thumbnail do projeto ${project.name}`} />
                        <div className={styles.uxProject__Header}>
                            <div className={styles.uxProject__Name}>{project.organization}</div>
                            <div className={styles.uxProject__Role}>My role: <span>{project.role}</span></div>
                            {project.link[0].link !== '0' ? (
                                <a href={project.link[0].link} target='_blank' rel="noreferrer" className={styles.uxProject__Link}>
                                    {project.link[1].desc}
                                    <img src={openTab} className={styles.uxProject__LinkIcon} alt="" />
                                </a>
                            ) : (
                                <a href={project.link[0].link} target='_blank' rel="noreferrer" className={styles.uxProject__Link}>
                                    {project.link[1].desc}
                                </a>
                            )}
                            <div className={styles.uxProject__Describe}><span>Breve descrição:</span> <p>{project.description}</p></div>
                        </div>
                        <div className={styles.uxProject__Process}>
                            <ul>
                                <div>
                                    {project.process.slice(0, Math.ceil(project.process.length / 2)).map((step, stepIndex) => (
                                        <li key={stepIndex}><span>{"> "}</span>{step}</li>
                                    ))}
                                </div>
                                <div>
                                    {project.process.slice(Math.ceil(project.process.length / 2)).map((step, stepIndex) => (
                                        <li key={stepIndex}><span>{"> "}</span>{step}</li>
                                    ))}
                                </div>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.uxProject__Observation}>
                        {project.observation && (
                            <span>Observação: </span>
                        )}
                        {project.observation}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default UxProjects;
