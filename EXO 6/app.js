const input = document.querySelector('input') // on sélectionne l'élément d'entrée (input)
const favoriteBtn = document.querySelector(".btn-favorite"); // le bouton de favoris
const submitBtn = document.querySelector(".submit"); // le bouton de soumission
const ul = document.querySelector("ul"); // la liste non

// on va afficher les détails du repas en fonction de la recherche
function displayMeal() {
    // Vérifie si la valeur de l'entrée (input) si elle n'est pas vide
    if (input.value !== "") {
        ul.innerHTML = ""; 
        const URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${input.value}`; 
        axios.get(URL)
            .then(res => {
                const body = res.data.meals; // on récupère les données des repas
                console.log(body);
                body.forEach(element => { // une boucle à travers chaque repas récupéré
                    const title = element.strMeal; // Titre du repas
                    const category = element.strCategory; // Catégorie du repas
                    const area = element.strArea; // Région et origine du repas
                    const instructions = element.strInstructions; // recette pour préparer le repas
                    const img = element.strMealThumb; // l'image du repas
                    const li = document.createElement("li"); // Crée un élément li (<p>${instructions}</p>)
                    li.innerHTML = `
                    <img src="${img}" alt="poster">
                    <h2>${title}</h2>
                    <h3>${category}</h3>
                    <h3>${area}</h3>
                    
                    <button id=${element.idMeal} class="btn-add">Add to favorite</button>      
                    `;
                    ul.appendChild(li); // on va ajouter l'élément li à la liste ul
                    
                });
            }).catch(e => console.error(e)); // catch qui va gère les erreurs de la requête 
    }
}


 
// la fonction pour ajouter un repas aux favoris

    // const btnAdd = document.querySelectorAll(".btn-add"); // on sélectionne tous les boutons "Add to favorite"
   
    // btnAdd.forEach(btn => {
    //     btn.addEventListener("click", (e) => {
    //         console.log(typeof btnAdd)
    //         console.log(e.target.id)
    //         const li = btn.parentElement; // on sélectionne l'élément parent du bouton (li)
    //         const title = li.querySelector("h2").textContent; // Titre du repas
    //         const category = li.querySelector("h3").textContent; // Catégorie du repas
    //         const area = li.querySelector("h3").textContent; // Région d'origine du repas
    //         const instructions = li.querySelector("p").textContent; // recette pour préparer le repas
    //         const img = li.querySelector("img").src; // URL de l'image du repas
    //         const liFav = document.createElement("li"); // on crée un nouvel élément li pour les favoris
    //         liFav.innerHTML = `
    //         <img src="${img}" alt="poster">
    //         <h2>${title}</h2>
    //         <h3>${category}</h3>
    //         <h3>${area}</h3>
    //         <p>${instructions}</p>
    //         <button class="btn-remove">Remove</button>  
    //         `;
    //         ul.appendChild(liFav); // on ajoute l'élément li des favoris à la liste ul
    //         btn.remove(); // on supprime le bouton "Add to favorite"
    //     });
    // });

 
// la fonction pour supprimer un repas des favoris
function removeFavorite() {
    const btnRemove = document.querySelectorAll(".btn-remove"); // on va sélectionne tous les boutons "Remove"
    btnRemove.forEach(btn => {
        btn.addEventListener("click", () => {
            const li = btn.parentElement; // puis sélectionne l'élément parent du bouton (li)
            li.remove(); // et supprimer l'élément li (repas) de la liste des favoris
        });
    });
}
 



// l'événement lors du clic sur le bouton de favoris
favoriteBtn.addEventListener("click", () => {
    ul.innerHTML = ""; // on va éfface le contenu précédent de la liste
    const favorites = JSON.parse(localStorage.getItem("favorites")) || []; // puis récupère les favoris depuis le stockage local
    favorites.forEach(meal => { // on crée une boucle à travers chaque repas favori
        const li = document.createElement("li"); // Crée un élément li
        li.innerHTML = `
        <img src="${meal.img}" alt="poster">
        <h2>${meal.title}</h2>
        <h3>${meal.category}</h3>
        <h3>${meal.area}</h3>
        <p>${meal.instructions}</p>  
        <button class="btn-remove">Remove</button>
        `;
        ul.appendChild(li); // Ajoute l'élément li à la liste ul
    });
});
 
removeFavorite(); // on va appelle la fonction pour supprimer un repas des favoris
 
submitBtn.addEventListener("click",()=> {
    displayMeal
    const btnAdd = document.getElementsByClassName("btn-add")
    // btnAdd.addEventListener("click",(e) =>{
    // const idMeal = e.target.id
    console.log(idMeal)
                    })
 // et pour finir l'événement lors du clic sur le bouton de soumission pour afficher les repas


