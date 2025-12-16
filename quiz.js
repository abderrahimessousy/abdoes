// quiz.js - Enhanced Quiz Engine
class QuizEngine {
    constructor() {
        this.currentCategory = null;
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.userAnswers = [];
        this.questions = [];
        this.totalQuestions = 0;
        this.quizStarted = false;
        this.startTime = null;
        this.endTime = null;
        
        // Éléments DOM
        this.elements = {
            categories: document.getElementById('quizCategories'),
            welcome: document.getElementById('quizWelcome'),
            question: document.getElementById('quizQuestion'),
            results: document.getElementById('quizResults'),
            questionText: document.getElementById('questionText'),
            questionOptions: document.getElementById('questionOptions'),
            questionFeedback: document.getElementById('questionFeedback'),
            feedbackContent: document.getElementById('feedbackContent'),
            nextQuestionBtn: document.getElementById('nextQuestionBtn'),
            restartQuizBtn: document.getElementById('restartQuizBtn'),
            newCategoryBtn: document.getElementById('newCategoryBtn'),
            progressFill: document.getElementById('quizProgressFill'),
            progressText: document.getElementById('quizProgressText'),
            finalScore: document.getElementById('finalScore'),
            correctAnswers: document.getElementById('correctAnswers'),
            totalQuestions: document.getElementById('totalQuestions'),
            questionTheme: document.getElementById('questionTheme'),
            questionNumber: document.getElementById('questionNumber')
        };
        
        // Statistiques
        this.stats = {
            totalQuizzes: 0,
            totalTime: 0,
            bestScore: 0,
            categoriesCompleted: []
        };
        
        this.init();
    }
    
    init() {
        this.loadStats();
        this.setupEventListeners();
        this.setupKeyboardNavigation();
        
        // Vérifier si QUIZ_DATA est disponible
        if (typeof QUIZ_DATA === 'undefined') {
            console.error('QUIZ_DATA is not defined. Make sure data.js is loaded.');
            this.showError('Les données du quiz ne sont pas chargées. Veuillez recharger la page.');
            return;
        }
        
        this.displayCategories();
    }
    
    showError(message) {
        const welcome = document.getElementById('quizWelcome');
        if (welcome) {
            welcome.innerHTML = `
                <div class="error-container" style="text-align: center; padding: 2rem;">
                    <div class="error-icon" style="color: var(--danger); font-size: 3rem; margin-bottom: 1rem;">
                        <i class="fas fa-exclamation-triangle"></i>
                    </div>
                    <h3 style="color: var(--danger); margin-bottom: 1rem;">Erreur</h3>
                    <p style="margin-bottom: 1.5rem; color: var(--text-secondary);">${message}</p>
                    <button onclick="location.reload()" class="btn btn-primary" style="margin-top: 1rem;">
                        <i class="fas fa-redo"></i> Recharger la page
                    </button>
                </div>
            `;
        }
    }
    
    loadStats() {
        try {
            const savedStats = localStorage.getItem('quizStats');
            if (savedStats) {
                this.stats = JSON.parse(savedStats);
            }
        } catch (error) {
            console.error('Error loading stats:', error);
        }
    }
    
    saveStats() {
        try {
            localStorage.setItem('quizStats', JSON.stringify(this.stats));
        } catch (error) {
            console.error('Error saving stats:', error);
        }
    }
    
    displayCategories() {
        const container = this.elements.categories;
        if (!container) {
            console.error('Categories container not found');
            return;
        }
        
        container.innerHTML = '';
        
        // Vérifier si QUIZ_DATA est disponible
        if (!QUIZ_DATA || !QUIZ_DATA.categories) {
            this.showError('Les catégories ne sont pas disponibles.');
            return;
        }
        
        QUIZ_DATA.categories.forEach(category => {
            const item = document.createElement('div');
            item.className = 'category-item';
            item.dataset.category = category.id;
            
            // Vérifier si la catégorie est complétée
            const isCompleted = this.stats.categoriesCompleted.includes(category.id);
            
            item.innerHTML = `
                <div class="category-info">
                    <i class="${category.icon}"></i>
                    <div>
                        <div class="category-name">${category.name}</div>
                        <div class="category-count">${category.count} questions</div>
                    </div>
                </div>
                <div class="category-status">
                    ${isCompleted ? '<i class="fas fa-check-circle" style="color: var(--success);"></i>' : ''}
                    <i class="fas fa-chevron-right"></i>
                </div>
            `;
            
            item.addEventListener('click', () => {
                this.startQuiz(category.id);
            });
            
            container.appendChild(item);
        });
    }
    
