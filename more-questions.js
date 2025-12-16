// more-questions.js - Additional 100+ questions
// more-questions.js - Additional 100+ questions
const ADDITIONAL_QUESTIONS = {
    introduction: [
        {
            id: 101, // Changed from 21 to 101 to avoid conflicts
            question: "Quelle est la principale différence entre un système embarqué et un ordinateur personnel ?",
            type: 'qcm',
            options: [
                "Le système embarqué est plus cher",
                "L'ordinateur personnel est plus puissant",
                "Le système embarqué est dédié à une tâche spécifique",
                "Il n'y a pas de différence"
            ],
            correctAnswer: 2,
            explanation: "Les systèmes embarqués sont spécialisés pour des tâches précises, contrairement aux ordinateurs personnels généralistes.",
            difficulty: 'facile',
            theme: 'Comparaison'
        },
        {
            id: 102, // Changed from 22 to 102
            question: "Les systèmes embarqués peuvent être programmés en langage assembleur.",
            type: 'vrai_faux',
            correctAnswer: true,
            explanation: "Vrai. L'assembleur est souvent utilisé pour les parties critiques où la performance est cruciale.",
            difficulty: 'moyen',
            theme: 'Programmation'
        },
        {
            id: 103, // Changed from 23 to 103
            question: "Quel est l'avantage d'utiliser un RTOS dans un système embarqué ?",
            type: 'qcm',
            options: [
                "Interface graphique améliorée",
                "Gestion préemptive des tâches",
                "Stockage de fichiers",
                "Connectivité réseau"
            ],
            correctAnswer: 1,
            explanation: "Un RTOS permet une gestion préemptive des tâches, essentielle pour les applications temps réel.",
            difficulty: 'moyen',
            theme: 'RTOS'
        },
        {
            id: 104, // Changed from 24 to 104
            question: "Quelle est la caractéristique d'un système embarqué en temps réel dur ?",
            type: 'qcm',
            options: [
                "Il peut tolérer des retards occasionnels",
                "Il doit absolument respecter tous les délais",
                "Il fonctionne plus rapidement",
                "Il consomme moins d'énergie"
            ],
            correctAnswer: 1,
            explanation: "Un système temps réel dur garantit que toutes les contraintes temporelles sont respectées sans exception.",
            difficulty: 'moyen',
            theme: 'Temps réel'
        },
        {
            id: 105, // Changed from 25 to 105
            question: "Les systèmes embarqués sont toujours plus rapides que les ordinateurs personnels.",
            type: 'vrai_faux',
            correctAnswer: false,
            explanation: "Faux. Les systèmes embarqués sont optimisés pour des tâches spécifiques, pas nécessairement pour la vitesse brute.",
            difficulty: 'facile',
            theme: 'Comparaison'
        },
        {
            id: 106, // Changed from 26 to 106
            question: "Quel est un exemple de système embarqué critique ?",
            type: 'qcm',
            options: [
                "Calculatrice",
                "Montre digitale",
                "Système de freinage ABS",
                "Télécommande TV"
            ],
            correctAnswer: 2,
            explanation: "Le système ABS est critique car une défaillance pourrait mettre des vies en danger.",
            difficulty: 'facile',
            theme: 'Applications'
        },
        {
            id: 107, // Changed from 27 to 107
            question: "Qu'est-ce que la consommation d'énergie statique dans un SE ?",
            type: 'qcm',
            options: [
                "Énergie consommée pendant les calculs",
                "Énergie consommée même quand le système est inactif",
                "Énergie pour la communication sans fil",
                "Énergie de démarrage"
            ],
            correctAnswer: 1,
            explanation: "La consommation statique est l'énergie consommée lorsque le système est en veille ou inactif.",
            difficulty: 'difficile',
            theme: 'Énergie'
        },
        {
            id: 108, // Changed from 28 to 108
            question: "Les systèmes embarqués peuvent être mis à jour à distance via OTA.",
            type: 'vrai_faux',
            correctAnswer: true,
            explanation: "Vrai. OTA (Over-The-Air) permet de mettre à jour le firmware sans intervention physique.",
            difficulty: 'moyen',
            theme: 'Mise à jour'
        },
        {
            id: 109, // Changed from 29 to 109
            question: "Quel est le rôle d'un bootloader dans un SE ?",
            type: 'qcm',
            options: [
                "Gérer les fichiers",
                "Initialiser le système au démarrage",
                "Convertir les signaux analogiques",
                "Contrôler les actionneurs"
            ],
            correctAnswer: 1,
            explanation: "Le bootloader initialise le matériel et charge le système d'exploitation ou l'application principale.",
            difficulty: 'moyen',
            theme: 'Démarrage'
        },
        {
            id: 110, // Changed from 30 to 110
            question: "Pourquoi les systèmes embarqués utilisent-ils souvent des microcontrôleurs plutôt que des microprocesseurs ?",
            type: 'qcm',
            options: [
                "Pour plus de puissance de calcul",
                "Pour réduire la taille et le coût",
                "Pour avoir une interface graphique",
                "Pour exécuter plusieurs systèmes d'exploitation"
            ],
            correctAnswer: 1,
            explanation: "Les microcontrôleurs intègrent tout sur une seule puce, réduisant taille, coût et consommation.",
            difficulty: 'moyen',
            theme: 'Architecture'
        },
        {
            id: 111, // Changed from 31 to 111
            question: "Quel langage est le plus utilisé pour la programmation des systèmes embarqués ?",
            type: 'qcm',
            options: [
                "Python",
                "Java",
                "C/C++",
                "JavaScript"
            ],
            correctAnswer: 2,
            explanation: "C/C++ est dominant car il offre un contrôle fin sur le matériel et une bonne performance.",
            difficulty: 'facile',
            theme: 'Programmation'
        },
        {
            id: 112, // Changed from 32 to 112
            question: "Les systèmes embarqués n'ont jamais besoin de système d'exploitation.",
            type: 'vrai_faux',
            correctAnswer: false,
            explanation: "Faux. Certains SE complexes utilisent un OS léger ou RTOS pour gérer les ressources.",
            difficulty: 'moyen',
            theme: 'OS'
        },
        {
            id: 113, // Changed from 33 to 113
            question: "Qu'est-ce que le determinisme dans un système embarqué ?",
            type: 'qcm',
            options: [
                "Capacité à prévoir le temps d'exécution",
                "Capacité à détecter les erreurs",
                "Capacité à communiquer avec d'autres systèmes",
                "Capacité à se reconfigurer"
            ],
            correctAnswer: 0,
            explanation: "Le déterminisme garantit que le temps d'exécution des tâches est prévisible et constant.",
            difficulty: 'difficile',
            theme: 'Temps réel'
        },
        {
            id: 114, // Changed from 34 to 114
            question: "Quel est un défi majeur dans la conception des SE ?",
            type: 'qcm',
            options: [
                "Interface utilisateur complexe",
                "Optimisation des ressources limitées",
                "Compatibilité avec tous les logiciels",
                "Capacité de jeu vidéo"
            ],
            correctAnswer: 1,
            explanation: "L'optimisation des ressources limitées (mémoire, CPU, énergie) est un défi constant.",
            difficulty: 'facile',
            theme: 'Conception'
        },
        {
            id: 115, // Changed from 35 to 115
            question: "Les systèmes embarqués peuvent intégrer des fonctions de sécurité matérielle.",
            type: 'vrai_faux',
            correctAnswer: true,
            explanation: "Vrai. Des fonctionnalités comme TPM ou Secure Boot protègent contre les attaques matérielles.",
            difficulty: 'moyen',
            theme: 'Sécurité'
        }
    ],
    
    architecture: [
        {
            id: 116, // Changed from 36 to 116
            question: "Quelle est la fonction d'un DMA dans un système embarqué ?",
            type: 'qcm',
            options: [
                "Gestion de la mémoire",
                "Transfert de données sans CPU",
                "Conversion analogique-numérique",
                "Gestion de l'alimentation"
            ],
            correctAnswer: 1,
            explanation: "Le DMA (Direct Memory Access) permet des transferts de données entre périphériques et mémoire sans l'intervention du CPU.",
            difficulty: 'difficile',
            theme: 'Architecture'
        },
        {
            id: 117, // Changed from 37 to 117
            question: "Un cache mémoire améliore les performances en réduisant les accès à la mémoire principale.",
            type: 'vrai_faux',
            correctAnswer: true,
            explanation: "Vrai. Le cache stocke les données fréquemment utilisées pour des accès plus rapides.",
            difficulty: 'moyen',
            theme: 'Mémoire'
        },
        {
            id: 118, // Changed from 38 to 118
            question: "Qu'est-ce que le pipeline dans une architecture CPU ?",
            type: 'qcm',
            options: [
                "Technique pour augmenter la fréquence",
                "Technique d'exécution parallèle d'instructions",
                "Mémoire tampon",
                "Système de refroidissement"
            ],
            correctAnswer: 1,
            explanation: "Le pipeline permet d'exécuter plusieurs instructions en parallèle sur différentes étapes du traitement.",
            difficulty: 'difficile',
            theme: 'CPU'
        },
        {
            id: 119, // Changed from 39 to 119
            question: "Quelle interface utilise 2 fils (SDA et SCL) ?",
            type: 'qcm',
            options: [
                "UART",
                "I2C",
                "SPI",
                "USB"
            ],
            correctAnswer: 1,
            explanation: "I2C utilise seulement deux fils : SDA (données) et SCL (horloge).",
            difficulty: 'moyen',
            theme: 'Communication'
        },
        {
            id: 120, // Changed from 40 to 120
            question: "La mémoire flash est plus rapide que la SRAM.",
            type: 'vrai_faux',
            correctAnswer: false,
            explanation: "Faux. La SRAM est plus rapide mais plus chère et volatile.",
            difficulty: 'moyen',
            theme: 'Mémoire'
        },
        {
            id: 121, // Changed from 41 to 121
            question: "Qu'est-ce qu'une interruption (IRQ) ?",
            type: 'qcm',
            options: [
                "Un signal qui arrête le CPU",
                "Un signal qui demande l'attention du CPU",
                "Une erreur de mémoire",
                "Un type de bus"
            ],
            correctAnswer: 1,
            explanation: "Une interruption signale au CPU qu'un événement nécessite son attention immédiate.",
            difficulty: 'moyen',
            theme: 'Interruptions'
        },
        {
            id: 122, // Changed from 42 to 122
            question: "Quelle est la différence entre interruption matérielle et logicielle ?",
            type: 'qcm',
            options: [
                "Il n'y a pas de différence",
                "Matérielle vient du CPU, logicielle des périphériques",
                "Matérielle vient des périphériques, logicielle des instructions",
                "Matérielle est plus rapide"
            ],
            correctAnswer: 2,
            explanation: "Les interruptions matérielles viennent des périphériques, les logicielles des instructions du programme.",
            difficulty: 'difficile',
            theme: 'Interruptions'
        },
        {
            id: 123, // Changed from 43 to 123
            question: "Le bus système transporte uniquement les données.",
            type: 'vrai_faux',
            correctAnswer: false,
            explanation: "Faux. Il transporte données, adresses et signaux de contrôle.",
            difficulty: 'facile',
            theme: 'Bus'
        },
        {
            id: 124, // Changed from 44 to 124
            question: "Qu'est-ce que la mémoire virtuelle ?",
            type: 'qcm',
            options: [
                "Mémoire physique",
                "Mémoire qui simule plus de RAM en utilisant le stockage",
                "Mémoire cache",
                "Mémoire ROM"
            ],
            correctAnswer: 1,
            explanation: "La mémoire virtuelle utilise le stockage pour simuler plus de mémoire RAM que physiquement disponible.",
            difficulty: 'difficile',
            theme: 'Mémoire'
        },
        {
            id: 125, // Changed from 45 to 125
            question: "Quel est l'avantage d'une architecture RISC-V ?",
            type: 'qcm',
            options: [
                "Elle est propriétaire",
                "Elle est complexe",
                "Elle est open-source",
                "Elle n'a pas d'avantage"
            ],
            correctAnswer: 2,
            explanation: "RISC-V est une architecture open-source, contrairement à ARM qui est propriétaire.",
            difficulty: 'difficile',
            theme: 'Architecture'
        }
    ],
    
    microcontrollers: [
        {
            id: 126, // Changed from 46 to 126
            question: "Quelle est la différence entre un microcontrôleur 8-bit et 32-bit ?",
            type: 'qcm',
            options: [
                "La taille physique",
                "La largeur des données traitées en une instruction",
                "La fréquence d'horloge",
                "Le nombre de broches"
            ],
            correctAnswer: 1,
            explanation: "Un microcontrôleur 8-bit traite 8 bits par instruction, un 32-bit traite 32 bits.",
            difficulty: 'facile',
            theme: 'Architecture'
        },
        {
            id: 127, // Changed from 47 to 127
            question: "Les microcontrôleurs ARM utilisent l'architecture RISC.",
            type: 'vrai_faux',
            correctAnswer: true,
            explanation: "Vrai. ARM signifie Advanced RISC Machine.",
            difficulty: 'moyen',
            theme: 'Architecture'
        },
        {
            id: 128, // Changed from 48 to 128
            question: "Quel est le rôle d'un watchdog timer ?",
            type: 'qcm',
            options: [
                "Mesurer le temps",
                "Redémarrer le système en cas de blocage",
                "Générer des signaux PWM",
                "Convertir des signaux analogiques"
            ],
            correctAnswer: 1,
            explanation: "Le watchdog timer redémarre le système si le programme ne le réinitialise pas périodiquement.",
            difficulty: 'moyen',
            theme: 'Timers'
        },
        {
            id: 129, // Changed from 49 to 129
            question: "Quelle est la fonction d'un comparateur analogique dans un microcontrôleur ?",
            type: 'qcm',
            options: [
                "Comparer deux tensions",
                "Convertir numérique-analogique",
                "Générer une fréquence",
                "Communiquer avec d'autres puces"
            ],
            correctAnswer: 0,
            explanation: "Un comparateur analogique compare deux tensions et donne un résultat numérique.",
            difficulty: 'difficile',
            theme: 'Périphériques'
        },
        {
            id: 130, // Changed from 50 to 130
            question: "Les microcontrôleurs AVR sont développés par Microchip.",
            type: 'vrai_faux',
            correctAnswer: true,
            explanation: "Vrai. Microchip (anciennement Atmel) développe les microcontrôleurs AVR.",
            difficulty: 'moyen',
            theme: 'Familles'
        }
    ],
    
    'arduino-basics': [
        {
            id: 131, // Changed from 51 to 131
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
            id: 132, // Changed from 52 to 132
            question: "Le port USB de l'Arduino UNO peut fournir l'alimentation.",
            type: 'vrai_faux',
            correctAnswer: true,
            explanation: "Vrai. L'Arduino peut être alimenté via le port USB (5V, 500mA max).",
            difficulty: 'facile',
            theme: 'Alimentation'
        },
        {
            id: 133, // Changed from 53 to 133
            question: "Quelle fonction permet d'initialiser la communication série ?",
            type: 'qcm',
            options: [
                "Serial.print()",
                "Serial.begin()",
                "Serial.read()",
                "Serial.available()"
            ],
            correctAnswer: 1,
            explanation: "Serial.begin(vitesse) initialise la communication série à la vitesse spécifiée.",
            difficulty: 'facile',
            theme: 'Communication'
        },
        {
            id: 134, // Changed from 54 to 134
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
            id: 135, // Changed from 55 to 135
            question: "Les broches analogiques peuvent lire uniquement des signaux analogiques.",
            type: 'vrai_faux',
            correctAnswer: false,
            explanation: "Faux. Les broches A0-A5 peuvent aussi être utilisées comme broches numériques.",
            difficulty: 'moyen',
            theme: 'Broches'
        }
    ],
    
    'arduino-advanced': [
        {
            id: 136, // Changed from 56 to 136
            question: "Quelle fonction utilise-t-on pour lire une tension sur une broche analogique ?",
            type: 'qcm',
            options: [
                "digitalRead()",
                "analogRead()",
                "pinRead()",
                "voltageRead()"
            ],
            correctAnswer: 1,
            explanation: "analogRead() lit une valeur proportionnelle à la tension sur une broche analogique.",
            difficulty: 'facile',
            theme: 'Analogique'
        },
        {
            id: 137, // Changed from 57 to 137
            question: "Le PWM permet de simuler une sortie analogique avec une sortie numérique.",
            type: 'vrai_faux',
            correctAnswer: true,
            explanation: "Vrai. Le PWM varie le rapport cyclique pour simuler différentes tensions moyennes.",
            difficulty: 'moyen',
            theme: 'PWM'
        },
        {
            id: 138, // Changed from 58 to 138
            question: "Quelle fonction permet d'écrire une valeur analogique ?",
            type: 'qcm',
            options: [
                "analogWrite()",
                "digitalWrite()",
                "pwmWrite()",
                "writeAnalog()"
            ],
            correctAnswer: 0,
            explanation: "analogWrite() génère un signal PWM sur les broches supportées.",
            difficulty: 'facile',
            theme: 'PWM'
        },
        {
            id: 139, // Changed from 59 to 139
            question: "Quelle est la fréquence du PWM sur l'Arduino UNO ?",
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
            id: 140, // Changed from 60 to 140
            question: "Les broches PWM sont identifiées par le symbole '~' sur la carte Arduino.",
            type: 'vrai_faux',
            correctAnswer: true,
            explanation: "Vrai. Les broches PWM sont marquées d'un tilde (~) sur la carte.",
            difficulty: 'facile',
            theme: 'Broches'
        }
    ],
    
    sensors: [
        {
            id: 141, // Changed from 61 to 141
            question: "Quel capteur mesure l'humidité ?",
            type: 'qcm',
            options: [
                "DHT11",
                "LM35",
                "HC-SR04",
                "LDR"
            ],
            correctAnswer: 0,
            explanation: "Le DHT11 mesure à la fois la température et l'humidité.",
            difficulty: 'facile',
            theme: 'Capteurs'
        },
        {
            id: 142, // Changed from 62 to 142
            question: "Un capteur PIR détecte le mouvement.",
            type: 'vrai_faux',
            correctAnswer: true,
            explanation: "Vrai. PIR (Passive Infrared) détecte les mouvements par les changements de rayonnement infrarouge.",
            difficulty: 'facile',
            theme: 'Capteurs'
        },
        {
            id: 143, // Changed from 63 to 143
            question: "Quel capteur utilise des ultrasons pour mesurer la distance ?",
            type: 'qcm',
            options: [
                "HC-SR04",
                "LM35",
                "TMP36",
                "MQ-2"
            ],
            correctAnswer: 0,
            explanation: "Le HC-SR04 émet des ultrasons et mesure le temps de retour pour calculer la distance.",
            difficulty: 'facile',
            theme: 'Capteurs'
        },
        {
            id: 144, // Changed from 64 to 144
            question: "Qu'est-ce qu'un actionneur ?",
            type: 'qcm',
            options: [
                "Un dispositif qui mesure",
                "Un dispositif qui agit sur l'environnement",
                "Un processeur",
                "Une mémoire"
            ],
            correctAnswer: 1,
            explanation: "Un actionneur convertit un signal électrique en action physique.",
            difficulty: 'facile',
            theme: 'Actionneurs'
        },
        {
            id: 145, // Changed from 65 to 145
            question: "Un relais est un type d'actionneur.",
            type: 'vrai_faux',
            correctAnswer: true,
            explanation: "Vrai. Un relais est un actionneur électromécanique qui commande un circuit.",
            difficulty: 'facile',
            theme: 'Actionneurs'
        }
    ],
    
    'embedded-ai': [
        {
            id: 146, // Changed from 66 to 146
            question: "Qu'est-ce que TinyML ?",
            type: 'qcm',
            options: [
                "Un microcontrôleur",
                "L'IA sur dispositifs à ressources limitées",
                "Un langage de programmation",
                "Un type de capteur"
            ],
            correctAnswer: 1,
            explanation: "TinyML fait référence à l'exécution de modèles de machine learning sur des dispositifs embarqués.",
            difficulty: 'moyen',
            theme: 'Concepts'
        },
        {
            id: 147, // Changed from 67 to 147
            question: "TensorFlow Lite peut fonctionner sur Arduino.",
            type: 'vrai_faux',
            correctAnswer: true,
            explanation: "Vrai. TensorFlow Lite for Microcontrollers est optimisé pour les microcontrôleurs.",
            difficulty: 'moyen',
            theme: 'Frameworks'
        },
        {
            id: 148, // Changed from 68 to 148
            question: "Quel est un avantage de l'IA embarquée ?",
            type: 'qcm',
            options: [
                "Réduction de la latence",
                "Augmentation de la consommation",
                "Besoin d'internet constant",
                "Coût élevé"
            ],
            correctAnswer: 0,
            explanation: "L'IA embarquée réduit la latence en traitant les données localement.",
            difficulty: 'moyen',
            theme: 'Avantages'
        },
        {
            id: 149, // Changed from 69 to 149
            question: "Qu'est-ce que l'inférence en IA ?",
            type: 'qcm',
            options: [
                "La phase d'apprentissage",
                "L'application d'un modèle entraîné",
                "La collecte des données",
                "L'optimisation du modèle"
            ],
            correctAnswer: 1,
            explanation: "L'inférence est l'application d'un modèle ML entraîné à de nouvelles données.",
            difficulty: 'difficile',
            theme: 'Concepts'
        },
        {
            id: 150, // Changed from 70 to 150
            question: "Les modèles quantifiés sont plus précis que les modèles flottants.",
            type: 'vrai_faux',
            correctAnswer: false,
            explanation: "Faux. La quantification réduit la précision mais améliore l'efficacité.",
            difficulty: 'difficile',
            theme: 'Optimisation'
        }
    ]
};

