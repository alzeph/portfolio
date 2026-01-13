import React from 'react';

const ExperienceSec = () => {
    const experiences = [
    {
        year: "Juin 2025 - Actuellement",
        title: "Chef de projet informatique",
        company: "Afrique Informatique Bureautique (AIB)",
        type: "Fulltime",
        description: "Pilotage de projets web et SaaS, mise en place d’architectures frontend robustes, automatisation React + Vite, sécurisation selon OWASP et gestion IAM. Supervision de sites évolutifs et applications internes prêtes à l’usage."
    },
    {
        year: "Juillet 2024 - Juin 2025",
        title: "Responsable Service Informatique",
        company: "BIG BTP",
        type: "Fulltime",
        description: "Déploiement d’infrastructure sécurisée, développement d’applications mobiles et web pour la collecte terrain et la visualisation géospatiale. Création de pipelines de données fiables et optimisation des process IT."
    },
    {
        year: "Octobre 2023 - Octobre 2025",
        title: "Consultant Informatique",
        company: "Cabinet Brigitte Mensah",
        type: "Freelance",
        description: "Conseil stratégique IT et développement sur mesure : site web, gestion documentaire et administration des systèmes pour améliorer l’efficacité et la sécurité des opérations."
    },
    {
        year: "Mars 2023 - Actuellement",
        title: "Consultant Informatique",
        company: "Entreprendre Avec ça Différence (EAD)",
        type: "Freelance",
        description: "Accompagnement IT et digital : sites web professionnels, automatisation de processus, optimisation organisationnelle et formation à l’IA pour booster la productivité et l’innovation."
    },
    {
        year: "Août 2022 - Octobre 2025",
        title: "Consultant Informatique",
        company: "Mouvement Ivoirien des citoyens handicapés (MICH)",
        type: "Freelance",
        description: "Développement d’outils et sites web adaptés, conseil stratégique IT et administration de systèmes pour améliorer accessibilité, organisation et productivité des équipes."
    },
    {
        year: "Avril 2022 - Août 2022",
        title: "Technicien des services généraux",
        company: "Compagnie Ivoirienne de Production d’Électricité (CIPREL)",
        type: "Fulltime",
        description: "Développement d’outils performants, maintien et optimisation des bases de données et des systèmes selon les besoins techniques et fonctionnels."
    },
    {
        year: "Décembre 2021 - Avril 2022",
        title: "Développeur web et admin réseaux",
        company: "Manue Design",
        type: "Fulltime",
        description: "Installation complète de réseau, développement logiciel de gestion, maintenance évolutive des applications et optimisation des performances pour clients et collectivités."
    },
    {
        year: "Mai 2021 - Novembre 2021",
        title: "Technicien Base de données",
        company: "Service État Civil",
        type: "Fulltime",
        description: "Développement d’ORM Java pour numérisation de documents, optimisation des bases de données et administration de l’infrastructure Windows Server."
    }
];


    return (
        <section>
            <div className="py-16 md:py-32">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
                        <h2>Experience</h2>
                        <p className="text-xl text-primary">( 02 )</p>
                    </div>

                    <div className="space-y-7 md:space-y-12">
                        {experiences.map((exp, index) => (
                            <div key={index} className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 md:gap-4 xl:gap-8 items-start relative">
                                <div className="">
                                    <h5 className="font-bold mb-2 text-black">{exp.year}</h5>
                                    <h4 className="text-lg font-normal">{exp.title}</h4>
                                </div>

                                <div className=" relative">
                                    {index < experiences.length && (
                                        <div className={`absolute left-0 top-3 w-px ${index < experiences.length - 1 ? 'h-40' : 'h-30'} bg-softGray`}></div>
                                    )}

                                    <div className="no-print absolute left-0 top-0 transform -translate-x-1/2">
                                        <div className={`no-print w-3.5 h-3.5 rounded-full border-1 bg-white flex items-center justify-center ${index === 0 ? 'border-primary' : 'border-black'
                                            }`}>
                                            {index === 0 && (
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="pl-4 lg:pl-7">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-xl text-black font-normal">{exp.company}</span>
                                        </div>
                                        <p className="text-base font-normal">{exp.type}</p>
                                    </div>
                                </div>

                                <div className="pl-8 sm:pl-0">
                                    <p className="leading-relaxed text-base">{exp.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSec;