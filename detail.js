var users = {
  'users': {
    'User 1': {
      id: "1",
      URLimage: "./images/test.jpg",
      button: "<button id='btn1'>Travail</button>",
      date: "05 juillet, 2021",
      title: "Comment bien travailler en équipe et améliorer radicalement vos résultats?",
      content:"Le travail en équipe peut être considéré comme la collaboration d'un groupe d'individus partageant les mêmes valeurs et des objectifs similaires. Ces personnes sont amenées à collaborer sur un projet donné pour le faire aboutir. Le travail de équipe est généralement mené par un manager. Ce dernier est la personne qui assure la performance collective au profit de toute l'entreprise, mais également de chaque membre de l'équipe.Il est à savoir que il est tout à fait possible de travailler seul. Cependant, au bout d'un certain temps, le professionnel se fait vite rattraper par ses propres limites. Avec le travail en équipe, la performance d'équipe est mise en avant pour atteindre les objectifs fixés.<h4>Définir des objectifs clairs</h4><p>Chaque membre d’une équipe doit connaître son rôle et ce qu’il peut apporter. Les objectifs à atteindre doivent donc être définis clairement, précisément, et doivent bien entendu être réalisables. Ils doivent de plus apporter de la valeur ajoutée au projet, et les membres d’une équipe doivent pouvoir se rendre compte que leur travail est essentiel et que le temps qu’ils y consacrent est utile Avoir des objectifs communs énoncés clairement et compris va accroître la motivation de chacun et contribuer à forger un fort esprit d’équipe. Mais l’objectif final du projet vers lequel doit tendre le travail d’équipe peut parfois sembler lointain et moins concret. Dans ce cas, il est important de définir des jalons à atteindre, avec des objectifs clairs à chaque fois, de façon à ce que la motivation de l’équipe reste intacte jusqu’à la fin du projet.<br> <br> <img class='img-article'src='./images/equipe.jpg'></p><p>D’autre part, pour améliorer encore la motivation de chacun, il peut être intéressant de fixer également des objectifs individuels (allant dans le sens de l’objectif commun naturellement), comme l’amélioration d’une compétence, de sa productivité, ou encore la prise de responsabilités.Le périmètre d’intervention et la marge de manœuvre de l’équipe doivent également être connus de tous. Il faut être capable de situer l’importance du travail de l’équipe au sein de l’entreprise, le planning à tenir et les attentes des autres équipes. Maîtriser le périmètre d’intervention, la capacité à prendre des décisions et des initiatives permet aussi de déterminer comment travailler en équipe de façon efficace.</p><h4>La communication : la clé de la performance</h4><p>Communication et travail en équipe sont indissociables. Une bonne communication interne est l’une des règles de base du travail en équipe. Il est important que chacun sache quelle est sa mission et ses objectifs à atteindre. Il est ainsi plus facile d’apporter son aide pour la résolution d’un éventuel problème, ou de savoir à qui demander de l’aide lorsque l’on en a besoin.Il est important d’être à l’écoute des autres et de ne pas porter de jugement. Chacun travaille et pense différemment, même si l’équipe utilise des outils et des références communes. En sachant écouter, il est possible d’apprendre des autres et de trouver ensemble la meilleure solution pour atteindre l’objectif fixé. Il ne faut donc pas se focaliser uniquement sur la façon dont on aurait fait telle ou telle chose et prendre en considération toutes les idées, même parfois les plus folles.<br>Pour conclure : <br> Une équipe performante est une équipe dont les membres sont concentrés sur l’objectif à atteindre, communiquent constamment, se respectent et se font confiance, se sentent impliqués dans l’équipe et dans le projet, et utilisent des outils collaboratifs.</p>"
    },
    'User 2': {
      id: "2",
      URLimage: "./images/postJS.jpg",
      button: "<button id='btn2'>javascript</button>",
      date: "02 juillet, 2021",
      title: "Comment faire une requête post en JavaScript sans avoir recours à un formulaire ?",
      content:"<h4>Il est possible en JavaScript d'effectuer une requête POST sans avoir recours à un formulaire de manière classique.</h4><p>Pour effectuer une requête de type POST afin de changer de page dans le navigateur, la logique veut que l'on utilise un formulaire avec un bouton sur lequel l'on cliquerait. Il est possible en JavaScript d'effectuer une requête POST sans avoir recours à un formulaire de manière classique. Pour cela, on peut créer une fonction qui prendrait en paramètre l'URL de destination et les noms et valeurs des paramètres.</p><br><p>Cette fonction va tout d'abord créer un formulaire dynamiquement, en utilisant les méthodes fournies pour la gestion du DOM et notamment la méthode createElement(). La méthode setAttribute() permettra de définir l'URL de destination et la méthode POST servira de méthode de soumission des informations. Ensuite, pour chaque paramètre, on va créer un élément (input) de type caché (hidden), et on lui donnera les noms et valeurs correspondant aux paramètres. Pour éviter un éventuel problème, on vérifiera que le paramètre possède bien une valeur avec la méthode hasOwnProperty().</p><p>On ajoutera ces champs au formulaire, puis on ajoutera ce formulaire à la page internet afin d'éviter des problèmes de compatibilité avec d'autres navigateurs. Il ne reste plus qu'à soumettre ce formulaire avec la méthode submit().</p>"
    },
    'User 3': {
      id: "3",
      URLimage: "./images/articleJS.jpg",
      button: "<button id='btn2'>javascript</button>",
      date: "25 juin, 2021",
      title: "Les promesses en Javascript",
      content:"<h4>Utiliser les promesses</h4><p>Une promesse est un objet (Promise) qui représente la complétion ou l'échec d'une opération asynchrone. La plupart du temps, on « consomme » des promesses et c'est donc ce que nous verrons dans la première partie de ce guide pour ensuite expliquer comment les créer.</p><ul>Une promesse en JavaScript est un objet qui représente l’état d’une opération asynchrone. Une opération asynchrone peut être dans l’un des états suivants :<li>Opération en cours (non terminée) ;</li><li>Opération terminée avec succès (promesse résolue) ;</li><li>Opération terminée ou plus exactement stoppée après un échec (promesse rejetée).</li></ul>"
    },
    'User 4': {
      id: "4",
      URLimage: "./images/picture4.jpg",
      button: "<button id='btn3'>web marketing</button>",
      date: "30 May, 2021",
      title: "Optimiser vos images avec Imagine"
    },
    'User 5': {
      id: "5",
      URLimage: "./images/picture5.jpg",
      button: "<button id='btn1'>jQuery</button>",
      date: "25 May, 2021",
      title: "Script ton taff"
    },
    'User 6': {
      id: "6",
      URLimage: "./images/picture6.jpg",
      button: "<button id='btn4'>analyse des données</button>",
      date: "30 Avril, 2021",
      title: "les bases de data base"
    }
  }

}
function getParameterById(id, url = window.location.href) {
  id = id.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + id + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
var articleid = getParameterById('id');
// document.write("<h1>welcome to article N° " + articleid + " details page</h1>");

var findUserById = (id) => {
  var key = Object.keys(users.users).find(user => users.users[user].id === articleid)
  return users.users[key]
}
//console.log(findUserById(articleid));
var articleDetail = findUserById(articleid);

console.log(articleDetail);

document.getElementById('main').innerHTML=`
<div class='Article'>
        <img class='background' src='${articleDetail.URLimage}'><br> 
        <div class='info'>${articleDetail.button} <span>${articleDetail.date}</span> <br>
        <h3>${articleDetail.title}</h3> <br> </div>
        <p>${articleDetail.content}</p>
</div>
`;