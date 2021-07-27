//declaration des variables
let id = [];
let URLimage = [];
let date = [];
let button = [];
let title = [];
let i = 0;
let structureArticle = "";
//fonction pour affichager les articles
function affichageArticle(response) {
    const positionArticle = document.querySelector("#articleContent");
    for (i = 0; i < response.length; i++) {
        response.forEach((article, i) => {
            id[i] = article.id;
            URLimage[i] = article.URLimage;
            date[i] = article.date;
            button[i] = article.button;
            title[i] = article.title;
        });
        structureArticle += `
            <div class="design-item">
                <div class="design-img">
                    <a href="articledetails.html?id=${id[i]}">
                    <img src="${URLimage[i]}">
                    </a>
                    <span>Dormal Corp</span>
                </div>
                <div class="design-title">
               ${button[i]} <span>${date[i]}</span> <br>
                    <p>${title[i]}</p>
                </div>
            </div>  
        `;

        positionArticle.innerHTML = structureArticle;
        //console.log(structureArticle);
    }
}
window.onload = () => {
    affichageArticle(response);
};