    setupEventListeners() {
        // Bouton "Suivant"
        if (this.elements.nextQuestionBtn) {
            this.elements.nextQuestionBtn.addEventListener('click', () => {
                this.nextQuestion();
            });
        }
        
        // Bouton "Recommencer"
        if (this.elements.restartQuizBtn) {
            this.elements.restartQuizBtn.addEventListener('click', () => {
                this.restartQuiz();
            });
        }
        
        // Bouton "Nouvelle catégorie"
        if (this.elements.newCategoryBtn) {
            this.elements.newCategoryBtn.addEventListener('click', () => {
                this.showCategories();
            });
        }
    }
    
    setupKeyboardNavigation() {
        document.addEventListener('keydown', (e) => {
            if (!this.quizStarted) return;
            
            switch(e.key) {
                case '1':
                case '2':
                case '3':
                case '4':
                    const optionIndex = parseInt(e.key) - 1;
                    this.selectOptionByKeyboard(optionIndex);
                    break;
                case 'Enter':
                    if (this.elements.questionFeedback.style.display === 'block') {
                        this.nextQuestion();
                    }
                    break;
                case 'ArrowRight':
                    if (this.elements.questionFeedback.style.display === 'block') {
                        this.nextQuestion();
                    }
                    break;
                case 'ArrowLeft':
                    if (this.currentQuestionIndex > 0) {
                        this.previousQuestion();
                    }
                    break;
                case ' ':
                    e.preventDefault(); // Empêcher le défilement avec la barre d'espace
                    break;
            }
        });
    }
    
    selectOptionByKeyboard(index) {
        const options = document.querySelectorAll('.option-item:not(.disabled)');
        if (options[index]) {
            this.selectOption(index);
        }
    }
    
    startQuiz(categoryId) {
        console.log('Starting quiz for category:', categoryId);
        
        // Vérifier si la catégorie existe
        if (!QUIZ_DATA.questions[categoryId]) {
            console.error('Category not found:', categoryId);
            this.showError(`La catégorie "${categoryId}" n'existe pas.`);
            return;
        }
        
        this.currentCategory = categoryId;
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.userAnswers = [];
        this.quizStarted = true;
        this.startTime = Date.now();
        
        // Charger les questions
        this.questions = [...QUIZ_DATA.questions[categoryId]];
        this.totalQuestions = Math.min(this.questions.length, 10); // Limiter à 10 questions pour le test
        
        console.log(`Loaded ${this.questions.length} questions, using ${this.totalQuestions}`);
        
        if (this.questions.length === 0) {
            this.showError(`Aucune question disponible pour cette catégorie.`);
            return;
        }
        
        // Mélanger les questions
        this.shuffleQuestions();
        
        // Afficher l'interface du quiz
        if (this.elements.welcome) this.elements.welcome.style.display = 'none';
        if (this.elements.question) this.elements.question.style.display = 'block';
        if (this.elements.results) this.elements.results.style.display = 'none';
        
        // Désactiver tous les items de catégorie
        document.querySelectorAll('.category-item').forEach(item => {
            item.classList.remove('active');
            if (item.dataset.category === categoryId) {
                item.classList.add('active');
            }
        });
        
        // Afficher la première question
        this.displayQuestion();
        this.updateProgress();
        
        // Focus pour accessibilité
        setTimeout(() => {
            if (this.elements.questionText) {
                this.elements.questionText.focus();
            }
        }, 100);
    }
    
shuffleQuestions() {
    if (this.questions.length === 0) return;
    
    // Take all questions instead of just 10
    const shuffled = [...this.questions];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    this.questions = shuffled; // Use all questions
    this.totalQuestions = this.questions.length; // Update total
}
    