// Merge function with better error handling
function mergeQuizQuestions() {
    console.log('Starting to merge additional questions...');
    
    // Check if QUIZ_DATA exists
    if (typeof QUIZ_DATA === 'undefined') {
        console.error('QUIZ_DATA is not defined. Waiting for it to load...');
        
        // Try to merge after a delay
        setTimeout(() => {
            if (typeof QUIZ_DATA !== 'undefined') {
                mergeQuizQuestions();
            } else {
                console.error('QUIZ_DATA still not available after timeout');
            }
        }, 1000);
        return;
    }
    
    // Check if questions object exists
    if (!QUIZ_DATA.questions) {
        console.error('QUIZ_DATA.questions is not defined');
        QUIZ_DATA.questions = {};
    }
    
    let totalMerged = 0;
    
    // Merge each category
    Object.keys(ADDITIONAL_QUESTIONS).forEach(category => {
        // Initialize category if it doesn't exist
        if (!QUIZ_DATA.questions[category]) {
            QUIZ_DATA.questions[category] = [];
        }
        
        // Get existing question IDs to avoid duplicates
        const existingIds = new Set(QUIZ_DATA.questions[category].map(q => q.id));
        
        // Filter out duplicates
        const newQuestions = ADDITIONAL_QUESTIONS[category].filter(q => !existingIds.has(q.id));
        
        // Merge questions
        QUIZ_DATA.questions[category] = [...QUIZ_DATA.questions[category], ...newQuestions];
        
        // Update counts
        totalMerged += newQuestions.length;
        
        // Update category count in categories array
        const categoryIndex = QUIZ_DATA.categories.findIndex(c => c.id === category);
        if (categoryIndex !== -1) {
            QUIZ_DATA.categories[categoryIndex].count = QUIZ_DATA.questions[category].length;
        }
        
        console.log(`Merged ${newQuestions.length} questions into ${category}`);
    });
    
    // Calculate and log totals
    const totalQuestions = Object.values(QUIZ_DATA.questions)
        .reduce((sum, cat) => sum + cat.length, 0);
    
    console.log(`Total merged: ${totalMerged} questions`);
    console.log(`New total: ${totalQuestions} questions across all categories`);
    
    // Update the total in CONFIG for script.js
    if (window.CONFIG) {
        window.CONFIG.totalQuestions = totalQuestions;
    }
    
    // Update category counts on the page
    updateCategoryCounts();
    
    // Notify quiz engine if it exists
    if (window.quizEngine) {
        console.log('Notifying quiz engine of updated questions...');
        // If categories are already displayed, refresh them
        if (window.quizEngine.displayCategories) {
            window.quizEngine.displayCategories();
        }
    }
    
    return totalMerged;
}

