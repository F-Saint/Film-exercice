// QCM en JS - Une réponse possible seulement par question

// 1) On importe nos questions depuis quetions.js
import questions from './quiz.js'

// 2) On récupère la div de notre fichier html qui servira de réceptacle pour notre qcm
const quiz = document.querySelector('.quiz')

// 3) Utiliser le fameux forEach sur notre tableau d'objets questions :
// Il faudra aussi boucler sur les choix possible de réponses (for .. in)
questions.forEach((item) => {
    // Donner à des variables les valeurs d'une question
    const id = item.id
    const question = item.question
    const choices = item.reponses

    // C'est ici qu'on va créer, ajouter du contenu et insérer nos différents éléments du QCM 
    // (question, les choix possibles, le bouton de soumission etc)
    const title = document.createElement('h2')
    title.textContent = `${id} - ${question}`

    // Créér la liste qui contiendra chacun des choix possibles 
    const responseList = document.createElement('ul')
   
    // Ici on crée notre zone de résultat 
    const resultZone = document.createElement('h2')

    // On crée maintenant le bouton de soumission
    const submit = document.createElement('button')
    submit.textContent = "Soumettre"

});
    
    // On vient afficher les réponses possibles en bouclant dans notre objet (qui est dans un objet) cad "reponses"
    for (let key in choices) {
        const li = document.createElement('li')
        li.innerHTML = `<input type="radio" name=${id} value=${key}><p>${key} : ${choices[key]}</p>`
        responseList.appendChild(li)
    }

    // J'insère les éléments dans ma div de classe quiz qui est dans le html
    quiz.appendChild(title)
    quiz.appendChild(responseList)
    quiz.appendChild(submit)
    quiz.appendChild(resultZone)

    // On viendra écouter le bouton de soumission pour chaque question et on 
    // comparera le choix du user avec la réponse attendue 
    submit.addEventListener('click', () => {
        // On récupère la radio sur laquelle le user a cliqué
        const userChoice = document.querySelector(`input[name="${id}"]:checked`)

    });