    displayQuestion() {
        if (this.currentQuestionIndex >= this.questions.length) {
            this.endQuiz();
            return;
        }
        
        const question = this.questions[this.currentQuestionIndex];
        console.log('Displaying question:', question);
        
        if (!question) {
            console.error('Question not found at index:', this.currentQuestionIndex);
            return;
        }
        
        const userAnswer = this.userAnswers[this.currentQuestionIndex];
        
        // Mettre à jour le texte
        if (this.elements.questionText) {
            this.elements.questionText.textContent = question.question;
        }
        
        if (this.elements.questionTheme) {
            this.elements.questionTheme.textContent = question.theme || 'Général';
        }
        
        if (this.elements.questionNumber) {
            this.elements.questionNumber.textContent = 
                `Question ${this.currentQuestionIndex + 1}/${this.totalQuestions}`;
        }
        
        // Ajouter ou mettre à jour le badge de difficulté
        let difficultyBadge = document.getElementById('questionDifficulty');
        if (!difficultyBadge) {
            const questionHeader = document.querySelector('.question-header');
            if (questionHeader) {
                difficultyBadge = document.createElement('span');
                difficultyBadge.className = `difficulty-badge badge-${question.difficulty}`;
                difficultyBadge.id = 'questionDifficulty';
                difficultyBadge.textContent = this.capitalizeFirstLetter(question.difficulty);
                questionHeader.appendChild(difficultyBadge);
            }
        } else {
            difficultyBadge.className = `difficulty-badge badge-${question.difficulty}`;
            difficultyBadge.textContent = this.capitalizeFirstLetter(question.difficulty);
        }
        
        // Afficher les options
        this.displayOptions(question, userAnswer);
        
        // Cacher le feedback
        if (this.elements.questionFeedback) {
            this.elements.questionFeedback.style.display = 'none';
        }
        
        // Focus pour accessibilité
        if (this.elements.questionText) {
            this.elements.questionText.setAttribute('tabindex', '-1');
            this.elements.questionText.focus();
        }
    }
    
    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    
    displayOptions(question, userAnswer) {
        const container = this.elements.questionOptions;
        if (!container) return;
        
        container.innerHTML = '';
        
        if (question.type === 'qcm') {
            question.options.forEach((option, index) => {
                const optionEl = this.createOptionElement(index, option, question, userAnswer);
                container.appendChild(optionEl);
            });
        } else if (question.type === 'vrai_faux') {
            const options = [
                { text: 'Vrai', value: true },
                { text: 'Faux', value: false }
            ];
            
            options.forEach((option, index) => {
                const optionEl = this.createOptionElement(index, option.text, question, userAnswer, option.value);
                container.appendChild(optionEl);
            });
        }
        
        // Annoncer le nombre d'options pour l'accessibilité
        const optionsCount = container.children.length;
        container.setAttribute('aria-label', `${optionsCount} options disponibles`);
    }
    
