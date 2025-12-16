// data.js - Données de quiz avec 4 catégories seulement (50 questions par catégorie)
const QUIZ_DATA = {
    categories: [
        {
            id: 'introduction',
            name: 'Introduction aux SE',
            icon: 'fas fa-microchip',
            count: 50,
            color: '#3b82f6'
        },
        {
            id: 'architecture',
            name: 'Architecture des SE',
            icon: 'fas fa-sitemap',
            count: 50,
            color: '#10b981'
        },
        {
            id: 'microcontrollers',
            name: 'Microcontrôleurs',
            icon: 'fas fa-cog',
            count: 50,
            color: '#f59e0b'
        },
        {
            id: 'arduino-basics',
            name: 'Arduino - Bases',
            icon: 'fas fa-code',
            count: 50,
            color: '#8b5cf6'
        }
    ],
    
    questions: {
        introduction: [
            {
                id: 1,
                question: "Qu'est-ce qu'un système embarqué selon le cours ?",
                type: 'qcm',
                options: [
                    "Un ordinateur de bureau miniaturisé",
                    "Un système électronique et informatique autonome intégré dans un objet pour des tâches précises",
                    "Un logiciel d'application standard",
                    "Un réseau de capteurs sans contrôleur"
                ],
                correctAnswer: 1,
                explanation: "Un système embarqué est un système électronique et informatique autonome rassemblé dans un même objet et conçu pour réaliser des tâches précises.",
                difficulty: 'facile',
                theme: 'Définition'
            },
            {
                id: 2,
                question: "Un système embarqué peut fonctionner sans intervention humaine.",
                type: 'vrai_faux',
                correctAnswer: true,
                explanation: "Vrai. L'autonomie est une caractéristique fondamentale des systèmes embarqués.",
                difficulty: 'facile',
                theme: 'Caractéristiques'
            },
            {
                id: 3,
                question: "Quel était le premier système embarqué connu mentionné dans le cours ?",
                type: 'qcm',
                options: [
                    "Intel 4004",
                    "Apollo Guidance Computer (AGC)",
                    "Autonetics D-17B",
                    "Arduino Uno"
                ],
                correctAnswer: 1,
                explanation: "L'Apollo Guidance Computer (AGC) des missions Apollo dans les années 1960 est considéré comme l'un des premiers systèmes embarqués.",
                difficulty: 'moyen',
                theme: 'Historique'
            },
            {
                id: 4,
                question: "Quelle entreprise a développé le premier RTOS commercial VxWorks ?",
                type: 'qcm',
                options: [
                    "Intel",
                    "Microsoft",
                    "Wind River Systems",
                    "Atmel"
                ],
                correctAnswer: 2,
                explanation: "VxWorks a été lancé en 1987 par Wind River Systems, marquant le début des systèmes d'exploitation temps réel commerciaux.",
                difficulty: 'moyen',
                theme: 'Historique'
            },
            {
                id: 5,
                question: "Quelle est la principale contrainte des systèmes embarqués ?",
                type: 'qcm',
                options: [
                    "Puissance de calcul illimitée",
                    "Ressources limitées (mémoire, énergie)",
                    "Pas de contraintes temporelles",
                    "Interface utilisateur complexe"
                ],
                correctAnswer: 1,
                explanation: "Les systèmes embarqués fonctionnent avec des ressources limitées en termes de mémoire, puissance de calcul et énergie.",
                difficulty: 'facile',
                theme: 'Contraintes'
            },
            {
                id: 6,
                question: "Les systèmes embarqués doivent toujours respecter des contraintes de temps réel.",
                type: 'vrai_faux',
                correctAnswer: false,
                explanation: "Faux. Certains systèmes embarqués fonctionnent en temps réel, mais pas tous. Cela dépend de l'application.",
                difficulty: 'moyen',
                theme: 'Temps réel'
            },
            {
                id: 7,
                question: "Quelle est la différence entre temps réel dur et temps réel mou ?",
                type: 'qcm',
                options: [
                    "Le temps réel dur est plus rapide",
                    "Le temps réel dur garantit le respect des délais, le temps réel mou peut tolérer des dépassements occasionnels",
                    "Il n'y a pas de différence",
                    "Le temps réel mou est plus fiable"
                ],
                correctAnswer: 1,
                explanation: "Le temps réel dur garantit que toutes les contraintes temporelles sont respectées, tandis que le temps réel mou tolère quelques dépassements.",
                difficulty: 'difficile',
                theme: 'Temps réel'
            },
            {
                id: 8,
                question: "Quel pourcentage du marché des microprocesseurs est représenté par les systèmes embarqués ?",
                type: 'qcm',
                options: [
                    "10%",
                    "30%",
                    "70%",
                    "98%"
                ],
                correctAnswer: 3,
                explanation: "Environ 98% des microprocesseurs produits sont utilisés dans des systèmes embarqués.",
                difficulty: 'moyen',
                theme: 'Marché'
            },
            {
                id: 9,
                question: "Lequel de ces dispositifs N'EST PAS un système embarqué ?",
                type: 'qcm',
                options: [
                    "Thermostat intelligent",
                    "Pacemaker cardiaque",
                    "Ordinateur de bureau",
                    "Système ABS dans une voiture"
                ],
                correctAnswer: 2,
                explanation: "Un ordinateur de bureau est un système informatique généraliste, pas un système embarqué spécialisé.",
                difficulty: 'facile',
                theme: 'Identification'
            },
            {
                id: 10,
                question: "Quelle caractéristique est essentielle pour un système embarqué médical ?",
                type: 'qcm',
                options: [
                    "Coût minimal",
                    "Fiabilité et sécurité",
                    "Interface graphique avancée",
                    "Connectivité réseau"
                ],
                correctAnswer: 1,
                explanation: "La fiabilité et la sécurité sont cruciales pour les dispositifs médicaux qui peuvent sauver des vies.",
                difficulty: 'moyen',
                theme: 'Applications'
            },
            {
                id: 11,
                question: "Quelle année a vu le développement de l'Intel 4004, premier microprocesseur ?",
                type: 'qcm',
                options: [
                    "1965",
                    "1971",
                    "1980",
                    "1990"
                ],
                correctAnswer: 1,
                explanation: "Intel a développé le premier microprocesseur, l'Intel 4004, en 1971.",
                difficulty: 'moyen',
                theme: 'Historique'
            },
            {
                id: 12,
                question: "Quel est l'objectif principal d'un système embarqué ?",
                type: 'qcm',
                options: [
                    "Exécuter des applications bureautiques",
                    "Surfer sur Internet",
                    "Réaliser une tâche spécifique",
                    "Stocker des données"
                ],
                correctAnswer: 2,
                explanation: "Un système embarqué est conçu pour réaliser des tâches spécifiques et précises.",
                difficulty: 'facile',
                theme: 'Définition'
            },
            {
                id: 13,
                question: "Le marché des systèmes embarqués était estimé à environ 94,77 milliards de dollars en 2022.",
                type: 'vrai_faux',
                correctAnswer: true,
                explanation: "Vrai. Selon le cours, le marché des SE était de 94,77 milliards de dollars en 2022.",
                difficulty: 'moyen',
                theme: 'Marché'
            },
            {
                id: 14,
                question: "Quel type de système embarqué est utilisé dans les smartphones ?",
                type: 'qcm',
                options: [
                    "Système autonome",
                    "Système portable (mobile)",
                    "Système en réseau",
                    "Système temps réel"
                ],
                correctAnswer: 1,
                explanation: "Les smartphones utilisent des systèmes embarqués portables (mobiles).",
                difficulty: 'facile',
                theme: 'Types'
            },
            {
                id: 15,
                question: "Quelle est la caractéristique principale d'un système embarqué autonome ?",
                type: 'qcm',
                options: [
                    "Fonctionne sans connexion réseau",
                    "Nécessite une intervention humaine constante",
                    "Est toujours connecté à Internet",
                    "Utilise uniquement des capteurs"
                ],
                correctAnswer: 0,
                explanation: "Un système embarqué autonome fonctionne indépendamment sans connexion à un réseau.",
                difficulty: 'moyen',
                theme: 'Types'
            },
            {
                id: 16,
                question: "Quel exemple correspond à un système embarqué en réseau ?",
                type: 'qcm',
                options: [
                    "Calculatrice",
                    "Montre digitale",
                    "Maison intelligente",
                    "Télécommande"
                ],
                correctAnswer: 2,
                explanation: "Une maison intelligente utilise des systèmes embarqués connectés en réseau.",
                difficulty: 'facile',
                theme: 'Types'
            },
            {
                id: 17,
                question: "Quelle est la spécificité fonctionnelle d'un système embarqué ?",
                type: 'qcm',
                options: [
                    "Il peut exécuter n'importe quelle application",
                    "Il est conçu pour une tâche spécifique",
                    "Il se reconfigure automatiquement",
                    "Il apprend de nouvelles fonctions"
                ],
                correctAnswer: 1,
                explanation: "Un système embarqué est conçu pour effectuer une tâche spécifique ou un ensemble restreint de tâches.",
                difficulty: 'facile',
                theme: 'Caractéristiques'
            },
            {
                id: 18,
                question: "Pourquoi la fiabilité est-elle cruciale dans les systèmes embarqués ?",
                type: 'qcm',
                options: [
                    "Pour réduire les coûts",
                    "Car ils opèrent souvent dans des environnements critiques",
                    "Pour augmenter la vitesse",
                    "Pour améliorer l'interface utilisateur"
                ],
                correctAnswer: 1,
                explanation: "Les SE doivent être fiables car ils opèrent dans des environnements critiques (automobile, médical, aéronautique).",
                difficulty: 'moyen',
                theme: 'Caractéristiques'
            },
            {
                id: 19,
                question: "Quel est l'avantage de l'intégration matérielle/logicielle dans les SE ?",
                type: 'qcm',
                options: [
                    "Réduction des coûts",
                    "Meilleure performance et optimisation",
                    "Facilité de programmation",
                    "Compatibilité universelle"
                ],
                correctAnswer: 1,
                explanation: "L'intégration étroite matérielle/logicielle permet une meilleure optimisation des performances.",
                difficulty: 'difficile',
                theme: 'Caractéristiques'
            },
            {
                id: 20,
                question: "Quelle décennie a vu l'émergence des premiers appareils électroniques grand public ?",
                type: 'qcm',
                options: [
                    "1950s",
                    "1960s",
                    "1970s",
                    "1980s"
                ],
                correctAnswer: 2,
                explanation: "Les années 1970 ont vu l'émergence des premiers appareils électroniques grand public (calculatrices, consoles de jeux).",
                difficulty: 'moyen',
                theme: 'Historique'
            },
            // Ajouter 30 questions supplémentaires pour atteindre 50
            {
                id: 21,
                question: "Un système embarqué peut-il être reprogrammé après fabrication ?",
                type: 'vrai_faux',
                correctAnswer: true,
                explanation: "Vrai. La plupart des systèmes embarqués modernes peuvent être mis à jour via firmware.",
                difficulty: 'facile',
                theme: 'Caractéristiques'
            },
            {
                id: 22,
                question: "Quel est le système embarqué le plus vendu au monde ?",
                type: 'qcm',
                options: [
                    "Arduino",
                    "Smartphone",
                    "Microcontrôleur d'automobile",
                    "Ordinateur Raspberry Pi"
                ],
                correctAnswer: 1,
                explanation: "Les smartphones sont les systèmes embarqués les plus vendus, avec des milliards d'unités.",
                difficulty: 'moyen',
                theme: 'Marché'
            },
            {
                id: 23,
                question: "Un thermostat intelligent est un exemple de système embarqué en réseau.",
                type: 'vrai_faux',
                correctAnswer: true,
                explanation: "Vrai. Un thermostat intelligent est connecté au réseau pour permettre un contrôle à distance.",
                difficulty: 'facile',
                theme: 'Applications'
            },
            {
                id: 24,
                question: "Quelle est la différence principale entre IoT et systèmes embarqués traditionnels ?",
                type: 'qcm',
                options: [
                    "L'IoT utilise plus de mémoire",
                    "L'IoT est toujours connecté à Internet",
                    "Il n'y a pas de différence",
                    "Les systèmes embarqués sont plus chers"
                ],
                correctAnswer: 1,
                explanation: "L'IoT (Internet of Things) implique des systèmes embarqués connectés à Internet.",
                difficulty: 'moyen',
                theme: 'IoT'
            },
            {
                id: 25,
                question: "Quel langage de programmation est le plus utilisé pour les systèmes embarqués ?",
                type: 'qcm',
                options: [
                    "Python",
                    "Java",
                    "C/C++",
                    "JavaScript"
                ],
                correctAnswer: 2,
                explanation: "C/C++ est le langage dominant pour la programmation des systèmes embarqués en raison de son efficacité.",
                difficulty: 'moyen',
                theme: 'Programmation'
            },
            {
                id: 26,
                question: "Les systèmes embarqués nécessitent toujours un système d'exploitation complexe.",
                type: 'vrai_faux',
                correctAnswer: false,
                explanation: "Faux. Beaucoup de systèmes embarqués simples fonctionnent sans OS ou avec un RTOS léger.",
                difficulty: 'facile',
                theme: 'Logiciel'
            },
            {
                id: 27,
                question: "Quel est l'avantage principal d'un système embarqué temps réel dur ?",
                type: 'qcm',
                options: [
                    "Vitesse maximale",
                    "Garantie temporelle absolue",
                    "Coût réduit",
                    "Interface utilisateur avancée"
                ],
                correctAnswer: 1,
                explanation: "Un système temps réel dur garantit que toutes les contraintes temporelles sont respectées sans exception.",
                difficulty: 'difficile',
                theme: 'Temps réel'
            },
            {
                id: 28,
                question: "Quel secteur utilise le plus de systèmes embarqués ?",
                type: 'qcm',
                options: [
                    "Automobile",
                    "Médical",
                    "Aéronautique",
                    "Tous ces secteurs"
                ],
                correctAnswer: 3,
                explanation: "Tous ces secteurs utilisent massivement des systèmes embarqués pour différentes applications.",
                difficulty: 'facile',
                theme: 'Applications'
            },
            {
                id: 29,
                question: "La consommation d'énergie est une préoccupation majeure dans les systèmes embarqués.",
                type: 'vrai_faux',
                correctAnswer: true,
                explanation: "Vrai. L'optimisation de la consommation est cruciale, surtout pour les dispositifs portables.",
                difficulty: 'facile',
                theme: 'Caractéristiques'
            },
            {
                id: 30,
                question: "Quel est le facteur le plus important dans le choix d'un microcontrôleur pour un SE ?",
                type: 'qcm',
                options: [
                    "Prix le plus bas",
                    "Vitesse maximale",
                    "Adéquation avec les besoins spécifiques",
                    "Compatibilité avec Windows"
                ],
                correctAnswer: 2,
                explanation: "Le choix doit se baser sur l'adéquation aux besoins spécifiques de l'application.",
                difficulty: 'moyen',
                theme: 'Conception'
            },
            {
                id: 31,
                question: "Un système embarqué peut-il intégrer des fonctions d'IA ?",
                type: 'vrai_faux',
                correctAnswer: true,
                explanation: "Vrai. De plus en plus de systèmes embarqués intègrent des capacités d'IA (TinyML).",
                difficulty: 'facile',
                theme: 'IA Embarquée'
            },
            {
                id: 32,
                question: "Quelle est la durée de vie typique d'un système embarqué industriel ?",
                type: 'qcm',
                options: [
                    "1-2 ans",
                    "5-10 ans",
                    "10-20 ans",
                    "Plus de 20 ans"
                ],
                correctAnswer: 2,
                explanation: "Les systèmes embarqués industriels sont conçus pour durer 10-20 ans, contrairement aux produits grand public.",
                difficulty: 'moyen',
                theme: 'Fiabilité'
            },
            {
                id: 33,
                question: "La taille physique d'un système embarqué est toujours très réduite.",
                type: 'vrai_faux',
                correctAnswer: false,
                explanation: "Faux. La taille varie selon l'application, de quelques mm² à plusieurs m² pour les systèmes industriels.",
                difficulty: 'facile',
                theme: 'Caractéristiques'
            },
            {
                id: 34,
                question: "Quel protocole de communication est le plus utilisé dans l'IoT ?",
                type: 'qcm',
                options: [
                    "Bluetooth",
                    "WiFi",
                    "MQTT",
                    "HTTP"
                ],
                correctAnswer: 2,
                explanation: "MQTT est un protocole léger très populaire pour les communications IoT.",
                difficulty: 'moyen',
                theme: 'Communication'
            },
            {
                id: 35,
                question: "Les systèmes embarqués critiques nécessitent une certification particulière.",
                type: 'vrai_faux',
                correctAnswer: true,
                explanation: "Vrai. Les systèmes critiques (médicaux, aéronautiques) nécessitent des certifications strictes.",
                difficulty: 'facile',
                theme: 'Sécurité'
            },
            {
                id: 36,
                question: "Quelle est la tendance actuelle dans le développement des SE ?",
                type: 'qcm',
                options: [
                    "Augmentation de la complexité",
                    "Réduction des coûts",
                    "Intégration de l'IA",
                    "Toutes ces réponses"
                ],
                correctAnswer: 3,
                explanation: "Toutes ces tendances sont observées dans le développement actuel des systèmes embarqués.",
                difficulty: 'moyen',
                theme: 'Évolution'
            },
            {
                id: 37,
                question: "Un système embarqué peut fonctionner avec une batterie pendant plusieurs années.",
                type: 'vrai_faux',
                correctAnswer: true,
                explanation: "Vrai. Certains systèmes embarqués à très faible consommation peuvent fonctionner 5-10 ans sur une batterie.",
                difficulty: 'facile',
                theme: 'Consommation'
            },
            {
                id: 38,
                question: "Quel est le défi principal de l'IA embarquée ?",
                type: 'qcm',
                options: [
                    "Coût élevé",
                    "Consommation d'énergie",
                    "Manque d'algorithmes",
                    "Incompatibilité matérielle"
                ],
                correctAnswer: 1,
                explanation: "L'exécution des modèles d'IA nécessite beaucoup de calculs, ce qui augmente la consommation d'énergie.",
                difficulty: 'difficile',
                theme: 'IA Embarquée'
            },
            {
                id: 39,
                question: "Les systèmes embarqués peuvent être sécurisés contre les cyberattaques.",
                type: 'vrai_faux',
                correctAnswer: true,
                explanation: "Vrai. La sécurité des SE est devenue cruciale avec la croissance de l'IoT.",
                difficulty: 'facile',
                theme: 'Sécurité'
            },
            {
                id: 40,
                question: "Quelle est la principale raison du succès d'Arduino ?",
                type: 'qcm',
                options: [
                    "Performances élevées",
                    "Simplicité d'utilisation",
                    "Coût nul",
                    "Support professionnel"
                ],
                correctAnswer: 1,
                explanation: "Arduino a démocratisé les systèmes embarqués grâce à sa simplicité d'utilisation.",
                difficulty: 'moyen',
                theme: 'Plateformes'
            },
            {
                id: 41,
                question: "Un SE doit toujours être programmé en langage machine.",
                type: 'vrai_faux',
                correctAnswer: false,
                explanation: "Faux. La plupart sont programmés en C/C++, Python ou autres langages de haut niveau.",
                difficulty: 'facile',
                theme: 'Programmation'
            },
            {
                id: 42,
                question: "Quelle est l'importance du bootloader dans un SE ?",
                type: 'qcm',
                options: [
                    "Améliore les performances",
                    "Permet la mise à jour du firmware",
                    "Réduit la consommation",
                    "Augmente la sécurité"
                ],
                correctAnswer: 1,
                explanation: "Le bootloader permet de mettre à jour le firmware sans équipement spécialisé.",
                difficulty: 'moyen',
                theme: 'Logiciel'
            },
            {
                id: 43,
                question: "Les systèmes embarqués remplacent de plus en plus les ordinateurs personnels.",
                type: 'vrai_faux',
                correctAnswer: false,
                explanation: "Faux. Ils sont complémentaires, chaque type ayant ses applications spécifiques.",
                difficulty: 'facile',
                theme: 'Comparaison'
            },
            {
                id: 44,
                question: "Quelle est la différence entre firmware et software ?",
                type: 'qcm',
                options: [
                    "Aucune différence",
                    "Le firmware est spécifique au matériel",
                    "Le software est plus complexe",
                    "Le firmware ne peut pas être modifié"
                ],
                correctAnswer: 1,
                explanation: "Le firmware est un logiciel spécifique au matériel, souvent stocké en mémoire non volatile.",
                difficulty: 'moyen',
                theme: 'Logiciel'
            },
            {
                id: 45,
                question: "Un système embarqué peut-il être distribué sur plusieurs cartes électroniques ?",
                type: 'vrai_faux',
                correctAnswer: true,
                explanation: "Vrai. Certains systèmes embarqués complexes utilisent plusieurs cartes interconnectées.",
                difficulty: 'facile',
                theme: 'Architecture'
            },
            {
                id: 46,
                question: "Quelle est la caractéristique d'un système embarqué critique ?",
                type: 'qcm',
                options: [
                    "Coût élevé",
                    "Temps de développement long",
                    "Tolérance zéro aux défaillances",
                    "Interface graphique complexe"
                ],
                correctAnswer: 2,
                explanation: "Les systèmes critiques ne peuvent tolérer aucune défaillance (pacemakers, systèmes aéronautiques).",
                difficulty: 'difficile',
                theme: 'Fiabilité'
            },
            {
                id: 47,
                question: "Le prototypage rapide est un avantage majeur des plateformes comme Arduino.",
                type: 'vrai_faux',
                correctAnswer: true,
                explanation: "Vrai. Arduino permet de prototyper rapidement des systèmes électroniques interactifs.",
                difficulty: 'facile',
                theme: 'Développement'
            },
            {
                id: 48,
                question: "Quelle technologie permet de réduire la consommation des SE ?",
                type: 'qcm',
                options: [
                    "Augmentation de la fréquence",
                    "Modes de veille",
                    "Utilisation de mémoires plus rapides",
                    "Ajout de ventilateurs"
                ],
                correctAnswer: 1,
                explanation: "Les modes de veille permettent de réduire considérablement la consommation lorsque le système est inactif.",
                difficulty: 'moyen',
                theme: 'Optimisation'
            },
            {
                id: 49,
                question: "Un système embarqué peut-il apprendre de son environnement ?",
                type: 'vrai_faux',
                correctAnswer: true,
                explanation: "Vrai. Avec l'IA embarquée, certains SE peuvent s'adapter et apprendre.",
                difficulty: 'facile',
                theme: 'IA Embarquée'
            },
            {
                id: 50,
                question: "Quelle est la prédiction pour le marché des SE d'ici 2030 ?",
                type: 'qcm',
                options: [
                    "Stagnation",
                    "Doublement",
                    "Réduction de moitié",
                    "Multiplication par 10"
                ],
                correctAnswer: 1,
                explanation: "Le marché devrait atteindre environ 162 milliards de dollars d'ici 2030, presque le double de 2022.",
                difficulty: 'moyen',
                theme: 'Marché'
            }
        ],
        
        architecture: [
            {
                id: 51,
                question: "Quels sont les deux types principaux de composants d'un système embarqué ?",
                type: 'qcm',
                options: [
                    "Matériels et logiciels",
                    "Électriques et mécaniques",
                    "Internes et externes",
                    "Analogiques et numériques"
                ],
                correctAnswer: 0,
                explanation: "Un système embarqué est composé de parties matérielles (hardware) et logicielles (software) étroitement intégrées.",
                difficulty: 'facile',
                theme: 'Composants'
            },
            {
                id: 52,
                question: "Quelle est la fonction de la mémoire ROM dans un système embarqué ?",
                type: 'qcm',
                options: [
                    "Stocker les données temporaires",
                    "Stocker le programme de démarrage et le firmware",
                    "Gérer les entrées/sorties",
                    "Contrôler la consommation d'énergie"
                ],
                correctAnswer: 1,
                explanation: "La ROM (Read-Only Memory) stocke le programme de démarrage et le firmware qui ne change pas fréquemment.",
                difficulty: 'facile',
                theme: 'Mémoire'
            },
            {
                id: 53,
                question: "Qu'est-ce qu'un RTOS ?",
                type: 'qcm',
                options: [
                    "Un langage de programmation",
                    "Un type de microprocesseur",
                    "Un système d'exploitation temps réel",
                    "Un protocole de communication"
                ],
                correctAnswer: 2,
                explanation: "RTOS (Real-Time Operating System) est un système d'exploitation conçu pour répondre aux contraintes temporelles.",
                difficulty: 'moyen',
                theme: 'Logiciel'
            },
            {
                id: 54,
                question: "L'architecture Harvard sépare la mémoire de programme et la mémoire de données.",
                type: 'vrai_faux',
                correctAnswer: true,
                explanation: "Vrai. L'architecture Harvard utilise des mémoires et bus séparés pour le programme et les données.",
                difficulty: 'facile',
                theme: 'Architecture'
            },
            {
                id: 55,
                question: "Quel est l'avantage principal de l'architecture Von Neumann ?",
                type: 'qcm',
                options: [
                    "Vitesse d'exécution supérieure",
                    "Simplicité et coût réduit",
                    "Sécurité accrue",
                    "Consommation d'énergie réduite"
                ],
                correctAnswer: 1,
                explanation: "L'architecture Von Neumann est plus simple et économique car elle utilise une mémoire unique pour code et données.",
                difficulty: 'moyen',
                theme: 'Architecture'
            },
            {
                id: 56,
                question: "Quel composant est responsable du traitement des données dans un SE ?",
                type: 'qcm',
                options: [
                    "Mémoire RAM",
                    "Microprocesseur/microcontrôleur",
                    "Convertisseur A/D",
                    "Bus système"
                ],
                correctAnswer: 1,
                explanation: "Le microprocesseur ou microcontrôleur est le 'cerveau' qui traite les données.",
                difficulty: 'facile',
                theme: 'Composants'
            },
            {
                id: 57,
                question: "Quelle est la fonction d'un convertisseur A/N (ADC) ?",
                type: 'qcm',
                options: [
                    "Convertir numérique vers analogique",
                    "Convertir analogique vers numérique",
                    "Amplifier les signaux",
                    "Filtrer le bruit"
                ],
                correctAnswer: 1,
                explanation: "L'ADC (Analog to Digital Converter) convertit les signaux analogiques des capteurs en données numériques.",
                difficulty: 'moyen',
                theme: 'Composants'
            },
            {
                id: 58,
                question: "Quel type de mémoire nécessite un rafraîchissement périodique ?",
                type: 'qcm',
                options: [
                    "SRAM",
                    "DRAM",
                    "ROM",
                    "EEPROM"
                ],
                correctAnswer: 1,
                explanation: "La DRAM (Dynamic RAM) doit être rafraîchie périodiquement pour conserver ses données.",
                difficulty: 'moyen',
                theme: 'Mémoire'
            },
            {
                id: 59,
                question: "Quelle mémoire est effaçable par ultraviolets ?",
                type: 'qcm',
                options: [
                    "PROM",
                    "EPROM",
                    "EEPROM",
                    "Flash"
                ],
                correctAnswer: 1,
                explanation: "L'EPROM (Erasable PROM) peut être effacée par exposition aux ultraviolets.",
                difficulty: 'difficile',
                theme: 'Mémoire'
            },
            {
                id: 60,
                question: "Que signifie ALU dans l'architecture d'un processeur ?",
                type: 'qcm',
                options: [
                    "Arithmetic Logic Unit",
                    "Analog Logic Unit",
                    "Address Logic Unit",
                    "Application Logic Unit"
                ],
                correctAnswer: 0,
                explanation: "ALU signifie Arithmetic Logic Unit (Unité Arithmétique et Logique).",
                difficulty: 'facile',
                theme: 'Architecture'
            },
            {
                id: 61,
                question: "Quel est le rôle des registres dans un CPU ?",
                type: 'qcm',
                options: [
                    "Stocker des données temporaires pendant le traitement",
                    "Contrôler les périphériques externes",
                    "Gérer la mémoire principale",
                    "Convertir les signaux analogiques"
                ],
                correctAnswer: 0,
                explanation: "Les registres stockent temporairement des données pendant les opérations du CPU.",
                difficulty: 'moyen',
                theme: 'Architecture'
            },
            {
                id: 62,
                question: "Quelle est la fonction principale d'un bus système ?",
                type: 'qcm',
                options: [
                    "Alimenter les composants",
                    "Transporter les données entre composants",
                    "Refroidir le système",
                    "Protéger contre les surtensions"
                ],
                correctAnswer: 1,
                explanation: "Le bus système transporte les données, adresses et signaux de contrôle entre les composants.",
                difficulty: 'moyen',
                theme: 'Architecture'
            },
            {
                id: 63,
                question: "Quel type de mémoire conserve ses données sans alimentation électrique ?",
                type: 'qcm',
                options: [
                    "RAM",
                    "SRAM",
                    "DRAM",
                    "ROM"
                ],
                correctAnswer: 3,
                explanation: "La ROM (Read-Only Memory) est non volatile et conserve ses données sans alimentation.",
                difficulty: 'facile',
                theme: 'Mémoire'
            },
            {
                id: 64,
                question: "Quelle couche logicielle gère directement le matériel dans un SE ?",
                type: 'qcm',
                options: [
                    "Application",
                    "Middleware",
                    "Système d'exploitation",
                    "Pilotes de périphériques"
                ],
                correctAnswer: 3,
                explanation: "Les pilotes de périphériques (drivers) gèrent directement l'interaction avec le matériel.",
                difficulty: 'moyen',
                theme: 'Logiciel'
            },
            {
                id: 65,
                question: "Quelle est la fonction du middleware dans un SE ?",
                type: 'qcm',
                options: [
                    "Exécuter l'application utilisateur",
                    "Fournir des services communs aux applications",
                    "Gérer la mémoire physique",
                    "Contrôler l'alimentation"
                ],
                correctAnswer: 1,
                explanation: "Le middleware fournit des services communs comme la communication réseau ou la gestion de fichiers.",
                difficulty: 'difficile',
                theme: 'Logiciel'
            },
            // Ajouter 35 questions supplémentaires pour atteindre 50
            {
                id: 66,
                question: "Quelle est la différence entre SRAM et DRAM ?",
                type: 'qcm',
                options: [
                    "SRAM est plus rapide mais plus chère",
                    "DRAM est plus rapide mais plus chère",
                    "SRAM nécessite un rafraîchissement",
                    "Il n'y a pas de différence"
                ],
                correctAnswer: 0,
                explanation: "La SRAM est plus rapide mais plus chère que la DRAM, qui nécessite un rafraîchissement périodique.",
                difficulty: 'moyen',
                theme: 'Mémoire'
            },
            {
                id: 67,
                question: "Un SoC (System on Chip) intègre tous les composants d'un système sur une seule puce.",
                type: 'vrai_faux',
                correctAnswer: true,
                explanation: "Vrai. Un SoC intègre CPU, mémoire, interfaces et souvent des circuits analogiques sur une seule puce.",
                difficulty: 'facile',
                theme: 'Architecture'
            },
            {
                id: 68,
                question: "Quel est le rôle d'un watchdog timer ?",
                type: 'qcm',
                options: [
                    "Mesurer le temps précisément",
                    "Redémarrer le système en cas de blocage",
                    "Générer des signaux PWM",
                    "Contrôler la température"
                ],
                correctAnswer: 1,
                explanation: "Le watchdog timer redémarre le système si le programme ne le réinitialise pas périodiquement.",
                difficulty: 'moyen',
                theme: 'Sécurité'
            },
            {
                id: 69,
                question: "Quelle interface utilise seulement 2 fils pour la communication ?",
                type: 'qcm',
                options: [
                    "SPI",
                    "I2C",
                    "UART",
                    "USB"
                ],
                correctAnswer: 1,
                explanation: "I2C utilise seulement 2 fils : SDA (données) et SCL (horloge).",
                difficulty: 'moyen',
                theme: 'Communication'
            },
            {
                id: 70,
                question: "La mémoire flash est plus rapide que la SRAM en lecture.",
                type: 'vrai_faux',
                correctAnswer: false,
                explanation: "Faux. La SRAM est plus rapide que la flash, mais la flash est non volatile.",
                difficulty: 'difficile',
                theme: 'Mémoire'
            },
            {
                id: 71,
                question: "Quelle est la fonction d'un DMA (Direct Memory Access) ?",
                type: 'qcm',
                options: [
                    "Gérer la mémoire centrale",
                    "Transférer des données sans intervention du CPU",
                    "Convertir des signaux analogiques",
                    "Contrôler l'alimentation"
                ],
                correctAnswer: 1,
                explanation: "Le DMA permet des transferts de données entre périphériques et mémoire sans l'intervention du CPU.",
                difficulty: 'difficile',
                theme: 'Architecture'
            },
            {
                id: 72,
                question: "Un FPGA peut être reprogrammé pour implémenter différentes fonctions matérielles.",
                type: 'vrai_faux',
                correctAnswer: true,
                explanation: "Vrai. Les FPGA (Field Programmable Gate Arrays) sont reconfigurables pour différentes applications.",
                difficulty: 'moyen',
                theme: 'Composants'
            },
            {
                id: 73,
                question: "Quelle est la différence entre interruption matérielle et logicielle ?",
                type: 'qcm',
                options: [
                    "Aucune différence",
                    "Les interruptions matérielles viennent des périphériques",
                    "Les interruptions logicielles sont plus rapides",
                    "Seules les interruptions matérielles existent"
                ],
                correctAnswer: 1,
                explanation: "Les interruptions matérielles sont générées par des périphériques, les logicielles par le programme.",
                difficulty: 'difficile',
                theme: 'Architecture'
            },
            {
                id: 74,
                question: "Le pipeline dans un CPU permet d'exécuter plusieurs instructions simultanément.",
                type: 'vrai_faux',
                correctAnswer: true,
                explanation: "Vrai. Le pipeline permet d'exécuter plusieurs instructions en parallèle sur différentes étapes.",
                difficulty: 'moyen',
                theme: 'Architecture'
            },
            {
                id: 75,
                question: "Quel est l'avantage d'une mémoire cache ?",
                type: 'qcm',
                options: [
                    "Réduit le coût",
                    "Augmente la capacité",
                    "Réduit les accès à la mémoire principale",
                    "Facilite la programmation"
                ],
                correctAnswer: 2,
                explanation: "La cache stocke les données fréquemment utilisées pour réduire les accès à la mémoire principale plus lente.",
                difficulty: 'moyen',
                theme: 'Mémoire'
            },
            {
                id: 76,
                question: "Un microcontrôleur avec architecture RISC a généralement plus d'instructions qu'un CISC.",
                type: 'vrai_faux',
                correctAnswer: false,
                explanation: "Faux. RISC (Reduced Instruction Set) a moins d'instructions mais plus simples que CISC.",
                difficulty: 'difficile',
                theme: 'Architecture'
            },
            {
                id: 77,
                question: "Quelle est la fonction d'un PLL (Phase Locked Loop) ?",
                type: 'qcm',
                options: [
                    "Générer différentes fréquences à partir d'une source",
                    "Contrôler la tension d'alimentation",
                    "Gérer la mémoire",
                    "Convertir analogique/numérique"
                ],
                correctAnswer: 0,
                explanation: "Un PLL permet de générer différentes fréquences d'horloge à partir d'une source de référence.",
                difficulty: 'difficile',
                theme: 'Composants'
            },
            {
                id: 78,
                question: "La mémoire EEPROM peut être effacée et reprogrammée par blocs.",
                type: 'vrai_faux',
                correctAnswer: false,
                explanation: "Faux. L'EEPROM peut être effacée et reprogrammée octet par octet, contrairement à la flash qui efface par blocs.",
                difficulty: 'difficile',
                theme: 'Mémoire'
            },
            {
                id: 79,
                question: "Quel est le rôle d'un MMU (Memory Management Unit) ?",
                type: 'qcm',
                options: [
                    "Gérer l'alimentation de la mémoire",
                    "Traduire les adresses virtuelles en physiques",
                    "Rafraîchir la DRAM",
                    "Contrôler la température"
                ],
                correctAnswer: 1,
                explanation: "Le MMU traduit les adresses virtuelles en adresses physiques et gère la protection mémoire.",
                difficulty: 'difficile',
                theme: 'Architecture'
            },
            {
                id: 80,
                question: "Un bus série est toujours plus lent qu'un bus parallèle.",
                type: 'vrai_faux',
                correctAnswer: false,
                explanation: "Faux. Les bus série modernes (comme PCIe) peuvent être beaucoup plus rapides que les bus parallèles traditionnels.",
                difficulty: 'moyen',
                theme: 'Communication'
            },
            {
                id: 81,
                question: "Quelle est la différence entre Von Neumann et Harvard ?",
                type: 'qcm',
                options: [
                    "Nombre de processeurs",
                    "Séparation mémoire code/données",
                    "Vitesse d'horloge",
                    "Consommation d'énergie"
                ],
                correctAnswer: 1,
                explanation: "Harvard sépare mémoire code et données, Von Neumann les partage.",
                difficulty: 'moyen',
                theme: 'Architecture'
            },
            {
                id: 82,
                question: "Un SoC inclut toujours une mémoire RAM embarquée.",
                type: 'vrai_faux',
                correctAnswer: true,
                explanation: "Vrai. La plupart des SoC incluent de la mémoire RAM embarquée pour de meilleures performances.",
                difficulty: 'facile',
                theme: 'Architecture'
            },
            {
                id: 83,
                question: "Quel est l'avantage d'une architecture multicœur ?",
                type: 'qcm',
                options: [
                    "Réduction de la consommation",
                    "Augmentation des performances parallèles",
                    "Simplification de la programmation",
                    "Réduction du coût"
                ],
                correctAnswer: 1,
                explanation: "L'architecture multicœur permet d'exécuter plusieurs tâches en parallèle, augmentant les performances.",
                difficulty: 'moyen',
                theme: 'Architecture'
            },
            {
                id: 84,
                question: "Le bit-banging permet d'émuler des protocoles matériels en logiciel.",
                type: 'vrai_faux',
                correctAnswer: true,
                explanation: "Vrai. Le bit-banging utilise des broches GPIO pour émuler des protocoles comme I2C ou SPI en logiciel.",
                difficulty: 'difficile',
                theme: 'Programmation'
            },
            {
                id: 85,
                question: "Quelle est la fonction d'un brown-out detector ?",
                type: 'qcm',
                options: [
                    "Détecter les surtensions",
                    "Détecter les baisses de tension",
                    "Mesurer la température",
                    "Contrôler la fréquence"
                ],
                correctAnswer: 1,
                explanation: "Le brown-out detector détecte les baisses de tension et peut déclencher un reset pour éviter les dysfonctionnements.",
                difficulty: 'difficile',
                theme: 'Sécurité'
            },
            {
                id: 86,
                question: "Un microcontrôleur 32-bit traite des données de 32 bits par cycle.",
                type: 'vrai_faux',
                correctAnswer: true,
                explanation: "Vrai. Un microcontrôleur 32-bit traite des données de 32 bits par instruction.",
                difficulty: 'facile',
                theme: 'Architecture'
            },
            {
                id: 87,
                question: "Quelle interface est asynchrone ?",
                type: 'qcm',
                options: [
                    "SPI",
                    "I2C",
                    "UART",
                    "USB"
                ],
                correctAnswer: 2,
                explanation: "L'UART est asynchrone, n'utilisant pas d'horloge partagée entre émetteur et récepteur.",
                difficulty: 'moyen',
                theme: 'Communication'
            },
            {
                id: 88,
                question: "La mémoire NOR flash est plus lente en écriture que la NAND flash.",
                type: 'vrai_faux',
                correctAnswer: true,
                explanation: "Vrai. La NOR est plus rapide en lecture mais plus lente en écriture que la NAND.",
                difficulty: 'difficile',
                theme: 'Mémoire'
            },
            {
                id: 89,
                question: "Quel est le rôle d'un régulateur de tension dans un SE ?",
                type: 'qcm',
                options: [
                    "Générer des fréquences d'horloge",
                    "Stabiliser la tension d'alimentation",
                    "Convertir analogique/numérique",
                    "Gérer la mémoire"
                ],
                correctAnswer: 1,
                explanation: "Le régulateur stabilise la tension d'alimentation pour les composants électroniques.",
                difficulty: 'facile',
                theme: 'Alimentation'
            },
            {
                id: 90,
                question: "Un système embarqué peut utiliser plusieurs types de mémoire différentes.",
                type: 'vrai_faux',
                correctAnswer: true,
                explanation: "Vrai. Souvent une combinaison de flash (programme), RAM (données) et EEPROM (configuration).",
                difficulty: 'facile',
                theme: 'Mémoire'
            },
            {
                id: 91,
                question: "Quelle est la fonction d'un contrôleur d'interruption ?",
                type: 'qcm',
                options: [
                    "Générer des interruptions",
                    "Gérer la priorité des interruptions",
                    "Convertir des signaux",
                    "Alimenter les périphériques"
                ],
                correctAnswer: 1,
                explanation: "Il gère les priorités et le routage des différentes sources d'interruption vers le CPU.",
                difficulty: 'difficile',
                theme: 'Architecture'
            },
            {
                id: 92,
                question: "La consommation d'un processeur est proportionnelle au carré de la fréquence.",
                type: 'vrai_faux',
                correctAnswer: true,
                explanation: "Vrai. La consommation dynamique est proportionnelle à C × V² × f (C: capacité, V: tension, f: fréquence).",
                difficulty: 'difficile',
                theme: 'Consommation'
            },
            {
                id: 93,
                question: "Quel est l'avantage du DVFS (Dynamic Voltage and Frequency Scaling) ?",
                type: 'qcm',
                options: [
                    "Augmentation des performances",
                    "Réduction de la consommation",
                    "Simplification matérielle",
                    "Amélioration de la fiabilité"
                ],
                correctAnswer: 1,
                explanation: "Le DVFS adapte tension et fréquence à la charge, réduisant la consommation.",
                difficulty: 'difficile',
                theme: 'Optimisation'
            },
            {
                id: 94,
                question: "Un bus CAN est utilisé principalement dans l'automobile.",
                type: 'vrai_faux',
                correctAnswer: true,
                explanation: "Vrai. Le bus CAN (Controller Area Network) est largement utilisé dans les systèmes automobiles.",
                difficulty: 'moyen',
                theme: 'Communication'
            },
            {
                id: 95,
                question: "Quelle est la différence entre mémoire statique et dynamique ?",
                type: 'qcm',
                options: [
                    "La vitesse",
                    "Le besoin de rafraîchissement",
                    "La consommation",
                    "Toutes ces réponses"
                ],
                correctAnswer: 3,
                explanation: "La SRAM est plus rapide, plus chère, ne nécessite pas de rafraîchissement. La DRAM est moins chère mais nécessite un rafraîchissement.",
                difficulty: 'moyen',
                theme: 'Mémoire'
            },
            {
                id: 96,
                question: "Un microcontrôleur avec FPU peut traiter les nombres flottants plus rapidement.",
                type: 'vrai_faux',
                correctAnswer: true,
                explanation: "Vrai. L'FPU (Floating Point Unit) accélère les calculs en virgule flottante matériellement.",
                difficulty: 'moyen',
                theme: 'Architecture'
            },
            {
                id: 97,
                question: "Quelle interface permet les plus hauts débits parmi ces options ?",
                type: 'qcm',
                options: [
                    "I2C",
                    "SPI",
                    "UART",
                    "USB 3.0"
                ],
                correctAnswer: 3,
                explanation: "USB 3.0 peut atteindre 5 Gbps, bien plus que les autres interfaces série.",
                difficulty: 'facile',
                theme: 'Communication'
            },
            {
                id: 98,
                question: "La mémoire MRAM combine les avantages de la DRAM et de la flash.",
                type: 'vrai_faux',
                correctAnswer: true,
                explanation: "Vrai. La MRAM est rapide comme la SRAM, non volatile comme la flash, avec une endurance élevée.",
                difficulty: 'difficile',
                theme: 'Mémoire'
            },
            {
                id: 99,
                question: "Quel est le rôle d'un boot ROM ?",
                type: 'qcm',
                options: [
                    "Exécuter le système d'exploitation",
                    "Charger le bootloader",
                    "Stocker les données utilisateur",
                    "Gérer les périphériques"
                ],
                correctAnswer: 1,
                explanation: "La boot ROM contient le code initial qui charge le bootloader ou le système d'exploitation.",
                difficulty: 'moyen',
                theme: 'Démarrage'
            },
            {
                id: 100,
                question: "Un système embarqué avec sécurité matérielle (HSM) protège les clés cryptographiques.",
                type: 'vrai_faux',
                correctAnswer: true,
                explanation: "Vrai. L'HSM (Hardware Security Module) protège les opérations cryptographiques et les clés.",
                difficulty: 'moyen',
                theme: 'Sécurité'
            }
        ],
        
        microcontrollers: [
            {
                id: 101,
                question: "Quelle est la principale différence entre un microprocesseur et un microcontrôleur ?",
                type: 'qcm',
                options: [
                    "Le microcontrôleur est plus rapide",
                    "Le microcontrôleur intègre CPU, mémoire et périphériques sur une seule puce",
                    "Le microprocesseur coûte moins cher",
                    "Il n'y a pas de différence"
                ],
                correctAnswer: 1,
                explanation: "Un microcontrôleur intègre sur une seule puce le CPU, la mémoire et des périphériques d'E/S.",
                difficulty: 'moyen',
                theme: 'Définition'
            },
            {
                id: 102,
                question: "Quel microcontrôleur est utilisé dans l'Arduino UNO ?",
                type: 'qcm',
                options: [
                    "ATmega2560",
                    "ATmega328P",
                    "ESP32",
                    "STM32F103"
                ],
                correctAnswer: 1,
                explanation: "L'Arduino UNO utilise le microcontrôleur ATmega328P d'Atmel (maintenant Microchip).",
                difficulty: 'facile',
                theme: 'Exemples'
            },
            {
                id: 103,
                question: "Quelle architecture est utilisée par la plupart des microcontrôleurs modernes ?",
                type: 'qcm',
                options: [
                    "Von Neumann",
                    "Harvard",
                    "RISC",
                    "CISC"
                ],
                correctAnswer: 1,
                explanation: "La plupart des microcontrôleurs utilisent l'architecture Harvard pour de meilleures performances.",
                difficulty: 'moyen',
                theme: 'Architecture'
            },
            {
                id: 104,
                question: "Qu'est-ce que RISC signifie ?",
                type: 'qcm',
                options: [
                    "Reduced Instruction Set Computer",
                    "Random Instruction Set Computer",
                    "Rapid Instruction Set Computer",
                    "Reliable Instruction Set Computer"
                ],
                correctAnswer: 0,
                explanation: "RISC signifie Reduced Instruction Set Computer.",
                difficulty: 'moyen',
                theme: 'Architecture'
            },
            {
                id: 105,
                question: "Quel est l'avantage principal d'une architecture RISC ?",
                type: 'qcm',
                options: [
                    "Instructions plus complexes",
                    "Moins de cycles d'horloge par instruction",
                    "Moins de mémoire nécessaire",
                    "Compatibilité avec plus d'applications"
                ],
                correctAnswer: 1,
                explanation: "Les architectures RISC ont généralement moins de cycles d'horloge par instruction, augmentant les performances.",
                difficulty: 'difficile',
                theme: 'Architecture'
            },
            {
                id: 106,
                question: "Quel type de microcontrôleur est le 8051 ?",
                type: 'qcm',
                options: [
                    "8-bit",
                    "16-bit",
                    "32-bit",
                    "64-bit"
                ],
                correctAnswer: 0,
                explanation: "Le 8051 est un microcontrôleur 8-bit classique.",
                difficulty: 'facile',
                theme: 'Types'
            },
            {
                id: 107,
                question: "Quelle famille de microcontrôleurs est basée sur l'architecture ARM ?",
                type: 'qcm',
                options: [
                    "PIC",
                    "AVR",
                    "STM32",
                    "8051"
                ],
                correctAnswer: 2,
                explanation: "Les STM32 de STMicroelectronics sont basés sur l'architecture ARM Cortex-M.",
                difficulty: 'moyen',
                theme: 'Familles'
            },
            {
                id: 108,
                question: "Quel est le rôle des timers dans un microcontrôleur ?",
                type: 'qcm',
                options: [
                    "Gérer la mémoire",
                    "Mesurer des intervalles de temps",
                    "Convertir des signaux analogiques",
                    "Communiquer avec d'autres dispositifs"
                ],
                correctAnswer: 1,
                explanation: "Les timers mesurent des intervalles de temps et génèrent des délais précis.",
                difficulty: 'moyen',
                theme: 'Fonctionnalités'
            },
            {
                id: 109,
                question: "Quelle interface de communication est synchrone et à 4 fils ?",
                type: 'qcm',
                options: [
                    "UART",
                    "I2C",
                    "SPI",
                    "USB"
                ],
                correctAnswer: 2,
                explanation: "SPI (Serial Peripheral Interface) utilise 4 fils : MISO, MOSI, SCK et SS.",
                difficulty: 'moyen',
                theme: 'Communication'
            },
            {
                id: 110,
                question: "Quelle est la différence entre microcontrôleur avec mémoire externe et embarquée ?",
                type: 'qcm',
                options: [
                    "La vitesse d'exécution",
                    "La présence ou non de mémoire sur la puce",
                    "Le type d'instructions",
                    "La consommation d'énergie"
                ],
                correctAnswer: 1,
                explanation: "Un microcontrôleur avec mémoire embarquée a la mémoire sur la même puce, tandis que l'autre nécessite une mémoire externe.",
                difficulty: 'difficile',
                theme: 'Mémoire'
            },
            // Ajouter 40 questions supplémentaires pour atteindre 50
            {
                id: 111,
                question: "Le microcontrôleur AVR utilisé dans Arduino utilise l'architecture RISC.",
                type: 'vrai_faux',
                correctAnswer: true,
                explanation: "Vrai. Les microcontrôleurs AVR utilisent une architecture RISC 8-bit.",
                difficulty: 'moyen',
                theme: 'Architecture'
            },
            {
                id: 112,
                question: "Quel est le rôle d'un ADC (Analog to Digital Converter) dans un microcontrôleur ?",
                type: 'qcm',
                options: [
                    "Convertir numérique vers analogique",
                    "Convertir analogique vers numérique",
                    "Amplifier les signaux",
                    "Filtrer le bruit"
                ],
                correctAnswer: 1,
                explanation: "L'ADC convertit les signaux analogiques des capteurs en valeurs numériques pour traitement.",
                difficulty: 'moyen',
                theme: 'Périphériques'
            },
            {
                id: 113,
                question: "Un microcontrôleur avec PWM peut générer des signaux analogiques.",
                type: 'vrai_faux',
                correctAnswer: true,
                explanation: "Vrai. Le PWM permet de simuler une sortie analogique en variant le rapport cyclique.",
                difficulty: 'facile',
                theme: 'Périphériques'
            },
            {
                id: 114,
                question: "Quelle est la fréquence typique d'un microcontrôleur AVR comme l'ATmega328P ?",
                type: 'qcm',
                options: [
                    "8 MHz",
                    "16 MHz",
                    "32 MHz",
                    "64 MHz"
                ],
                correctAnswer: 1,
                explanation: "L'ATmega328P fonctionne typiquement à 16 MHz (20 MHz maximum).",
                difficulty: 'facile',
                theme: 'Caractéristiques'
            },
            {
                id: 115,
                question: "Un microcontrôleur 32-bit est toujours plus rapide qu'un 8-bit.",
                type: 'vrai_faux',
                correctAnswer: false,
                explanation: "Faux. La vitesse dépend aussi de la fréquence d'horloge, de l'architecture et de l'application.",
                difficulty: 'moyen',
                theme: 'Comparaison'
            },
            {
                id: 116,
                question: "Quel microcontrôleur est populaire pour les applications IoT avec WiFi intégré ?",
                type: 'qcm',
                options: [
                    "ATmega328P",
                    "ESP32",
                    "STM32F103",
                    "PIC16F877"
                ],
                correctAnswer: 1,
                explanation: "L'ESP32 d'Espressif est très populaire pour l'IoT grâce à son WiFi et Bluetooth intégrés.",
                difficulty: 'facile',
                theme: 'IoT'
            },
            {
                id: 117,
                question: "Un microcontrôleur peut fonctionner sans quartz externe.",
                type: 'vrai_faux',
                correctAnswer: true,
                explanation: "Vrai. Beaucoup de microcontrôleurs ont un oscillateur interne pour économiser composants et espace.",
                difficulty: 'facile',
                theme: 'Composants'
            },
            {
                id: 118,
                question: "Quelle est la fonction d'un comparateur analogique dans un microcontrôleur ?",
                type: 'qcm',
                options: [
                    "Comparer deux tensions",
                    "Convertir numérique/analogique",
                    "Générer une fréquence",
                    "Communiquer avec d'autres puces"
                ],
                correctAnswer: 0,
                explanation: "Un comparateur analogique compare deux tensions et donne un résultat binaire.",
                difficulty: 'difficile',
                theme: 'Périphériques'
            },
            {
                id: 119,
                question: "Les microcontrôleurs PIC sont développés par Microchip.",
                type: 'vrai_faux',
                correctAnswer: true,
                explanation: "Vrai. Microchip Technology (anciennement Microchip et Atmel) développe les microcontrôleurs PIC.",
                difficulty: 'facile',
                theme: 'Familles'
            },
            {
                id: 120,
                question: "Quel est l'avantage d'un microcontrôleur à très faible consommation ?",
                type: 'qcm',
                options: [
                    "Vitesse élevée",
                    "Longue durée de vie sur batterie",
                    "Grande mémoire",
                    "Interface graphique"
                ],
                correctAnswer: 1,
                explanation: "Les microcontrôleurs à faible consommation sont essentiels pour les applications sur batterie.",
                difficulty: 'facile',
                theme: 'Consommation'
            },
            {
                id: 121,
                question: "Un microcontrôleur peut avoir plusieurs ADCs.",
                type: 'vrai_faux',
                correctAnswer: true,
                explanation: "Vrai. Beaucoup de microcontrôleurs ont plusieurs canaux ADC pour mesurer plusieurs signaux simultanément.",
                difficulty: 'facile',
                theme: 'Périphériques'
            },
            {
                id: 122,
                question: "Quelle est la différence entre registre et mémoire ?",
                type: 'qcm',
                options: [
                    "Aucune différence",
                    "Les registres sont plus rapides mais en nombre limité",
                    "La mémoire est plus rapide",
                    "Seuls les registres peuvent être lus"
                ],
                correctAnswer: 1,
                explanation: "Les registres sont très rapides mais peu nombreux, la mémoire est plus lente mais plus grande.",
                difficulty: 'moyen',
                theme: 'Architecture'
            },
            {
                id: 123,
                question: "Un microcontrôleur ARM Cortex-M est généralement 32-bit.",
                type: 'vrai_faux',
                correctAnswer: true,
                explanation: "Vrai. Les Cortex-M sont des microcontrôleurs 32-bit pour applications embarquées.",
                difficulty: 'facile',
                theme: 'Familles'
            },
            {
                id: 124,
                question: "Quelle est la fonction d'un watchdog timer ?",
                type: 'qcm',
                options: [
                    "Mesurer le temps précisément",
                    "Redémarrer en cas de blocage",
                    "Générer des signaux PWM",
                    "Convertir des signaux"
                ],
                correctAnswer: 1,
                explanation: "Le watchdog timer redémarre le microcontrôleur si le programme ne le réinitialise pas périodiquement.",
                difficulty: 'moyen',
                theme: 'Sécurité'
            },
            {
                id: 125,
                question: "Un microcontrôleur peut avoir plusieurs interfaces I2C.",
                type: 'vrai_faux',
                correctAnswer: true,
                explanation: "Vrai. Certains microcontrôleurs ont plusieurs modules I2C pour communiquer avec plusieurs périphériques.",
                difficulty: 'facile',
                theme: 'Communication'
            },
            {
                id: 126,
                question: "Quelle est la résolution typique d'un ADC dans un microcontrôleur ?",
                type: 'qcm',
                options: [
                    "8 bits",
                    "10-12 bits",
                    "16 bits",
                    "24 bits"
                ],
                correctAnswer: 1,
                explanation: "La plupart des microcontrôleurs ont des ADC 10-12 bits, certains haut de gamme ont 16 bits.",
                difficulty: 'moyen',
                theme: 'Caractéristiques'
            },
            {
                id: 127,
                question: "Un microcontrôleur peut fonctionner en mode basse consommation.",
                type: 'vrai_faux',
                correctAnswer: true,
                explanation: "Vrai. La plupart ont plusieurs modes de sommeil pour réduire la consommation.",
                difficulty: 'facile',
                theme: 'Consommation'
            },
            {
                id: 128,
                question: "Quelle est la différence entre flash et EEPROM ?",
                type: 'qcm',
                options: [
                    "La vitesse",
                    "L'effacement par blocs vs octets",
                    "La consommation",
                    "Toutes ces réponses"
                ],
                correctAnswer: 1,
                explanation: "La flash s'efface par blocs, l'EEPROM octet par octet. L'EEPROM a plus d'endurance mais est plus chère.",
                difficulty: 'difficile',
                theme: 'Mémoire'
            },
            {
                id: 129,
                question: "Un microcontrôleur peut être programmé via un port ICSP.",
                type: 'vrai_faux',
                correctAnswer: true,
                explanation: "Vrai. L'ICSP (In-Circuit Serial Programming) permet de programmer le microcontrôleur sur la carte.",
                difficulty: 'facile',
                theme: 'Programmation'
            },
            {
                id: 130,
                question: "Quelle est la tension d'alimentation typique d'un microcontrôleur 3.3V ?",
                type: 'qcm',
                options: [
                    "1.8-3.6V",
                    "3.0-3.6V",
                    "3.3V exactement",
                    "2.7-5.5V"
                ],
                correctAnswer: 1,
                explanation: "Les microcontrôleurs 3.3V fonctionnent typiquement entre 3.0V et 3.6V.",
                difficulty: 'moyen',
                theme: 'Alimentation'
            },
            {
                id: 131,
                question: "Un microcontrôleur peut avoir un DAC (Digital to Analog Converter).",
                type: 'vrai_faux',
                correctAnswer: true,
                explanation: "Vrai. Certains microcontrôleurs haut de gamme incluent des DAC pour générer des signaux analogiques.",
                difficulty: 'facile',
                theme: 'Périphériques'
            },
            {
                id: 132,
                question: "Quelle est la fonction d'un bootloader ?",
                type: 'qcm',
                options: [
                    "Démarrer le système",
                    "Permettre la mise à jour du programme",
                    "Gérer la mémoire",
                    "Contrôler les périphériques"
                ],
                correctAnswer: 1,
                explanation: "Le bootloader permet de mettre à jour le firmware via une interface série, USB, etc.",
                difficulty: 'moyen',
                theme: 'Démarrage'
            },
            {
                id: 133,
                question: "Un microcontrôleur 8-bit traite des données 8 bits à la fois.",
                type: 'vrai_faux',
                correctAnswer: true,
                explanation: "Vrai. Le bus de données est de 8 bits, traitant un octet par cycle.",
                difficulty: 'facile',
                theme: 'Architecture'
            },
            {
                id: 134,
                question: "Quelle interface est souvent utilisée pour programmer les microcontrôleurs ARM ?",
                type: 'qcm',
                options: [
                    "ICSP",
                    "JTAG/SWD",
                    "USB",
                    "I2C"
                ],
                correctAnswer: 1,
                explanation: "JTAG et SWD sont les interfaces standard pour programmer et déboguer les microcontrôleurs ARM.",
                difficulty: 'moyen',
                theme: 'Programmation'
            },
            {
                id: 135,
                question: "Un microcontrôleur peut fonctionner à différentes fréquences.",
                type: 'vrai_faux',
                correctAnswer: true,
                explanation: "Vrai. Beaucoup peuvent changer de fréquence pour optimiser performance/consommation.",
                difficulty: 'facile',
                theme: 'Caractéristiques'
            },
            {
                id: 136,
                question: "Quelle est la différence entre RTC et timer normal ?",
                type: 'qcm',
                options: [
                    "Aucune différence",
                    "Le RTC fonctionne même en basse consommation",
                    "Le timer est plus précis",
                    "Le RTC n'a pas d'interruption"
                ],
                correctAnswer: 1,
                explanation: "Le RTC (Real Time Clock) fonctionne avec une horloge basse consommation même quand le CPU est en veille.",
                difficulty: 'difficile',
                theme: 'Périphériques'
            },
            {
                id: 137,
                question: "Un microcontrôleur peut avoir une FPU (Floating Point Unit).",
                type: 'vrai_faux',
                correctAnswer: true,
                explanation: "Vrai. Certains microcontrôleurs 32-bit ont une FPU pour accélérer les calculs flottants.",
                difficulty: 'facile',
                theme: 'Architecture'
            },
            {
                id: 138,
                question: "Quelle est la fonction d'un DMA dans un microcontrôleur ?",
                type: 'qcm',
                options: [
                    "Gérer la mémoire",
                    "Transférer des données sans CPU",
                    "Convertir des signaux",
                    "Contrôler l'alimentation"
                ],
                correctAnswer: 1,
                explanation: "Le DMA transfère des données entre périphériques et mémoire sans l'intervention du CPU.",
                difficulty: 'difficile',
                theme: 'Architecture'
            },
            {
                id: 139,
                question: "Un microcontrôleur peut être utilisé sans programmation externe.",
                type: 'vrai_faux',
                correctAnswer: false,
                explanation: "Faux. Il doit être programmé avec un code pour effectuer des tâches spécifiques.",
                difficulty: 'facile',
                theme: 'Programmation'
            },
            {
                id: 140,
                question: "Quelle est la tension d'entrée maximale typique pour un ADC 5V ?",
                type: 'qcm',
                options: [
                    "3.3V",
                    "5V",
                    "12V",
                    "24V"
                ],
                correctAnswer: 1,
                explanation: "Un ADC référencé à 5V accepte typiquement des entrées de 0-5V.",
                difficulty: 'moyen',
                theme: 'Périphériques'
            },
            {
                id: 141,
                question: "Un microcontrôleur peut contrôler directement un moteur pas-à-pas.",
                type: 'vrai_faux',
                correctAnswer: true,
                explanation: "Vrai. Avec les bonnes interfaces et assez de courant de sortie, il peut contrôler des moteurs pas-à-pas.",
                difficulty: 'facile',
                theme: 'Applications'
            },
            {
                id: 142,
                question: "Quelle est la fonction d'un brown-out detector ?",
                type: 'qcm',
                options: [
                    "Détecter les surtensions",
                    "Détecter les baisses de tension",
                    "Mesurer la température",
                    "Contrôler la fréquence"
                ],
                correctAnswer: 1,
                explanation: "Il détecte les baisses de tension et peut déclencher un reset pour éviter les dysfonctionnements.",
                difficulty: 'difficile',
                theme: 'Sécurité'
            },
            {
                id: 143,
                question: "Un microcontrôleur peut avoir plusieurs cœurs.",
                type: 'vrai_faux',
                correctAnswer: true,
                explanation: "Vrai. Certains microcontrôleurs modernes comme l'ESP32 ont deux cœurs.",
                difficulty: 'facile',
                theme: 'Architecture'
            },
            {
                id: 144,
                question: "Quelle interface utilise le moins de broches pour la communication ?",
                type: 'qcm',
                options: [
                    "UART",
                    "I2C",
                    "SPI",
                    "USB"
                ],
                correctAnswer: 1,
                correctAnswer: 1,
                explanation: "I2C utilise seulement 2 fils (SDA et SCL) pour la communication.",
                difficulty: 'moyen',
                theme: 'Communication'
            },
            {
                id: 145,
                question: "Un microcontrôleur peut fonctionner à partir de 1.8V.",
                type: 'vrai_faux',
                correctAnswer: true,
                explanation: "Vrai. Certains microcontrôleurs basse consommation fonctionnent à partir de 1.8V.",
                difficulty: 'facile',
                theme: 'Alimentation'
            },
            {
                id: 146,
                question: "Quelle est la fonction d'un PLL dans un microcontrôleur ?",
                type: 'qcm',
                options: [
                    "Générer différentes fréquences",
                    "Contrôler la tension",
                    "Gérer la mémoire",
                    "Convertir des signaux"
                ],
                correctAnswer: 0,
                explanation: "Le PLL permet de générer des fréquences d'horloge plus élevées à partir d'une source basse fréquence.",
                difficulty: 'difficile',
                theme: 'Composants'
            },
            {
                id: 147,
                question: "Un microcontrôleur peut avoir une interface USB intégrée.",
                type: 'vrai_faux',
                correctAnswer: true,
                explanation: "Vrai. Beaucoup de microcontrôleurs modernes ont un contrôleur USB intégré.",
                difficulty: 'facile',
                theme: 'Communication'
            },
            {
                id: 148,
                question: "Quelle est la différence entre interruption et polling ?",
                type: 'qcm',
                options: [
                    "Aucune différence",
                    "L'interruption est plus efficace",
                    "Le polling est plus rapide",
                    "Seule l'interruption existe"
                ],
                correctAnswer: 1,
                explanation: "L'interruption est plus efficace car le CPU n'a pas à vérifier constamment l'état des périphériques.",
                difficulty: 'moyen',
                theme: 'Programmation'
            },
            {
                id: 149,
                question: "Un microcontrôleur peut être utilisé pour le traitement d'images.",
                type: 'vrai_faux',
                correctAnswer: true,
                explanation: "Vrai. Certains microcontrôleurs puissants peuvent effectuer un traitement d'image basique.",
                difficulty: 'facile',
                theme: 'Applications'
            },
            {
                id: 150,
                question: "Quelle est la durée de vie typique de la mémoire flash d'un microcontrôleur ?",
                type: 'qcm',
                options: [
                    "100 cycles",
                    "1 000 cycles",
                    "10 000 cycles",
                    "100 000 cycles"
                ],
                correctAnswer: 3,
                explanation: "La mémoire flash typique supporte 10 000 à 100 000 cycles d'écriture/effacement.",
                difficulty: 'difficile',
                theme: 'Mémoire'
            }
        ],
        
        'arduino-basics': [
            {
                id: 151,
                question: "Quelle fonction Arduino est exécutée une seule fois au démarrage ?",
                type: 'qcm',
                options: [
                    "loop()",
                    "setup()",
                    "main()",
                    "init()"
                ],
                correctAnswer: 1,
                explanation: "La fonction setup() est exécutée une seule fois au démarrage pour l'initialisation.",
                difficulty: 'facile',
                theme: 'Structure'
            },
            {
                id: 152,
                question: "La fonction loop() s'exécute en boucle indéfiniment.",
                type: 'vrai_faux',
                correctAnswer: true,
                explanation: "Vrai. La fonction loop() contient le code principal qui s'exécute continuellement.",
                difficulty: 'facile',
                theme: 'Structure'
            },
            {
                id: 153,
                question: "Quelle fonction Arduino permet de configurer une broche en sortie ?",
                type: 'qcm',
                options: [
                    "digitalWrite()",
                    "pinMode()",
                    "setPin()",
                    "configure()"
                ],
                correctAnswer: 1,
                explanation: "pinMode(pin, OUTPUT) configure une broche comme sortie.",
                difficulty: 'facile',
                theme: 'Fonctions'
            },
            {
                id: 154,
                question: "Quelle est la plage de valeurs pour digitalWrite() ?",
                type: 'qcm',
                options: [
                    "0-255",
                    "HIGH ou LOW",
                    "0-1023",
                    "-1 à 1"
                ],
                correctAnswer: 1,
                explanation: "digitalWrite() accepte uniquement HIGH (5V) ou LOW (0V) comme valeurs.",
                difficulty: 'facile',
                theme: 'Fonctions'
            },
            {
                id: 155,
                question: "Quelle fonction permet de lire l'état d'un bouton poussoir ?",
                type: 'qcm',
                options: [
                    "pinMode()",
                    "digitalWrite()",
                    "digitalRead()",
                    "analogRead()"
                ],
                correctAnswer: 2,
                explanation: "digitalRead() lit l'état d'une broche d'entrée numérique (HIGH ou LOW).",
                difficulty: 'facile',
                theme: 'Fonctions'
            },
            {
                id: 156,
                question: "Quelle est la bonne syntaxe pour configurer la broche 13 en sortie ?",
                type: 'qcm',
                options: [
                    "pinMode(13, INPUT);",
                    "digitalWrite(13, OUTPUT);",
                    "pinMode(13, OUTPUT);",
                    "setPin(13, OUTPUT);"
                ],
                correctAnswer: 2,
                explanation: "pinMode(13, OUTPUT) configure correctement la broche 13 comme sortie.",
                difficulty: 'facile',
                theme: 'Syntaxe'
            },
            {
                id: 157,
                question: "Quelle fonction permet de lire une valeur analogique ?",
                type: 'qcm',
                options: [
                    "digitalRead()",
                    "analogRead()",
                    "readAnalog()",
                    "getAnalog()"
                ],
                correctAnswer: 1,
                explanation: "analogRead() lit une valeur analogique entre 0 et 1023.",
                difficulty: 'facile',
                theme: 'Analogique'
            },
            {
                id: 158,
                question: "Quelle est la résolution du convertisseur A/N de l'Arduino UNO ?",
                type: 'qcm',
                options: [
                    "8 bits (0-255)",
                    "10 bits (0-1023)",
                    "12 bits (0-4095)",
                    "16 bits (0-65535)"
                ],
                correctAnswer: 1,
                explanation: "L'Arduino UNO a un ADC 10 bits, donnant des valeurs de 0 à 1023.",
                difficulty: 'moyen',
                theme: 'Caractéristiques'
            },
            {
                id: 159,
                question: "Quelle est la tension de référence par défaut pour analogRead() sur Arduino UNO ?",
                type: 'qcm',
                options: [
                    "3.3V",
                    "5V",
                    "1.1V",
                    "Variable"
                ],
                correctAnswer: 1,
                explanation: "Par défaut, analogRead() utilise une référence de 5V sur Arduino UNO.",
                difficulty: 'moyen',
                theme: 'Analogique'
            },
            {
                id: 160,
                question: "Combien de broches analogiques possède l'Arduino UNO ?",
                type: 'qcm',
                options: [
                    "4",
                    "6",
                    "8",
                    "10"
                ],
                correctAnswer: 1,
                explanation: "L'Arduino UNO a 6 broches analogiques (A0 à A5).",
                difficulty: 'facile',
                theme: 'Broches'
            },
            // Ajouter 40 questions supplémentaires pour atteindre 50
            {
                id: 161,
                question: "Quelle est la valeur maximale retournée par analogRead() ?",
                type: 'qcm',
                options: [
                    "255",
                    "1023",
                    "4095",
                    "65535"
                ],
                correctAnswer: 1,
                explanation: "analogRead() retourne des valeurs de 0 à 1023 (10 bits) sur Arduino UNO.",
                difficulty: 'facile',
                theme: 'Analogique'
            },
            {
                id: 162,
                question: "La broche 13 sur Arduino UNO a une LED intégrée.",
                type: 'vrai_faux',
                correctAnswer: true,
                explanation: "Vrai. La broche 13 est connectée à une LED intégrée sur la carte UNO.",
                difficulty: 'facile',
                theme: 'Broches'
            },
            {
                id: 163,
                question: "Quelle fonction génère un signal PWM ?",
                type: 'qcm',
                options: [
                    "digitalWrite()",
                    "analogWrite()",
                    "pwmWrite()",
                    "generatePWM()"
                ],
                correctAnswer: 1,
                explanation: "analogWrite() génère un signal PWM sur les broches supportées (~).",
                difficulty: 'facile',
                theme: 'PWM'
            },
            {
                id: 164,
                question: "Combien de broches PWM possède l'Arduino UNO ?",
                type: 'qcm',
                options: [
                    "4",
                    "6",
                    "8",
                    "10"
                ],
                correctAnswer: 1,
                explanation: "L'Arduino UNO a 6 broches PWM (marquées ~) : 3, 5, 6, 9, 10, 11.",
                difficulty: 'facile',
                theme: 'Broches'
            },
            {
                id: 165,
                question: "Quelle est la plage de valeurs pour analogWrite() ?",
                type: 'qcm',
                options: [
                    "0-1023",
                    "0-255",
                    "0-100",
                    "-255 à 255"
                ],
                correctAnswer: 1,
                explanation: "analogWrite() accepte des valeurs de 0 à 255 pour le rapport cyclique PWM.",
                difficulty: 'moyen',
                theme: 'PWM'
            },
            {
                id: 166,
                question: "La fonction delay() accepte des valeurs en millisecondes.",
                type: 'vrai_faux',
                correctAnswer: true,
                explanation: "Vrai. delay(ms) met en pause le programme pour le nombre de millisecondes spécifié.",
                difficulty: 'facile',
                theme: 'Fonctions'
            },
            {
                id: 167,
                question: "Quelle fonction initialise la communication série ?",
                type: 'qcm',
                options: [
                    "Serial.print()",
                    "Serial.begin()",
                    "Serial.read()",
                    "Serial.available()"
                ],
                correctAnswer: 1,
                explanation: "Serial.begin(vitesse) initialise la communication série à la vitesse spécifiée en bauds.",
                difficulty: 'facile',
                theme: 'Communication'
            },
            {
                id: 168,
                question: "Quelle est la vitesse de communication série par défaut ?",
                type: 'qcm',
                options: [
                    "4800 bauds",
                    "9600 bauds",
                    "115200 bauds",
                    "57600 bauds"
                ],
                correctAnswer: 1,
                explanation: "9600 bauds est la vitesse par défaut couramment utilisée.",
                difficulty: 'facile',
                theme: 'Communication'
            },
            {
                id: 169,
                question: "Quelle fonction envoie des données sur le port série ?",
                type: 'qcm',
                options: [
                    "Serial.send()",
                    "Serial.print()",
                    "Serial.write()",
                    "B et C"
                ],
                correctAnswer: 3,
                explanation: "Serial.print() et Serial.write() permettent d'envoyer des données sur le port série.",
                difficulty: 'moyen',
                theme: 'Communication'
            },
            {
                id: 170,
                question: "Les broches analogiques peuvent être utilisées comme broches digitales.",
                type: 'vrai_faux',
                correctAnswer: true,
                explanation: "Vrai. Les broches A0-A5 peuvent être utilisées comme entrées/sorties digitales.",
                difficulty: 'facile',
                theme: 'Broches'
            },
            {
                id: 171,
                question: "Quelle est la tension de fonctionnement de l'Arduino UNO ?",
                type: 'qcm',
                options: [
                    "3.3V",
                    "5V",
                    "12V",
                    "24V"
                ],
                correctAnswer: 1,
                explanation: "L'Arduino UNO fonctionne principalement en 5V, avec une sortie 3.3V disponible.",
                difficulty: 'facile',
                theme: 'Alimentation'
            },
            {
                id: 172,
                question: "Le port USB peut alimenter l'Arduino UNO.",
                type: 'vrai_faux',
                correctAnswer: true,
                explanation: "Vrai. L'Arduino peut être alimenté via le port USB (5V, 500mA max).",
                difficulty: 'facile',
                theme: 'Alimentation'
            },
            {
                id: 173,
                question: "Quelle est la fonction de la broche AREF ?",
                type: 'qcm',
                options: [
                    "Référence de tension pour ADC",
                    "Réinitialisation",
                    "Alimentation 3.3V",
                    "Sortie PWM"
                ],
                correctAnswer: 0,
                explanation: "AREF permet de définir une tension de référence personnalisée pour le convertisseur A/N.",
                difficulty: 'difficile',
                theme: 'Analogique'
            },
            {
                id: 174,
                question: "Quelle fonction vérifie si des données série sont disponibles ?",
                type: 'qcm',
                options: [
                    "Serial.check()",
                    "Serial.available()",
                    "Serial.read()",
                    "Serial.status()"
                ],
                correctAnswer: 1,
                explanation: "Serial.available() retourne le nombre d'octets disponibles en réception série.",
                difficulty: 'moyen',
                theme: 'Communication'
            },
            {
                id: 175,
                question: "La constante LED_BUILTIN représente la broche de la LED intégrée.",
                type: 'vrai_faux',
                correctAnswer: true,
                explanation: "Vrai. LED_BUILTIN est définie comme la broche de la LED intégrée (13 sur UNO).",
                difficulty: 'facile',
                theme: 'Constantes'
            },
            {
                id: 176,
                question: "Quelle fonction lit un octet sur le port série ?",
                type: 'qcm',
                options: [
                    "Serial.get()",
                    "Serial.read()",
                    "Serial.receive()",
                    "Serial.available()"
                ],
                correctAnswer: 1,
                explanation: "Serial.read() lit et retourne le prochain octet disponible sur le port série.",
                difficulty: 'moyen',
                theme: 'Communication'
            },
            {
                id: 177,
                question: "Les broches digitales peuvent lire des signaux analogiques.",
                type: 'vrai_faux',
                correctAnswer: false,
                explanation: "Faux. Seules les broches analogiques (A0-A5) peuvent lire des signaux analogiques.",
                difficulty: 'facile',
                theme: 'Broches'
            },
            {
                id: 178,
                question: "Quelle est la fréquence PWM par défaut sur Arduino UNO ?",
                type: 'qcm',
                options: [
                    "50 Hz",
                    "490 Hz",
                    "1 kHz",
                    "10 kHz"
                ],
                correctAnswer: 1,
                explanation: "La fréquence PWM par défaut est d'environ 490 Hz sur la plupart des broches.",
                difficulty: 'difficile',
                theme: 'PWM'
            },
            {
                id: 179,
                question: "La fonction millis() retourne le temps en millisecondes depuis le démarrage.",
                type: 'vrai_faux',
                correctAnswer: true,
                explanation: "Vrai. millis() retourne le nombre de millisecondes écoulées depuis le démarrage.",
                difficulty: 'facile',
                theme: 'Temps'
            },
            {
                id: 180,
                question: "Quelle fonction configure une broche en entrée avec résistance pull-up interne ?",
                type: 'qcm',
                options: [
                    "pinMode(pin, INPUT)",
                    "pinMode(pin, INPUT_PULLUP)",
                    "pinMode(pin, PULLUP)",
                    "digitalWrite(pin, HIGH)"
                ],
                correctAnswer: 1,
                explanation: "pinMode(pin, INPUT_PULLUP) active la résistance pull-up interne (~20kΩ).",
                difficulty: 'moyen',
                theme: 'Broches'
            },
            {
                id: 181,
                question: "Le courant maximum par broche sur Arduino UNO est de 40 mA.",
                type: 'vrai_faux',
                correctAnswer: false,
                explanation: "Faux. Le courant max recommandé est de 20 mA par broche, 200 mA total pour toutes les broches.",
                difficulty: 'facile',
                theme: 'Caractéristiques'
            },
            {
                id: 182,
                question: "Quelle fonction efface l'EEPROM ?",
                type: 'qcm',
                options: [
                    "EEPROM.clear()",
                    "EEPROM.erase()",
                    "EEPROM.write() avec 0",
                    "Il n'y a pas de fonction directe"
                ],
                correctAnswer: 3,
                explanation: "Il faut écrire chaque adresse avec 0, il n'y a pas de fonction clear() directe.",
                difficulty: 'difficile',
                theme: 'EEPROM'
            },
            {
                id: 183,
                question: "La fonction map() convertit une valeur d'une plage à une autre.",
                type: 'vrai_faux',
                correctAnswer: true,
                explanation: "Vrai. map(value, fromLow, fromHigh, toLow, toHigh) convertit une valeur d'une plage à une autre.",
                difficulty: 'facile',
                theme: 'Fonctions'
            },
            {
                id: 184,
                question: "Quelle est la taille de l'EEPROM sur Arduino UNO ?",
                type: 'qcm',
                options: [
                    "256 octets",
                    "512 octets",
                    "1024 octets",
                    "2048 octets"
                ],
                correctAnswer: 2,
                explanation: "L'ATmega328P a 1 Ko (1024 octets) d'EEPROM.",
                difficulty: 'moyen',
                theme: 'Mémoire'
            },
            {
                id: 185,
                question: "La fonction constrain() limite une valeur à une plage.",
                type: 'vrai_faux',
                correctAnswer: true,
                explanation: "Vrai. constrain(x, min, max) limite x à être entre min et max.",
                difficulty: 'facile',
                theme: 'Fonctions'
            },
            {
                id: 186,
                question: "Quelle bibliothèque est nécessaire pour utiliser l'EEPROM ?",
                type: 'qcm',
                options: [
                    "#include <Memory.h>",
                    "#include <EEPROM.h>",
                    "#include <Storage.h>",
                    "Aucune, c'est intégré"
                ],
                correctAnswer: 1,
                explanation: "Il faut inclure #include <EEPROM.h> pour utiliser les fonctions EEPROM.",
                difficulty: 'moyen',
                theme: 'Bibliothèques'
            },
            {
                id: 187,
                question: "La fonction random() génère un nombre aléatoire.",
                type: 'vrai_faux',
                correctAnswer: true,
                explanation: "Vrai. random(min, max) génère un nombre aléatoire entre min et max-1.",
                difficulty: 'facile',
                theme: 'Fonctions'
            },
            {
                id: 188,
                question: "Quelle est la fonction de la broche RESET ?",
                type: 'qcm',
                options: [
                    "Réinitialiser le programme",
                    "Éteindre l'Arduino",
                    "Effacer la mémoire",
                    "Changer de mode"
                ],
                correctAnswer: 0,
                explanation: "La broche RESET redémarre le programme quand mise à la masse (LOW).",
                difficulty: 'facile',
                theme: 'Broches'
            },
            {
                id: 189,
                question: "La fonction tone() génère une onde carrée à fréquence donnée.",
                type: 'vrai_faux',
                correctAnswer: true,
                explanation: "Vrai. tone(pin, frequency) génère une onde carrée sur la broche spécifiée.",
                difficulty: 'moyen',
                theme: 'Fonctions'
            },
            {
                id: 190,
                question: "Quelle est la tension sur une broche en mode INPUT ?",
                type: 'qcm',
                options: [
                    "0V",
                    "5V",
                    "Indéterminée (haute impédance)",
                    "3.3V"
                ],
                correctAnswer: 2,
                explanation: "En mode INPUT, la broche est en haute impédance, la tension dépend du circuit externe.",
                difficulty: 'difficile',
                theme: 'Broches'
            },
            {
                id: 191,
                question: "La fonction noTone() arrête la génération de son.",
                type: 'vrai_faux',
                correctAnswer: true,
                explanation: "Vrai. noTone(pin) arrête la génération de son sur la broche spécifiée.",
                difficulty: 'facile',
                theme: 'Fonctions'
            },
            {
                id: 192,
                question: "Quelle est la consommation typique de l'Arduino UNO ?",
                type: 'qcm',
                options: [
                    "10-20 mA",
                    "50-100 mA",
                    "200-300 mA",
                    "500+ mA"
                ],
                correctAnswer: 1,
                explanation: "L'Arduino UNO consomme environ 50-100 mA en fonctionnement normal.",
                difficulty: 'difficile',
                theme: 'Caractéristiques'
            },
            {
                id: 193,
                question: "La fonction pulseIn() mesure la durée d'une impulsion.",
                type: 'vrai_faux',
                correctAnswer: true,
                explanation: "Vrai. pulseIn(pin, value) mesure la durée d'une impulsion HIGH ou LOW.",
                difficulty: 'moyen',
                theme: 'Fonctions'
            },
            {
                id: 194,
                question: "Quelle est la fréquence du quartz sur Arduino UNO ?",
                type: 'qcm',
                options: [
                    "8 MHz",
                    "16 MHz",
                    "20 MHz",
                    "32 MHz"
                ],
                correctAnswer: 1,
                explanation: "L'Arduino UNO utilise un quartz de 16 MHz pour l'horloge du microcontrôleur.",
                difficulty: 'facile',
                theme: 'Caractéristiques'
            },
            {
                id: 195,
                question: "La fonction shiftOut() envoie des données en série.",
                type: 'vrai_faux',
                correctAnswer: true,
                explanation: "Vrai. shiftOut(dataPin, clockPin, bitOrder, value) envoie un octet bit par bit.",
                difficulty: 'difficile',
                theme: 'Fonctions'
            },
            {
                id: 196,
                question: "Quelle bibliothèque permet de contrôler des servomoteurs ?",
                type: 'qcm',
                options: [
                    "#include <Motor.h>",
                    "#include <Servo.h>",
                    "#include <PWM.h>",
                    "#include <Actuator.h>"
                ],
                correctAnswer: 1,
                explanation: "#include <Servo.h> permet de contrôler facilement des servomoteurs.",
                difficulty: 'facile',
                theme: 'Bibliothèques'
            },
            {
                id: 197,
                question: "La fonction micros() retourne le temps en microsecondes.",
                type: 'vrai_faux',
                correctAnswer: true,
                explanation: "Vrai. micros() retourne le nombre de microsecondes écoulées depuis le démarrage.",
                difficulty: 'facile',
                theme: 'Temps'
            },
            {
                id: 198,
                question: "Quelle est la taille de la mémoire flash sur Arduino UNO ?",
                type: 'qcm',
                options: [
                    "16 Ko",
                    "32 Ko",
                    "64 Ko",
                    "128 Ko"
                ],
                correctAnswer: 1,
                explanation: "L'ATmega328P a 32 Ko de flash, dont 0.5 Ko pour le bootloader.",
                difficulty: 'moyen',
                theme: 'Mémoire'
            },
            {
                id: 199,
                question: "La fonction attachInterrupt() associe une interruption à une broche.",
                type: 'vrai_faux',
                correctAnswer: true,
                explanation: "Vrai. attachInterrupt(digitalPinToInterrupt(pin), ISR, mode) associe une fonction d'interruption.",
                difficulty: 'difficile',
                theme: 'Interruptions'
            },
            {
                id: 200,
                question: "Quelle est la taille de la RAM sur Arduino UNO ?",
                type: 'qcm',
                options: [
                    "1 Ko",
                    "2 Ko",
                    "4 Ko",
                    "8 Ko"
                ],
                correctAnswer: 1,
                explanation: "L'ATmega328P a 2 Ko de SRAM pour les variables et la pile.",
                difficulty: 'moyen',
                theme: 'Mémoire'
            }
        ]
    }
};