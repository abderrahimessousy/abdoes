// course-content.js - Contenu des 4 chapitres
const COURSE_CONTENT = {
    chapters: {
        1: {
            id: 1,
            title: "Introduction aux SE",
            subtitle: "Définitions, caractéristiques, historique et applications",
            duration: "4h",
            questions: 50,
            content: `
                <div class="lesson-content">
                    <h2>Chapitre 1 : Introduction aux Systèmes Embarqués</h2>
                    
                    <h3>🎯 Définition des Systèmes Embarqués</h3>
                    <p><strong>Un système embarqué = Système Informatique + Électronique</strong></p>
                    <p>C'est un système électronique et informatique <strong>autonome</strong> rassemblé dans un même objet et conçu pour réaliser des <strong>tâches précises</strong> et capable d'interagir en <strong>temps réel</strong>.</p>
                    
                    <div class="definition-card">
                        <h4>📋 Caractéristiques principales :</h4>
                        <ul>
                            <li><strong>Autonomie</strong> : Fonctionne sans intervention humaine constante</li>
                            <li><strong>Spécificité</strong> : Conçu pour une tâche précise et unique</li>
                            <li><strong>Temps réel</strong> : Respecte des contraintes temporelles strictes</li>
                            <li><strong>Ressources limitées</strong> : Mémoire, puissance, énergie optimisées</li>
                            <li><strong>Fiabilité</strong> : Fonctionnement robuste et sécurisé</li>
                            <li><strong>Intégration</strong> : Partie intégrante d'un produit plus grand</li>
                        </ul>
                    </div>
                    
                    <h3>📊 Notion de Système vs Système Embarqué</h3>
                    <div class="comparison-grid">
                        <div class="comp-card">
                            <strong>Système</strong>
                            <p>Ensemble d'éléments qui interagissent pour effectuer des tâches selon un plan</p>
                        </div>
                        <div class="comp-card">
                            <strong>Système Embarqué</strong>
                            <p>Système informatique et électronique autonome intégré dans un objet dédié</p>
                        </div>
                    </div>
                    
                    <h3>🕰️ Historique et Évolution</h3>
                    <div class="timeline">
                        <div class="timeline-item">
                            <div class="timeline-year">1960</div>
                            <div class="timeline-content">
                                <strong>Mission Apollo - AGC</strong>
                                <p>Apollo Guidance Computer, premier système embarqué critique pour la course à l'espace</p>
                                <small>4K mots de RAM, 72K mots de ROM</small>
                            </div>
                        </div>
                        <div class="timeline-item">
                            <div class="timeline-year">1971</div>
                            <div class="timeline-content">
                                <strong>Intel 4004</strong>
                                <p>Premier microprocesseur commercial 4 bits par Intel</p>
                                <small>2 300 transistors, 740 kHz</small>
                            </div>
                        </div>
                        <div class="timeline-item">
                            <div class="timeline-year">1987</div>
                            <div class="timeline-content">
                                <strong>VxWorks</strong>
                                <p>Premier RTOS commercial largement adopté</p>
                                <small>Wind River Systems</small>
                            </div>
                        </div>
                        <div class="timeline-item">
                            <div class="timeline-year">2005</div>
                            <div class="timeline-content">
                                <strong>Arduino</strong>
                                <p>Plateforme de prototypage open source qui démocratise les SE</p>
                            </div>
                        </div>
                    </div>
                    
                    <h3>📱 Applications Typiques</h3>
                    <div class="applications-grid">
                        <div class="app-card">
                            <strong>🚗 Automobile</strong>
                            <ul>
                                <li>Systèmes ADAS (Aide à la Conduite)</li>
                                <li>Contrôle moteur et transmission</li>
                                <li>Systèmes ABS/ESP</li>
                                <li>Infodivertissement</li>
                            </ul>
                        </div>
                        <div class="app-card">
                            <strong>🏠 Domotique & IoT</strong>
                            <ul>
                                <li>Thermostats intelligents</li>
                                <li>Systèmes de sécurité</li>
                                <li>Éclairage automatique</li>
                                <li>Électroménager connecté</li>
                            </ul>
                        </div>
                        <div class="app-card">
                            <strong>⚕️ Médical</strong>
                            <ul>
                                <li>Pacemakers et défibrillateurs</li>
                                <li>Pompes à insuline</li>
                                <li>Appareils de monitoring</li>
                                <li>Imagerie médicale</li>
                            </ul>
                        </div>
                    </div>
                    
                    <h3>🔧 Cycle de Contrôle avec IA</h3>
                    <div class="ai-cycle">
                        <div class="cycle-step">
                            <div class="step-number">1</div>
                            <div class="step-content">
                                <strong>Capteurs</strong>
                                <p>Acquisition des données du monde réel (température, image, son)</p>
                            </div>
                        </div>
                        <div class="cycle-step">
                            <div class="step-number">2</div>
                            <div class="step-content">
                                <strong>Traitement IA</strong>
                                <p>Algorithmes d'inférence qui analysent les données et génèrent des décisions</p>
                            </div>
                        </div>
                        <div class="cycle-step">
                            <div class="step-number">3</div>
                            <div class="step-content">
                                <strong>Actionneurs</strong>
                                <p>Dispositifs d'exécution qui agissent sur l'environnement</p>
                            </div>
                        </div>
                    </div>
                    <p class="note"><strong>Latence critique :</strong> La latence totale (capteur → traitement → actionneur) est essentielle pour les applications temps réel.</p>
                </div>
            `
        },
        
        2: {
            id: 2,
            title: "Architecture",
            subtitle: "Composants matériels et logiciels",
            duration: "6h",
            questions: 50,
            content: `
                <div class="lesson-content">
                    <h2>Chapitre 2 : Architecture des Systèmes Embarqués</h2>
                    
                    <h3>🏗️ Architecture globale d'un SE</h3>
                    <div class="architecture-diagram">
                        <div class="arch-layer">
                            <h4>🎯 Logiciel d'Application</h4>
                            <p>Logique métier spécifique au système</p>
                        </div>
                        <div class="arch-layer">
                            <h4>🛠️ Couche Système</h4>
                            <p>Middleware, gestion des communications</p>
                        </div>
                        <div class="arch-layer">
                            <h4>⚙️ Système d'Exploitation</h4>
                            <p>RTOS (Real-Time Operating System)</p>
                        </div>
                        <div class="arch-layer">
                            <h4>🔌 Pilotes de Périphériques</h4>
                            <p>Interface avec les composants matériels</p>
                        </div>
                        <div class="arch-layer">
                            <h4>💾 Matériel</h4>
                            <p>Microcontrôleur, mémoire, périphériques</p>
                        </div>
                    </div>
                    
                    <h3>🔩 Composants Matériels</h3>
                    <div class="components-grid">
                        <div class="component-card">
                            <div class="comp-icon">🧠</div>
                            <h4>Traitement de données</h4>
                            <p><strong>Microprocesseur ou microcontrôleur</strong></p>
                            <ul>
                                <li>CPU : Unité centrale de traitement</li>
                                <li>ALU : Unité arithmétique et logique</li>
                                <li>Registres : Stockage temporaire</li>
                            </ul>
                        </div>
                        
                        <div class="component-card">
                            <div class="comp-icon">💾</div>
                            <h4>Stockage de données</h4>
                            <ul>
                                <li><strong>Volatile :</strong> RAM, SRAM, DRAM</li>
                                <li><strong>Non volatile :</strong> ROM, Flash, EEPROM</li>
                                <li><strong>Support de masse :</strong> SD Card, eMMC</li>
                            </ul>
                        </div>
                        
                        <div class="component-card">
                            <div class="comp-icon">🔌</div>
                            <h4>Périphériques d'E/S</h4>
                            <ul>
                                <li><strong>Communication :</strong> I2C, SPI, CAN, Ethernet, WiFi</li>
                                <li><strong>Acquisition :</strong> Capteurs, ADC</li>
                                <li><strong>Sortie :</strong> DAC, LED, moteurs</li>
                            </ul>
                        </div>
                    </div>
                    
                    <h3>🔄 Chaîne de traitement complète</h3>
                    <div class="processing-chain">
                        <div class="chain-step">
                            <strong>Capteur</strong>
                            <p>Mesure une quantité physique → Signal analogique</p>
                        </div>
                        <div class="chain-arrow">→</div>
                        <div class="chain-step">
                            <strong>ADC</strong>
                            <p>Convertit analogique → numérique</p>
                        </div>
                        <div class="chain-arrow">→</div>
                        <div class="chain-step">
                            <strong>Processeur</strong>
                            <p>Traitement des données selon le programme</p>
                        </div>
                        <div class="chain-arrow">→</div>
                        <div class="chain-step">
                            <strong>DAC</strong>
                            <p>Convertit numérique → analogique</p>
                        </div>
                        <div class="chain-arrow">→</div>
                        <div class="chain-step">
                            <strong>Actionneur</strong>
                            <p>Transforme signal en action physique</p>
                        </div>
                    </div>
                    
                    <h3>💻 Composants Logiciels</h3>
                    <div class="software-stack">
                        <div class="software-layer">
                            <h4>🚀 Bootloader</h4>
                            <p>Initialisation et chargement du système</p>
                        </div>
                        <div class="software-layer">
                            <h4>⚙️ Système d'Exploitation</h4>
                            <p>RTOS (FreeRTOS, Zephyr, VxWorks)</p>
                            <ul>
                                <li>Gestion des tâches</li>
                                <li>Gestion de la mémoire</li>
                                <li>Gestion des interruptions</li>
                                <li>Communication inter-processus</li>
                            </ul>
                        </div>
                        <div class="software-layer">
                            <h4>🛠️ Middleware</h4>
                            <p>Pilotes, protocoles de communication, services</p>
                        </div>
                        <div class="software-layer">
                            <h4>🎯 Logiciel d'Application</h4>
                            <p>Logique métier spécifique</p>
                            <ul>
                                <li>Traitement des données capteurs</li>
                                <li>Contrôle des actionneurs</li>
                                <li>Communication réseau</li>
                                <li>Interface utilisateur</li>
                            </ul>
                        </div>
                        <div class="software-layer">
                            <h4>🛡️ Gestion des Erreurs</h4>
                            <p>Robustesse et sécurité</p>
                            <ul>
                                <li>Détection des erreurs</li>
                                <li>Correction et récupération</li>
                                <li>Tolérance aux pannes</li>
                            </ul>
                        </div>
                    </div>
                    
                    <h3>📊 Exemple : Arduino UNO</h3>
                    <div class="example-card">
                        <div class="example-specs">
                            <h4>Caractéristiques matérielles :</h4>
                            <table class="specs-table">
                                <tr>
                                    <td><strong>Microcontrôleur :</strong></td>
                                    <td>ATmega328P</td>
                                </tr>
                                <tr>
                                    <td><strong>CPU :</strong></td>
                                    <td>8-bit AVR</td>
                                </tr>
                                <tr>
                                    <td><strong>Mémoire Flash :</strong></td>
                                    <td>32 KB (programme)</td>
                                </tr>
                                <tr>
                                    <td><strong>RAM :</strong></td>
                                    <td>2 KB (données temporaires)</td>
                                </tr>
                                <tr>
                                    <td><strong>EEPROM :</strong></td>
                                    <td>1 KB (données permanentes)</td>
                                </tr>
                                <tr>
                                    <td><strong>Broches E/S :</strong></td>
                                    <td>14 digitales (6 PWM), 6 analogiques</td>
                                </tr>
                                <tr>
                                    <td><strong>Fréquence :</strong></td>
                                    <td>16 MHz</td>
                                </tr>
                            </table>
                        </div>
                        <div class="example-image">
                            <div class="image-placeholder">
                                <i class="fas fa-microchip"></i>
                                <p>Schéma Arduino UNO</p>
                            </div>
                        </div>
                    </div>
                </div>
            `
        },
        
        3: {
            id: 3,
            title: "Microcontrôleurs",
            subtitle: "Types, architectures et applications",
            duration: "5h",
            questions: 50,
            content: `
                <div class="lesson-content">
                    <h2>Chapitre 3 : Microcontrôleurs</h2>
                    
                    <h3>🎯 Définition</h3>
                    <div class="definition-box">
                        <p>Un <strong>microcontrôleur</strong> est un circuit intégré qui rassemble sur une seule puce :</p>
                        <ul>
                            <li>Un processeur (CPU)</li>
                            <li>De la mémoire (RAM, ROM/Flash)</li>
                            <li>Des périphériques d'entrée/sortie</li>
                            <li>Des interfaces de communication</li>
                            <li>Des timers et convertisseurs</li>
                        </ul>
                        <p>C'est un <strong>"ordinateur sur puce"</strong> (Computer on chip).</p>
                    </div>
                    
                    <h3>⚖️ Microcontrôleur vs Microprocesseur</h3>
                    <div class="comparison-table">
                        <table>
                            <thead>
                                <tr>
                                    <th>Critère</th>
                                    <th>Microcontrôleur</th>
                                    <th>Microprocesseur</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>Définition</strong></td>
                                    <td>Circuit intégré complet (CPU + mémoire + E/S)</td>
                                    <td>Uniquement CPU, nécessite composants externes</td>
                                </tr>
                                <tr>
                                    <td><strong>Mémoire</strong></td>
                                    <td>Intégrée (RAM, ROM)</td>
                                    <td>Externe via bus</td>
                                </tr>
                                <tr>
                                    <td><strong>Système d'exploitation</strong></td>
                                    <td>Sans OS ou RTOS léger</td>
                                    <td>OS complet (Windows, Linux)</td>
                                </tr>
                                <tr>
                                    <td><strong>Coût</strong></td>
                                    <td>Faible</td>
                                    <td>Élevé</td>
                                </tr>
                                <tr>
                                    <td><strong>Consommation</strong></td>
                                    <td>Faible</td>
                                    <td>Élevée</td>
                                </tr>
                                <tr>
                                    <td><strong>Puissance</strong></td>
                                    <td>Limitée (tâche spécifique)</td>
                                    <td>Élevée (multitâche)</td>
                                </tr>
                                <tr>
                                    <td><strong>Applications</strong></td>
                                    <td>SE, robots, IoT, électroménager</td>
                                    <td>PC, serveurs, stations de travail</td>
                                </tr>
                                <tr>
                                    <td><strong>Exemples</strong></td>
                                    <td>ATmega328P, ESP32, STM32</td>
                                    <td>Intel Core, AMD Ryzen, ARM Cortex-A</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    
                    <h3>📊 Types de Microcontrôleurs</h3>
                    <div class="categories">
                        <div class="category">
                            <h4>1. En fonction des bits</h4>
                            <div class="type-card">
                                <strong>8-bit</strong>
                                <p>Traite 8 bits à la fois, tâches simples</p>
                                <small>Ex: 8031, 8051, ATmega328P</small>
                            </div>
                            <div class="type-card">
                                <strong>16-bit</strong>
                                <p>Plus puissant, précision accrue</p>
                                <small>Ex: 8096</small>
                            </div>
                            <div class="type-card">
                                <strong>32-bit</strong>
                                <p>Applications automatiques complexes</p>
                                <small>Ex: ARM Cortex-M, ESP32</small>
                            </div>
                        </div>
                        
                        <div class="category">
                            <h4>2. En fonction de la mémoire</h4>
                            <div class="type-card">
                                <strong>Mémoire externe</strong>
                                <p>Pas de mémoire de programme sur la puce</p>
                                <small>Ex: Intel 8031</small>
                            </div>
                            <div class="type-card">
                                <strong>Mémoire embarquée</strong>
                                <p>Tous les éléments sur la même puce</p>
                                <small>Ex: Arduino, STM32</small>
                            </div>
                        </div>
                        
                        <div class="category">
                            <h4>3. Jeu d'instructions</h4>
                            <div class="type-card">
                                <strong>RISC</strong>
                                <p>Reduced Instruction Set Computer</p>
                                <ul>
                                    <li>Instructions simples et rapides</li>
                                    <li>Plus de RAM nécessaire</li>
                                    <li>Ex: ARM, AVR</li>
                                </ul>
                            </div>
                            <div class="type-card">
                                <strong>CISC</strong>
                                <p>Complex Instruction Set Computer</p>
                                <ul>
                                    <li>Instructions complexes</li>
                                    <li>Moins de RAM nécessaire</li>
                                    <li>Ex: x86, 8051</li>
                                </ul>
                            </div>
                        </div>
                        
                        <div class="category">
                            <h4>4. Architecture</h4>
                            <div class="type-card">
                                <strong>Von Neumann</strong>
                                <p>Mémoire unique pour code et données</p>
                                <small>Simple et économique</small>
                            </div>
                            <div class="type-card">
                                <strong>Harvard</strong>
                                <p>Mémoires séparées pour code et données</p>
                                <small>Performance et sécurité</small>
                            </div>
                        </div>
                    </div>
                    
                    <h3>🔧 Exemple d'instruction assembleur</h3>
                    <div class="code-example">
                        <div class="code-header">
                            <span class="code-title">Instruction = Code d'opération + Opérande</span>
                        </div>
                        <pre><code>LDA X    ; Charge contenu de X dans accumulateur
ADD Y    ; Ajoute contenu de Y
STA Z    ; Stocke résultat dans Z
HLT      ; Arrêt</code></pre>
                        <div class="code-explanation">
                            <p><strong>Code d'opération :</strong> LDA, ADD, STA, HLT</p>
                            <p><strong>Opérande :</strong> X, Y, Z (adresses mémoire)</p>
                        </div>
                    </div>
                    
                    <h3>🏷️ Familles populaires</h3>
                    <div class="families-grid">
                        <div class="family-card">
                            <strong>AVR (Atmel/Microchip)</strong>
                            <ul>
                                <li>Arduino Uno, Mega, Nano</li>
                                <li>8/16 bits, architecture RISC</li>
                                <li>Facile à programmer</li>
                                <li>Large communauté</li>
                            </ul>
                        </div>
                        <div class="family-card">
                            <strong>ARM Cortex-M</strong>
                            <ul>
                                <li>STM32, nRF52</li>
                                <li>32 bits, performances</li>
                                <li>Faible consommation</li>
                                <li>Écosystème riche</li>
                            </ul>
                        </div>
                        <div class="family-card">
                            <strong>PIC (Microchip)</strong>
                            <ul>
                                <li>Industrie, automobile</li>
                                <li>Très faible consommation</li>
                                <li>Robuste et fiable</li>
                            </ul>
                        </div>
                        <div class="family-card">
                            <strong>ESP32</strong>
                            <ul>
                                <li>WiFi + Bluetooth intégrés</li>
                                <li>Double cœur 240 MHz</li>
                                <li>Idéal pour IoT</li>
                            </ul>
                        </div>
                    </div>
                    
                    <h3>⚡ Critères de choix</h3>
                    <div class="selection-criteria">
                        <div class="criterion">
                            <strong>✅ Microcontrôleur :</strong>
                            <ul>
                                <li>Faible coût</li>
                                <li>Petite taille</li>
                                <li>Faible consommation</li>
                                <li>Tâche spécifique</li>
                            </ul>
                        </div>
                        <div class="criterion">
                            <strong>✅ Microprocesseur :</strong>
                            <ul>
                                <li>Fonctionnalités multiples</li>
                                <li>Haute performance</li>
                                <li>Interface graphique sophistiquée</li>
                                <li>Multitâche complexe</li>
                            </ul>
                        </div>
                    </div>
                </div>
            `
        },
        
        4: {
            id: 4,
            title: "Arduino - Bases",
            subtitle: "Programmation et concepts fondamentaux",
            duration: "8h",
            questions: 50,
            content: `
                <div class="lesson-content">
                    <h2>Chapitre 4 : Arduino - Bases</h2>
                    
                    <h3>🎯 Présentation d'Arduino</h3>
                    <div class="intro-card">
                        <p><strong>Arduino</strong> (2005, Italie) - Plateforme open source pour prototypage électronique.</p>
                        <p><strong>Objectif :</strong> Permettre à des non-spécialistes de réaliser des projets électroniques interactifs.</p>
                    </div>
                    
                    <h3>🛠️ Composants de la plateforme</h3>
                    <div class="platform-components">
                        <div class="component">
                            <div class="comp-icon">💻</div>
                            <h4>1. Carte physique</h4>
                            <ul>
                                <li>Microcontrôleur</li>
                                <li>Mémoire</li>
                                <li>Broches E/S</li>
                                <li>Connecteurs</li>
                            </ul>
                        </div>
                        <div class="component">
                            <div class="comp-icon">📝</div>
                            <h4>2. IDE (Environnement de Développement)</h4>
                            <ul>
                                <li>Éditeur de code</li>
                                <li>Compilateur</li>
                                <li>Uploader</li>
                                <li>Moniteur série</li>
                            </ul>
                        </div>
                    </div>
                    
                    <h3>🔧 Types d'Arduino</h3>
                    <div class="arduino-types">
                        <div class="arduino-card">
                            <strong>Arduino UNO</strong>
                            <p>Le plus populaire, ATmega328P, 14 E/S digitales</p>
                        </div>
                        <div class="arduino-card">
                            <strong>Arduino Mega</strong>
                            <p>Plus de broches (54 E/S), ATmega2560</p>
                        </div>
                        <div class="arduino-card">
                            <strong>Arduino Nano</strong>
                            <p>Compact, idéal pour prototypes</p>
                        </div>
                        <div class="arduino-card">
                            <strong>Arduino Leonardo</strong>
                            <p>USB natif, peut émuler périphériques USB</p>
                        </div>
                    </div>
                    
                    <h3>📊 Arduino UNO R3 - Spécifications</h3>
                    <div class="specs-detailed">
                        <div class="specs-column">
                            <h4>Caractéristiques principales :</h4>
                            <ul>
                                <li><strong>Microcontrôleur :</strong> ATmega328P</li>
                                <li><strong>Fréquence :</strong> 16 MHz</li>
                                <li><strong>Tension opération :</strong> 5V</li>
                                <li><strong>Tension d'entrée :</strong> 7-12V (recommandé)</li>
                                <li><strong>Mémoire Flash :</strong> 32 KB (0.5 KB pour bootloader)</li>
                                <li><strong>SRAM :</strong> 2 KB</li>
                                <li><strong>EEPROM :</strong> 1 KB</li>
                            </ul>
                        </div>
                        <div class="specs-column">
                            <h4>Broches :</h4>
                            <ul>
                                <li><strong>Digitales :</strong> 14 (dont 6 PWM : ~)</li>
                                <li><strong>Analogiques :</strong> 6 (A0-A5, résolution 10 bits)</li>
                                <li><strong>Courant max/broche :</strong> 20 mA</li>
                                <li><strong>Courant total :</strong> 200 mA</li>
                                <li><strong>Communication :</strong> UART, SPI, I2C</li>
                            </ul>
                        </div>
                    </div>
                    
                    <h3>🔌 Architecture de la carte UNO</h3>
                    <div class="uno-architecture">
                        <div class="uno-component">
                            <strong>1. Microcontrôleur ATmega328P</strong>
                            <p>Cœur de traitement avec CPU 8-bit</p>
                        </div>
                        <div class="uno-component">
                            <strong>2. Bouton Reset</strong>
                            <p>Redémarre le programme</p>
                        </div>
                        <div class="uno-component">
                            <strong>3. Port USB</strong>
                            <p>Communication et alimentation</p>
                        </div>
                        <div class="uno-component">
                            <strong>4. Oscillateur à cristal</strong>
                            <p>Horloge 16 MHz</p>
                        </div>
                        <div class="uno-component">
                            <strong>5. Régulateur de tension</strong>
                            <p>Stabilise l'alimentation</p>
                        </div>
                        <div class="uno-component">
                            <strong>6. Port d'alimentation</strong>
                            <p>Entrée DC 7-12V</p>
                        </div>
                        <div class="uno-component">
                            <strong>7. Broches ICSP</strong>
                            <p>Programmation "in-circuit"</p>
                        </div>
                    </div>
                    
                    <h3>💻 Programmation Arduino - Structure de base</h3>
                    <div class="programming-structure">
                        <div class="code-section">
                            <h4>Fonction setup()</h4>
                            <pre><code>void setup() {
  // Exécutée une seule fois au démarrage
  // Initialisation des broches, communication série, etc.
  pinMode(13, OUTPUT);      // Broche 13 en sortie
  Serial.begin(9600);       // Communication série à 9600 bauds
}</code></pre>
                            <p><strong>Objectif :</strong> Configuration initiale</p>
                        </div>
                        
                        <div class="code-section">
                            <h4>Fonction loop()</h4>
                            <pre><code>void loop() {
  // Exécutée en boucle infinie
  // Logique principale du programme
  digitalWrite(13, HIGH);   // Allume LED
  delay(1000);              // Attend 1 seconde
  digitalWrite(13, LOW);    // Éteint LED
  delay(1000);              // Attend 1 seconde
}</code></pre>
                            <p><strong>Objectif :</strong> Logique principale en continu</p>
                        </div>
                    </div>
                    
                    <h3>🔧 Fonctions essentielles</h3>
                    <div class="functions-grid">
                        <div class="function-card">
                            <h4>pinMode()</h4>
                            <pre><code>pinMode(pin, mode);</code></pre>
                            <p>Configure une broche en entrée ou sortie</p>
                            <div class="example">
                                <code>pinMode(13, OUTPUT);</code><br>
                                <code>pinMode(2, INPUT);</code><br>
                                <code>pinMode(3, INPUT_PULLUP);</code>
                            </div>
                        </div>
                        
                        <div class="function-card">
                            <h4>digitalWrite()</h4>
                            <pre><code>digitalWrite(pin, value);</code></pre>
                            <p>Écrit HIGH (5V) ou LOW (0V) sur une broche</p>
                            <div class="example">
                                <code>digitalWrite(13, HIGH); // Allume</code><br>
                                <code>digitalWrite(13, LOW);  // Éteint</code>
                            </div>
                        </div>
                        
                        <div class="function-card">
                            <h4>digitalRead()</h4>
                            <pre><code>int valeur = digitalRead(pin);</code></pre>
                            <p>Lit l'état d'une broche d'entrée</p>
                            <div class="example">
                                <code>int etat = digitalRead(2);</code><br>
                                <code>if (etat == HIGH) {</code><br>
                                <code>  // Bouton appuyé</code><br>
                                <code>}</code>
                            </div>
                        </div>
                        
                        <div class="function-card">
                            <h4>analogRead()</h4>
                            <pre><code>int valeur = analogRead(pin);</code></pre>
                            <p>Lit une valeur analogique (0-1023)</p>
                            <div class="example">
                                <code>int capteur = analogRead(A0);</code><br>
                                <code>float tension = capteur * (5.0 / 1023.0);</code>
                            </div>
                        </div>
                    </div>
                    
                    <h3>🎯 Exemple complet : Clignotement LED</h3>
                    <div class="complete-example">
                        <pre><code>/*
  Programme : Clignotement LED intégrée
  Broche : LED_BUILTIN (broche 13 sur UNO)
*/

void setup() {
  // Initialisation
  pinMode(LED_BUILTIN, OUTPUT);  // LED intégrée en sortie
  Serial.begin(9600);            // Communication série
  Serial.println("Démarrage programme LED");
}

void loop() {
  // Clignotement
  digitalWrite(LED_BUILTIN, HIGH);  // Allume
  Serial.println("LED ON");
  delay(1000);                     // Attend 1 seconde
  
  digitalWrite(LED_BUILTIN, LOW);   // Éteint
  Serial.println("LED OFF");
  delay(1000);                     // Attend 1 seconde
}</code></pre>
                        <div class="explanation">
                            <h4>Explication :</h4>
                            <ol>
                                <li><strong>setup()</strong> : Configure la broche et la communication</li>
                                <li><strong>loop()</strong> : Allume/éteint la LED chaque seconde</li>
                                <li><strong>LED_BUILTIN</strong> : Constante pour la LED intégrée (broche 13)</li>
                                <li><strong>Serial.println()</strong> : Affiche des messages sur le moniteur</li>
                            </ol>
                        </div>
                    </div>
                    
                    <h3>🔄 Communication Série</h3>
                    <div class="serial-communication">
                        <div class="serial-config">
                            <h4>Configuration :</h4>
                            <pre><code>void setup() {
  Serial.begin(9600);  // Vitesse en bauds
}</code></pre>
                        </div>
                        <div class="serial-functions">
                            <h4>Fonctions principales :</h4>
                            <ul>
                                <li><code>Serial.print("Texte");</code> - Affiche sans retour à la ligne</li>
                                <li><code>Serial.println("Texte");</code> - Affiche avec retour à la ligne</li>
                                <li><code>Serial.available()</code> - Vérifie si des données sont disponibles</li>
                                <li><code>Serial.read()</code> - Lit un caractère</li>
                                <li><code>Serial.write()</code> - Envoie des données brutes</li>
                            </ul>
                        </div>
                    </div>
                    
                    <h3>🎓 Bonnes pratiques</h3>
                    <div class="best-practices">
                        <div class="practice-card">
                            <strong>✅ Commentaires</strong>
                            <p>Toujours commenter votre code pour expliquer la logique</p>
                        </div>
                        <div class="practice-card">
                            <strong>✅ Variables descriptives</strong>
                            <p>Utiliser des noms explicites (ledPin, buttonState)</p>
                        </div>
                        <div class="practice-card">
                            <strong>✅ Constantes</strong>
                            <p>Définir les broches comme constantes en début de programme</p>
                        </div>
                        <div class="practice-card">
                            <strong>✅ Organisation</strong>
                            <p>Séparer les fonctions, garder le code propre</p>
                        </div>
                    </div>
                    
                    <h3>🔧 Matériel requis pour débuter</h3>
                    <div class="required-material">
                        <ul>
                            <li><strong>Carte Arduino UNO</strong> - Cœur du système</li>
                            <li><strong>Câble USB</strong> - Programmation et alimentation</li>
                            <li><strong>Breadboard</strong> - Prototypage sans soudure</li>
                            <li><strong>LEDs</strong> - Indicateurs visuels</li>
                            <li><strong>Résistances</strong> - Protection des composants</li>
                            <li><strong>Câbles de connexion</strong> - Fils jumper</li>
                            <li><strong>Interrupteurs/boutons</strong> - Entrées utilisateur</li>
                            <li><strong>Capteurs</strong> - LDR, température, etc.</li>
                        </ul>
                    </div>
                </div>
            `
        }
    }
};