    createOptionElement(index, text, question, userAnswer, value = null) {
        const optionEl = document.createElement('div');
        optionEl.className = 'option-item';
        optionEl.dataset.index = index;
        optionEl.dataset.value = value;
        optionEl.setAttribute('role', 'radio');
        optionEl.setAttribute('aria-checked', 'false');
        optionEl.setAttribute('tabindex', '0');
        optionEl.setAttribute('aria-label', `Option ${String.fromCharCode(65 + index)}: ${text}`);
        
        // Raccourci clavier
        optionEl.setAttribute('aria-keyshortcuts', `${index + 1}`);
        
        if (userAnswer !== undefined) {
            optionEl.classList.add('disabled');
            optionEl.setAttribute('aria-disabled', 'true');
            
            const isCorrect = this.isAnswerCorrect(question, index, value);
            if (isCorrect) {
                optionEl.classList.add('correct');
                optionEl.setAttribute('aria-label', `${optionEl.getAttribute('aria-label')} - Réponse correcte`);
            }
            if (userAnswer === index && !isCorrect) {
                optionEl.classList.add('incorrect');
                optionEl.setAttribute('aria-label', `${optionEl.getAttribute('aria-label')} - Réponse incorrecte`);
            }
        }
        
        if (userAnswer === index) {
            optionEl.classList.add('selected');
            optionEl.setAttribute('aria-checked', 'true');
        }
        
        optionEl.innerHTML = `
            <div class="option-letter">${String.fromCharCode(65 + index)}</div>
            <div class="option-text">${text}</div>
        `;
        
        if (userAnswer === undefined) {
            optionEl.addEventListener('click', () => this.selectOption(index));
            optionEl.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.selectOption(index);
                }
            });
        }
        
        return optionEl;
    }
    
    isAnswerCorrect(question, userAnswerIndex, userAnswerValue = null) {
        if (question.type === 'qcm') {
            return userAnswerIndex === question.correctAnswer;
        } else if (question.type === 'vrai_faux') {
            const correctIndex = question.correctAnswer ? 0 : 1;
            return userAnswerIndex === correctIndex;
        }
        return false;
    }
    
    selectOption(optionIndex) {
        console.log('Option selected:', optionIndex);
        
        // Désélectionner toutes les options
        document.querySelectorAll('.option-item').forEach(item => {
            item.classList.remove('selected');
            item.setAttribute('aria-checked', 'false');
        });
        
        // Sélectionner l'option choisie
        const selectedOption = document.querySelector(`.option-item[data-index="${optionIndex}"]`);
        if (selectedOption) {
            selectedOption.classList.add('selected');
            selectedOption.setAttribute('aria-checked', 'true');
            
            // Annoncer la sélection pour l'accessibilité
            const announcement = document.getElementById('aria-announcement') || 
                (() => {
                    const div = document.createElement('div');
                    div.id = 'aria-announcement';
                    div.className = 'sr-only';
                    div.setAttribute('aria-live', 'polite');
                    div.setAttribute('aria-atomic', 'true');
                    document.body.appendChild(div);
                    return div;
                })();
            
            const optionLetter = String.fromCharCode(65 + optionIndex);
            announcement.textContent = `Option ${optionLetter} sélectionnée`;
        }
        
        // Enregistrer la réponse
        this.userAnswers[this.currentQuestionIndex] = optionIndex;
        
        // Vérifier la réponse
        this.checkAnswer(optionIndex);
    }
    
    checkAnswer(userAnswer) {
        const question = this.questions[this.currentQuestionIndex];
        const isCorrect = this.isAnswerCorrect(question, userAnswer);
        
        // Mettre à jour le score
        if (isCorrect) {
            this.score++;
            this.animateScoreUpdate();
        }
        
        // Afficher le feedback
        this.showFeedback(question, isCorrect, userAnswer);
        
        // Mettre à jour la progression
        this.updateProgress();
        
        // Mettre à jour les statistiques
        this.updateQuestionStats(question.id, isCorrect);
    }
    
    animateScoreUpdate() {
        const scoreElement = document.querySelector('.score-animation');
        if (!scoreElement) {
            const anim = document.createElement('div');
            anim.className = 'score-animation';
            anim.innerHTML = '+1';
            anim.style.cssText = `
                position: fixed;
                top: 20%;
                right: 20%;
                font-size: 2rem;
                color: var(--success);
                font-weight: bold;
                animation: floatUp 1s ease-out forwards;
                z-index: 1000;
                pointer-events: none;
            `;
            document.body.appendChild(anim);
            
            // Ajouter l'animation CSS
            const style = document.createElement('style');
            style.textContent = `
                @keyframes floatUp {
                    0% { opacity: 0; transform: translateY(0) scale(1); }
                    50% { opacity: 1; transform: translateY(-20px) scale(1.2); }
                    100% { opacity: 0; transform: translateY(-40px) scale(1); }
                }
            `;
            document.head.appendChild(style);
            
            setTimeout(() => anim.remove(), 1000);
        }
    }
    
    showFeedback(question, isCorrect, userAnswer) {
        const feedback = this.elements.feedbackContent;
        if (!feedback) return;
        
        let feedbackHTML = `
            <div class="feedback-header">
                <h4>${isCorrect ? '✅ Correct !' : '❌ Incorrect'}</h4>
            </div>
            <div class="feedback-content">
                <p><strong>Explication :</strong> ${question.explanation}</p>
        `;
        
        if (!isCorrect) {
            if (question.type === 'qcm' && question.options && question.options[question.correctAnswer]) {
                const correctAnswer = question.options[question.correctAnswer];
                feedbackHTML += `<p><strong>Réponse correcte :</strong> ${correctAnswer}</p>`;
            } else if (question.type === 'vrai_faux') {
                const correctAnswer = question.correctAnswer ? 'Vrai' : 'Faux';
                feedbackHTML += `<p><strong>Réponse correcte :</strong> ${correctAnswer}</p>`;
            }
        }
        
        feedbackHTML += `
                <div class="difficulty-info">
                    <small>Difficulté : <span class="difficulty-badge badge-${question.difficulty}">${question.difficulty}</span></small>
                </div>
            </div>
        `;
        
        feedback.innerHTML = feedbackHTML;
        
        if (this.elements.questionFeedback) {
            this.elements.questionFeedback.style.display = 'block';
        }
        
        // Focus sur le bouton suivant
        setTimeout(() => {
            if (this.elements.nextQuestionBtn) {
                this.elements.nextQuestionBtn.focus();
            }
        }, 100);
    }
    
    nextQuestion() {
        this.currentQuestionIndex++;
        
        if (this.currentQuestionIndex < this.questions.length) {
            this.displayQuestion();
        } else {
            this.endQuiz();
        }
    }
    
    previousQuestion() {
        if (this.currentQuestionIndex > 0) {
            this.currentQuestionIndex--;
            this.displayQuestion();
        }
    }
    
    updateProgress() {
        const answered = this.userAnswers.filter(a => a !== undefined).length;
        const progress = (answered / this.totalQuestions) * 100;
        
        if (this.elements.progressFill) {
            this.elements.progressFill.style.width = `${progress}%`;
        }
        
        if (this.elements.progressText) {
            this.elements.progressText.textContent = `${Math.round(progress)}% complété`;
        }
        
        // Mettre à jour l'ARIA
        if (this.elements.progressFill) {
            this.elements.progressFill.setAttribute('aria-valuenow', progress);
            this.elements.progressFill.setAttribute('aria-valuemin', 0);
            this.elements.progressFill.setAttribute('aria-valuemax', 100);
        }
    }
    
    updateQuestionStats(questionId, isCorrect) {
        try {
            const questionStats = JSON.parse(localStorage.getItem('questionStats') || '{}');
            if (!questionStats[questionId]) {
                questionStats[questionId] = { attempts: 0, correct: 0 };
            }
            questionStats[questionId].attempts++;
            if (isCorrect) questionStats[questionId].correct++;
            localStorage.setItem('questionStats', JSON.stringify(questionStats));
        } catch (error) {
            console.error('Error updating question stats:', error);
        }
    }
    
    endQuiz() {
        this.endTime = Date.now();
        const timeSpent = Math.floor((this.endTime - this.startTime) / 1000);
        const minutes = Math.floor(timeSpent / 60);
        const seconds = timeSpent % 60;
        
        const correct = this.score;
        const total = this.questions.length;
        const percentage = total > 0 ? Math.round((correct / total) * 100) : 0;
        
        // Mettre à jour les statistiques globales
        this.stats.totalQuizzes++;
        this.stats.totalTime += timeSpent;
        if (percentage > this.stats.bestScore) {
            this.stats.bestScore = percentage;
        }
        if (this.currentCategory && !this.stats.categoriesCompleted.includes(this.currentCategory)) {
            this.stats.categoriesCompleted.push(this.currentCategory);
        }
        this.saveStats();
        
        // Mettre à jour l'affichage
        if (this.elements.finalScore) {
            this.elements.finalScore.textContent = percentage;
        }
        
        if (this.elements.correctAnswers) {
            this.elements.correctAnswers.textContent = correct;
        }
        
        if (this.elements.totalQuestions) {
            this.elements.totalQuestions.textContent = total;
        }
        
        // Mettre à jour le cercle de score
        const scoreCircle = document.querySelector('.score-circle');
        if (scoreCircle) {
            scoreCircle.style.setProperty('--score', `${percentage}%`);
        }
        
        // Afficher les résultats
        if (this.elements.question) {
            this.elements.question.style.display = 'none';
        }
        
        if (this.elements.results) {
            this.elements.results.style.display = 'block';
            
            // Ajouter le temps passé
            const timeElement = document.querySelector('.quiz-time') || document.createElement('div');
            timeElement.className = 'quiz-time';
            timeElement.innerHTML = `
                <p><i class="fas fa-clock"></i> Temps : ${minutes}m ${seconds}s</p>
            `;
            
            const resultsScore = document.querySelector('.results-score');
            if (resultsScore && !resultsScore.querySelector('.quiz-time')) {
                resultsScore.appendChild(timeElement);
            }
            
            // Message de félicitations personnalisé
            let message = '';
            if (percentage >= 90) {
                message = 'Excellent ! Vous maîtrisez parfaitement ce sujet 🎉';
            } else if (percentage >= 70) {
                message = 'Très bon travail ! Continue comme ça 💪';
            } else if (percentage >= 50) {
                message = 'Bon début ! Revoyez les questions manquées 📚';
            } else {
                message = 'Continuez à pratiquer, vous allez progresser ! 🔄';
            }
            
            const messageElement = document.querySelector('.quiz-message') || document.createElement('div');
            messageElement.className = 'quiz-message';
            messageElement.innerHTML = `<p style="color: var(--primary); font-weight: 500; margin: 1rem 0;">${message}</p>`;
            
            if (resultsScore && !resultsScore.querySelector('.quiz-message')) {
                resultsScore.appendChild(messageElement);
            }
        }
        
        // Focus sur le premier bouton
        setTimeout(() => {
            if (this.elements.restartQuizBtn) {
                this.elements.restartQuizBtn.focus();
            }
        }, 100);
    }
    
    restartQuiz() {
        if (this.currentCategory) {
            this.startQuiz(this.currentCategory);
        }
    }
    
    showCategories() {
        this.quizStarted = false;
        
        if (this.elements.results) {
            this.elements.results.style.display = 'none';
        }
        
        if (this.elements.welcome) {
            this.elements.welcome.style.display = 'block';
        }
        
        // Mettre à jour les catégories
        this.displayCategories();
    }
    
    getQuestionStats(questionId) {
        try {
            const questionStats = JSON.parse(localStorage.getItem('questionStats') || '{}');
            return questionStats[questionId] || { attempts: 0, correct: 0 };
        } catch (error) {
            console.error('Error getting question stats:', error);
            return { attempts: 0, correct: 0 };
        }
    }
}