// Helper function to update category counts on the page
function updateCategoryCounts() {
    if (!QUIZ_DATA.categories) return;
    
    // Update the stats in the hero section
    const statElements = document.querySelectorAll('.stat-number');
    if (statElements.length >= 2) {
        // Update question count (should be the second stat)
        const totalQuestions = Object.values(QUIZ_DATA.questions)
            .reduce((sum, cat) => sum + cat.length, 0);
        statElements[1].textContent = `${totalQuestions}+`;
    }
    
    // Update chapter cards with actual question counts
    QUIZ_DATA.categories.forEach(category => {
        const chapterCard = document.querySelector(`[data-chapter="${getChapterNumber(category.id)}"]`);
        if (chapterCard) {
            const metaItem = chapterCard.querySelector('.meta-item:last-child');
            if (metaItem) {
                metaItem.innerHTML = `<i class="fas fa-question-circle"></i> ${category.count} Q`;
            }
        }
    });
}

// Helper function to map category ID to chapter number
function getChapterNumber(categoryId) {
    const categoryMap = {
        'introduction': 1,
        'architecture': 2,
        'microcontrollers': 3,
        'arduino-basics': 4,
        'arduino-advanced': 5,
        'sensors': 6,
        'embedded-ai': 7
    };
    return categoryMap[categoryId] || 1;
}

// Alternative: Use an event listener to merge when ready
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, attempting to merge questions...');
    
    // Try immediately
    if (typeof QUIZ_DATA !== 'undefined') {
        mergeQuizQuestions();
    } else {
        // Wait a bit and try again
        const interval = setInterval(() => {
            if (typeof QUIZ_DATA !== 'undefined') {
                clearInterval(interval);
                mergeQuizQuestions();
            }
        }, 500);
        
        // Give up after 10 seconds
        setTimeout(() => {
            if (typeof QUIZ_DATA === 'undefined') {
                clearInterval(interval);
                console.error('Failed to load QUIZ_DATA after 10 seconds');
            }
        }, 10000);
    }
});

// Also try merging immediately (in case DOM is already loaded)
if (typeof QUIZ_DATA !== 'undefined') {
    mergeQuizQuestions();
}

// Export for debugging
window.ADDITIONAL_QUESTIONS = ADDITIONAL_QUESTIONS;
window.mergeQuizQuestions = mergeQuizQuestions;