// Initialiser le quiz
document.addEventListener('DOMContentLoaded', () => {
    try {
        // Attendre que le DOM soit complètement chargé
        setTimeout(() => {
            const quiz = new QuizEngine();
            window.quizEngine = quiz;
            
            console.log('Quiz Engine initialisé avec succès');
            
            // Vérifier si les données sont disponibles
            if (typeof QUIZ_DATA !== 'undefined') {
                console.log('Catégories disponibles:', QUIZ_DATA.categories.length);
                const totalQuestions = Object.values(QUIZ_DATA.questions).reduce((sum, cat) => sum + cat.length, 0);
                console.log('Questions totales:', totalQuestions);
            } else {
                console.warn('QUIZ_DATA n\'est pas défini. Vérifiez que data.js est correctement chargé.');
            }
        }, 100);
        
    } catch (error) {
        console.error('Erreur lors de l\'initialisation du quiz:', error);
        
        // Afficher un message d'erreur
        const welcome = document.getElementById('quizWelcome');
        if (welcome) {
            welcome.innerHTML = `
                <div style="text-align: center; color: var(--danger); padding: 2rem;">
                    <i class="fas fa-exclamation-triangle" style="font-size: 3rem; margin-bottom: 1rem;"></i>
                    <h3>Erreur de chargement du quiz</h3>
                    <p>Une erreur est survenue lors du chargement du quiz.</p>
                    <p style="font-size: 0.9rem; margin-top: 0.5rem;">Détails: ${error.message}</p>
                    <button onclick="location.reload()" class="btn btn-primary" style="margin-top: 1rem;">
                        <i class="fas fa-redo"></i> Recharger
                    </button>
                </div>
            `;
        }
    }
});