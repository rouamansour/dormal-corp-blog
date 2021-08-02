var users = {
  'users': {
    'User 1': {
      id: "1",
      URLimage: "./images/test.jpg",
      button: "<button id='btn1'>Travail</button>",
      date: "05 juillet, 2021",
      title: "Comment bien travailler en équipe et améliorer radicalement vos résultats?",
      content:"Le travail en équipe peut être considéré comme la collaboration d'un groupe d'individus partageant les mêmes valeurs et des objectifs similaires. Ces personnes sont amenées à collaborer sur un projet donné pour le faire aboutir. Le travail de équipe est généralement mené par un manager. Ce dernier est la personne qui assure la performance collective au profit de toute l'entreprise, mais également de chaque membre de l'équipe.Il est à savoir que il est tout à fait possible de travailler seul. Cependant, au bout d'un certain temps, le professionnel se fait vite rattraper par ses propres limites. Avec le travail en équipe, la performance d'équipe est mise en avant pour atteindre les objectifs fixés.<h4>Définir des objectifs clairs</h4><p>Chaque membre d’une équipe doit connaître son rôle et ce qu’il peut apporter. Les objectifs à atteindre doivent donc être définis clairement, précisément, et doivent bien entendu être réalisables. Ils doivent de plus apporter de la valeur ajoutée au projet, et les membres d’une équipe doivent pouvoir se rendre compte que leur travail est essentiel et que le temps qu’ils y consacrent est utile Avoir des objectifs communs énoncés clairement et compris va accroître la motivation de chacun et contribuer à forger un fort esprit d’équipe. Mais l’objectif final du projet vers lequel doit tendre le travail d’équipe peut parfois sembler lointain et moins concret. Dans ce cas, il est important de définir des jalons à atteindre, avec des objectifs clairs à chaque fois, de façon à ce que la motivation de l’équipe reste intacte jusqu’à la fin du projet.<br> <br> <img class='img-article'src='./images/equipe.jpg'></p><p>D’autre part, pour améliorer encore la motivation de chacun, il peut être intéressant de fixer également des objectifs individuels (allant dans le sens de l’objectif commun naturellement), comme l’amélioration d’une compétence, de sa productivité, ou encore la prise de responsabilités.Le périmètre d’intervention et la marge de manœuvre de l’équipe doivent également être connus de tous. Il faut être capable de situer l’importance du travail de l’équipe au sein de l’entreprise, le planning à tenir et les attentes des autres équipes. Maîtriser le périmètre d’intervention, la capacité à prendre des décisions et des initiatives permet aussi de déterminer comment travailler en équipe de façon efficace.</p><h4>La communication : la clé de la performance</h4><p>Communication et travail en équipe sont indissociables. Une bonne communication interne est l’une des règles de base du travail en équipe. Il est important que chacun sache quelle est sa mission et ses objectifs à atteindre. Il est ainsi plus facile d’apporter son aide pour la résolution d’un éventuel problème, ou de savoir à qui demander de l’aide lorsque l’on en a besoin.Il est important d’être à l’écoute des autres et de ne pas porter de jugement. Chacun travaille et pense différemment, même si l’équipe utilise des outils et des références communes. En sachant écouter, il est possible d’apprendre des autres et de trouver ensemble la meilleure solution pour atteindre l’objectif fixé. Il ne faut donc pas se focaliser uniquement sur la façon dont on aurait fait telle ou telle chose et prendre en considération toutes les idées, même parfois les plus folles.<br>Pour conclure : <br> Une équipe performante est une équipe dont les membres sont concentrés sur l’objectif à atteindre, communiquent constamment, se respectent et se font confiance, se sentent impliqués dans l’équipe et dans le projet, et utilisent des outils collaboratifs.</p><h4>Un meilleur environnement de travail</h4><p>Le travail d’équipe intensifie le sentiment d’appartenance. Et quand les personnes sentent qu’elles font partie d’un groupe ou d’une organisation, leur motivation et leur engagement augmentent et par conséquent, leur productivité également.<br>En conclusion, le travail d’équipe est source de motivation, d’engagement et de créativité. Il permet de développer davantage d’idées, de communiquer plus efficacement et d’obtenir de meilleurs résultats dans un environnement de travail plus agréable.</p>"
    },
    'User 2': {
      id: "2",
      URLimage: "./images/postJS.jpg",
      button: "<button id='btn2'>javascript</button>",
      date: "02 juillet, 2021",
      title: "Envoyer et extraire les données des formulaires avec javascript",
      content:"<h4>A propos de l'architecture client/serveur</h4><p>Vous savez sûrement comment fonctionne le web : c'est un ensemble d'ordinateurs comme le vôtre fonctionnant en réseau. On peut ranger ces ordinateurs dans deux catégories : les clients et les serveurs. Les serveurs sont des ordinateurs sur lesquels se trouvent les sites web, ils sont généralement très puissants et fonctionnent en permanence. L'autre groupe, les clients, sont les ordinateurs qui demandent les pages web. Votre machine, comme les nôtres, sont donc des clients. Les visiteurs d'un site web sont des clients.</p><img class='img-article' src='./images/client.png'><p>Côté client, un formulaire HTML n'est rien d'autre qu'un moyen commode et convivial de configurer une requête HTTP pour envoyer des données à un serveur. L'utilisateur peut ainsi adresser des informations à joindre à la requête HTTP.</p><h4>Côté client:la méthode d'envoi des données</h4><p>L'élément (form) définit la méthode d'envoi des données. Tous ses attributs sont conçus pour vous permettre de configurer la requête à envoyer quand un utilisateur presse le bouton d'envoi. Les deux attributs les plus importants sont action et method.</p><h4>l'attribut méthode</h4><p>Cet attribut définit comment les données sont envoyées. Le Protocole HTTP fournit plusieurs façons d'envoyer une requête. Les données des formulaires HTML peuvent être envoyées via au moins deux méthodes : la méthode GET et la méthode POST.Pour bien comprendre la différence entre ces deux méthodes, il convient d'examiner comment le protocole HTTP marche. Chaque fois qu'on veut atteindre une ressource sur Internet, le navigateur envoie une requête à une URL. Une requête HTTP consiste en deux parties : un en-tête (header) qui contient les métadonnées sur les capacités du navigateur, et un corps (body) qui contient les informations nécessaires au serveur pour effectuer la requête.</p><h4>la méthode Get</h4><p>La méthode GET est utilisée par le navigateur pour demander au serveur de renvoyer une certaine ressource. 'Hé le serveur, je veux cette ressource.' Dans ce cas, le navigateur envoie un corps vide. Du coup, si un formulaire est envoyé avec cette méthode, les données envoyées au serveur sont ajoutées à l'URL.</p><h4>la méthode POST</h4><p>La méthode POST est un peu différente.C'est la méthode que le navigateur utilise pour demander au serveur une réponse prenant en compte les données contenues dans le corps de la requête HTTP : « Hé serveur ! vois ces données et renvoie-moi le résultat approprié ». Si un formulaire est envoyé avec cette méthode, les données sont ajoutées au corps de la requête HTTP.</p><h4>Côté serveur:récupérer les données</h4><p>Quelle que soit la méthode HTTP qu'on choisit, le serveur reçoit une chaîne de caractères qui sera décomposée pour récupérer les données comme une liste de paires clé/valeur. La façon d'accéder à cette liste dépend de la plateforme de développement utilisée et des modèles qu'on peut utiliser avec. La technologie utilisée détermine aussi comment les clés dupliquées sont gérées ; souvent, la priorité est donnée à la valeur de clé la plus récente.</p><p>Exemple : PHP brut<br>Le PHP met à disposition des objets globaux pour accéder aux données. En supposant que vous avez utilisé la méthode POST, l'exemple suivant récupère les données et les affiche à l'utilisateur. Bien sûr, ce que vous en faites dépend de vous. Vous pouvez les afficher, les ranger dans une base de données, les envoyer par mail ou les traiter autrement.</p>"
    },
    'User 3': {
      id: "3",
      URLimage: "./images/picture5.jpg",
      button: "<button id='btn5'>jQuery</button>",
      date: "25 juin, 2021",
      title: "La méthode jQuery $.ajax()",
      content:"<p>La méthode jQuery $.ajax() est au coeur de la création de requêtes Ajax avec jQuery et il convient donc de bien comprendre comment elle fonctionne.<br>Cette méthode va prendre un objet de configuration en argument. Cet objet de configuration devra contenir toutes les instructions (ou “options”) dont jQuery a besoin pour compléter notre requête et notamment l’URL de la requête, le type de requête, le type de données attendues etc.<br>On va pouvoir passer un grand nombre d’options à $.ajax() afin de fournir des instructions plus ou moins spécifiques par rapport à notre requête. Les options les plus couramment utilisées sont les suivants :</p><ul><li>url : URL de la requête. Seule option strictement obligatoire</li><li>method (valeur par défaut : GET) : Permet de préciser la méthode d’envoi de la requête (GET, POST ou plus rarement PUT, DELETE, etc.)</li><li>dataType : Le type de données qu’on attend en réponse du serveur. Par défaut, jQuery examinera le type MIME de la réponse si aucun type de données n’est spécifié.</li><li>data : Contient les données à envoyer au serveur. Si ces données ne sont pas au format chaine de caractères, elles seront converties en chaine.</li><li>async (valeur par défaut : true) : Permet d’indiquer si la requête doit être renvoyée de manière asynchrone (true) ou synchrone (false).</li><li>cache (valeur par défaut : true sauf si le type de données défini est script ou jsonp) : Permet d’indiquer s’il faut utiliser une réponse en cache si disponible (true) ou pas (false)</li><li>beforeSend : Permet de définir des en-têtes personnalisées .</li><li>context : Permet de préciser le contexte dans lequel la ou les fonctions de rappel doivent être exécutées. Par défaut, le contexte est un objet représentant les réglages Ajax utilisés durant l’appel.</li><li>name : Nom d’utilisateur à utiliser dans le cas où une demande d’identification HTTP est faite.</li><li>password : Mot de passe à utiliser dans le cas où une demande d’identification HTTP est faite.</li><li>timeout : Délai d’attente en millisecondes avant de considérer la demande comme un échec.</li></ul><h4>Le type de la requête : POST ou GET ?</h4><p>Si votre requête est de type GET, rien ne vous empêche de faire passer des paramètres avec GET pour les utiliser côté serveur dans l'array$_GET. Pour cela, vous pouvez utiliser le paramètredata. Avec un peu de concaténation, on s'en sort très bien.<br>Pour nous donner un petit exemple dans cette petite partie sur les requêtes POST, nous vous demandons d'oublier cinq minutes l'histoire du fil de commentaire. Pensons plutôt à l'envoi d'un mail depuis une page de contact. Le visiteur tape un message dans un formulaire HTML, et ce message vous est envoyé par email en AJAX. Si nous souhaitons réaliser ce système, il faut envoyer des informations au serveur avec notre requête HTTP, pour cela, il faut commencer à spécifier un type POST pour$.ajax().</p><img class='img-article' src='./images/jquery.jpg'><h4>Les raccourcis $.get() et $.post()</h4><p>Avouez qu'écrire une fonction$.ajax()pour ensuite définir son type GET/POST dans le paramètre adéquat, c'est lourd. On a voulu simplifier la vie aux développeurs en leur permettant de créer directement une requête GET ou POST. Ces raccourcis sont les fonctions$.get()et$.post(). Toutes les deux fonctionnent de la même manière, elles font appel implicitement à$.ajax()en lui spécifiant un type GET pour$.get()et un type POST pour$.post().<br>Et l'objet XmlHttpRequest, il est quand même instancié ?<br>Bien sûr, vous ne vous rappelez pas du fonctionnement de$.ajax()? Dès qu'elle est appelée, un objet de type XHR est créé ;$.get()et$.post()font toutes les deux appel à cette fonction, l'objet est donc bel et bien instancié.</p>"
    },
    'User 4': {
      id: "4",
      URLimage: "./images/picture4.jpg",
      button: "<button id='btn3'>web marketing</button>",
      date: "30 May, 2021",
      title: "Pourquoi faire du marketing digital?",
      content:"<h4>les avantages du marketing digital</h4><p>Pourquoi les entreprises utilisent-elles le marketing digital ou font appel à une agence de marketing digital ?Tout simplement parce qu’une stratégie digitale offre de multiples avantages, applicables à tous types d’entreprises, de taille et de moyens différents :</p><ul><li>Le marketing digital permet une interaction directe avec le client.</li><li>Les informations obtenues sur les consommateurs vous aident à adapter l’offre et à proposer un produit ou service personnalisé qui correspond à leurs besoins.</li><li>Le marketing digital favorise la fidélisation et la satisfaction des clients par une relation durable et de qualité.</li><li>Il permet aussi de faire des économies de coût et de budget : s’offrir un site web coûte moins cher qu’installer une boutique physique .</li><li>Le marketing digital crée une disponibilité 7 j/7, 24 h/24 de votre entreprise.</li><li>L’ouverture à l’international est facilitée.</li><li>Le gain de visibilité améliore votre image de marque et permet de toucher un public plus large.</li><li>Le marketing digital offre bien plus de facilités et de possibilités (pour l’entreprise, mais aussi pour les salariés grâce au télétravail).</li><li>Les résultats sur les performances de votre entreprise sont beaucoup plus précis qu’avant grâce à l’analyse des KPI.</li><li>Le marketing digital permet également de cibler de nouveaux clients, de détecter des leads et ainsi de se différencier de la concurrence grâce à une stratégie sur mesure.</li></ul><img class='img-article' src='./images/work.jpg'><h4>LES DIFFÉRENTS LEVIERS DU MARKETING DIGITAL<br>LE RÉFÉRENCEMENT : SEO ET SEA</h4><p>Le référencement web est indispensable pour augmenter le trafic vers votre site : un bon référencement permet de se positionner dans les premiers résultats des moteurs de recherche.<br>Le SEO (Search Engine Optimization) désigne les méthodes liées au référencement naturel (netlinking, content marketing…), tandis que le SEA est un référencement payant (display only, display sélectif…). Différents, les deux n’en sont pas moins complémentaires.<br>Quelle méthode faut-il privilégier pour votre stratégie de référencement ? Sont-elles complémentaires ?<br>Le SEO, s’il semble moins onéreux que le SEA, est un travail de longue haleine. Il repose sur la rédaction régulière d’articles afin de remonter dans les résultats des moteurs de recherche.</p><img class='img-article' src='./images/sea.webp'><p>Le SEA, permet une économie de temps, mais ne se suffit pas à lui-même : acheter des campagnes AdWords ne vous sera pas d’une grande utilité pour un site vide de contenus ou d’informations pertinentes. En revanche, il améliore votre référencement en comblant les lacunes du SEO. Les deux méthodes sont donc parfaitement complémentaires.</p><img class='img-article' src='./images/seaa.png'><h4>Marketing digital et social media : quelle stratégie adopter ?</h4><p>Le social media ou SMO (Social Media Optimization) fait partie intégrante de tout marketing digital efficace. Comprenez par SMO le champ élargi des recherches via les réseaux sociaux, de plus en plus en vogue avec l’utilisation des hashtags par exemple.<br>Les réseaux sociaux permettent entre autres d’augmenter le trafic vers votre site grâce à la publication de posts réguliers sur votre activité.</p><img class='img-article' src='./images/socialMedia.jpg'>"    },
    'User 5': {
      id: "5",
      URLimage: "./images/articleJS.jpg",
      button: "<button id='btn2'>javascript</button>",
      date: "25 May, 2021",
      title: "Les promesses en Javascript",
      content:"<h4>Utiliser les promesses</h4><p>Une promesse est un objet (Promise) qui représente la complétion ou l'échec d'une opération asynchrone. La plupart du temps, on « consomme » des promesses et c'est donc ce que nous verrons dans la première partie de ce guide pour ensuite expliquer comment les créer.</p><ul>Une promesse en JavaScript est un objet qui représente l’état d’une opération asynchrone. Une opération asynchrone peut être dans l’un des états suivants :<li>Opération en cours (non terminée) ;</li><li>Opération terminée avec succès (promesse résolue) ;</li><li>Opération terminée ou plus exactement stoppée après un échec (promesse rejetée).</li></ul><h4>syntaxe</h4><p>new Promise( /* exécuteur */ function(resolve, reject) { ... } );</p><h4>Paramètres</h4><p>Une fonction à laquelle on passera deux arguments : resolve et reject. Cette fonction est exécutée immédiatement par l'implémentation de Promise qui fournit les fonctions resolve et reject (elle est exécutée avant que le constructeur Promise ait renvoyé l'objet créé). Les fonctions resolve et reject, lorsqu'elles sont appelées, permettent respectivement de tenir ou de rompre la promesse. On attend de l'exécuteur qu'il démarre un travail asynchrone puis, une fois le travail terminé, appelle la fonction resolve (si tout s'est bien passé) ou la fonction reject (lorsqu'il y a eu un problème) pour définir l'état final de la promesse.Si une erreur est générée par l'exécuteur, la promesse est rompue et la valeur de retour de l'exécuteur est ignorée.</p><h4>Méthodes</h4><p>Les méthodes Promise.prototype.then() et Promise.prototype.catch() renvoient des promesses et peuvent ainsi être chaînées. C'est ce qu'on appelle une composition.</p><img class='img-article' src='./images/promise.png'><h4>Promise.all(iterable)</h4><p>Renvoie une promesse tenue lorsque toutes les promesses de l'argument itérable sont tenues ou une promesse rompue dès qu'une promesse de l'argument itérable est rompue. Si la promesse est tenue, elle est résolue avec un tableau contenant les valeurs de résolution des différentes promesses contenues dans l'itérable (dans le même ordre que celui-ci). Si la promesse est rompue, elle contient la raison de la rupture de la part de la promesse en cause, contenue dans l'itérable. Cette méthode est utile pour agréger les résultats de plusieurs promesses tous ensemble.</p><h4>Promise.resolve(valeur)</h4><p>Renvoie un objet Promise qui est tenue (résolue) avec la valeur donnée. Si la valeur possède une méthode then, la promesse renvoyée « suivra » cette méthode pour arriver dans son état, sinon la promesse renvoyée sera tenue avec la valeur fournie. Généralement, quand on veut savoir si une valeur est une promesse, on utilisera Promise.resolve(valeur) et on travaillera avec la valeur de retour en tant que promesse.</p><h4>Promise.allSettled(iterable)</h4><p>Attend que l'ensemble des promesses aient été acquittées (tenues ou rompues) et renvoie une promesse qui est résolue après que chaque promesse ait été tenue ou rompue. La valeur de résolution de la promesse renvoyée est un tableau dont chaque élément est le résultat des promesses initiales.</p><h4>Prototype pour Promise</h4><h4>Méthodes</h4><h4>Promise.prototype.catch()</h4><p>Ajoute une fonction callback à utiliser en cas de rejet de la promesse. Elle renvoie une nouvelle promesse qui est résolue avec la valeur de retour du callback s'il est appelé ou avec la valeur de résolution initiale si la promesse est tenue (et non rejetée).</p><h4>Promise.prototype.then()</h4><p>Ajoute des fonctions à utiliser en cas de résolution ou de rejet de la promesse et renvoie une nouvelle promesse qui est résolue avec la valeur de retour de la fonction utilisée en fonction de la résolution ou non.</p><h4>Promise.prototype.finally()</h4><p>Ajoute une fonction à la promesse et renvoie une nouvelle promesse qui est résolue lorsque la promesse originale est résolue. La fonction ajoutée est appelée lorsque la promesse est résolue, qu'elle soit tenue ou rejetée.</p>"
    },
    'User 6': {
      id: "6",
      URLimage: "./images/picture6.jpg",
      button: "<button id='btn4'>analyse des données</button>",
      date: "30 Avril, 2021",
      title: "les bases de data base",
      content:"<h4>Qu’est-ce que base de donnée</h4><p>Les bases de données informatiques sont utilisées dans un grand nombre d’entreprises pour stocker, organiser et analyser les données. Découvrez tout ce que vous devez savoir à ce sujet : qu’est-ce qu’une base de données, à quoi sert-elle, comment fonctionne-t-elle, quelles sont les différentes catégories, et quelles sont les meilleures.<br>Une base de données (que nous nommerons BDD par commodité) est une collection d’informations organisées afin d’être facilement consultables, gérables et mises à jour. Au sein d’une database, les données sont organisées en lignes, colonnes et tableaux. Elles sont indexées afin de pouvoir facilement trouver les informations recherchées à l’aide d’un logiciel informatique. Chaque fois que de nouvelles informations sont ajoutées, les données sont mises à jour, et éventuellement supprimées.<br>Les bases de données sont utilisées par de nombreuses entreprises dans toutes les industries. Elles sont notamment utilisées par les compagnies aériennes pour gérer les réservations. Elles sont utilisées pour la gestion de production. Pour les enregistrements médicaux dans les hôpitaux, ou encore pour les enregistrements légaux dans les compagnies d’assurances. Les bases de données les plus larges sont généralement utilisées par les agences gouvernementales, les grandes entreprises ou les universités.</p><h4>Comment fonctionnent les bases de données ?</h4><img class='img-article' src='./images/base.jpg'><p>Les bases de données sont stockées sous forme de fichiers ou d’ensemble de fichiers sur un disque magnétique, une cassette, un disque optique ou tout autre type d’appareil de stockage. Les bases de données traditionnelles (hiérarchiques) sont organisées par champs (fields), enregistrements et fichiers. Un champ est une seule pièce d’information. Un enregistrement est un ensemble de champs. Un fichier est une collection d’enregistrements<br>Par exemple, un répertoire téléphonique est l’équivalent d’un fichier. Il contient un ensemble d’enregistrements, et chaque enregistrement regroupe trois champs : nom, adresse et numéro de téléphone. En guise d’exemple, on peut aussi citer les catalogues de produits ou les inventaires.<br>La faculté de consulter ou de modifier une database (lire ou écrire) est conférée aux divers utilisateurs par un database manager (gestionnaire de base). Les bases de données sont principalement présentes au sein des systèmes mainframe les plus larges, mais on les retrouve aussi au sein de workstations distribuées de moindre envergure et autres systèmes midrange comme les IBM AS/400 ou même les ordinateurs personnels.</p><h4>Quels sont les différents types de bases de données?</h4><img class='img-article' src='./images/typeData.png'><h4>Base de données hiérarchique</h4><p>Les bases de données hiérarchiques comptent parmi les plus anciennes bases de données. Au sein de cette catégorie, les enregistrements sont organisés dans une structure d’arborescence. Chaque niveau d’enregistrements découle sur un ensemble de catégories plus petites.</p><h4>Base de données réseau</h4><p>Les bases de données réseau sont également parmi les plus anciennes. Plutôt que de proposer des liens uniques entre différents ensembles de données à divers niveaux, les bases de données réseaux créent des liens multiples entre les ensembles en plaçant des liens, ou des pointeurs, sur un ensemble d’enregistrements ou un autre. La vitesse et la polyvalence des bases de données réseau ont conduit à une adoption massive de ce type de databases au sein des entreprises ou dans le domaine du e-commerce.</p><h4>Base de données orientée texte</h4><p>La “flat file database” se présente sous la forme d’un fichier .txt ou .ini, qui est soit un fichier texte, soit un fichier combinant du texte avec un fichier binaire. Chaque ligne ne comporte généralement qu’un seul enregistrement.</p><h4>la base de donnéee orientée objet</h4><p>Cette typologie de base de données est encore en cours d’élaboration. Elle est focalisée sur la base de données des objets en tant que concept de programmation qui va permettre de simplifier la création de logiciels. </p><h4>Base de données SQL (relationnelle)</h4><p>Les bases de données relationnelles ont été inventées en 1970 par E.F. Codd de IBM. Il s’agit de documents tabulaires dans laquelle les données sont définies afin d’être accessibles et de pouvoir être réorganisées de différentes manières<br>Les bases de données relationnelles sont constituées d’un ensemble de tableaux. Au sein de ces tableaux, les données sont classées par catégorie. Chaque tableau comporte au moins une colonne correspondant à une catégorie. Chaque colonne comporte un certain nombre de données correspondant à cette catégorie.<br>L’API standard pour les bases de données relationnelles est le Structured Query Language (SQL). Les bases de données relationnelles sont facilement extensibles, et de nouvelles catégories de données peuvent être ajoutées après la création de la database originale sans avoir besoin de modifier toutes les applications existantes.</p><h4>Base de données distribuée</h4><p>Une BDD distribuée est une database dont certaines portions sont stockées à plusieurs endroits physiques. Le traitement est réparti ou répliqué entre différents points d’un réseau.<br>Les bases de données distribuées peuvent être homogènes ou hétérogènes. Dans le cas d’un système de base de données distribuée homogène, tous les emplacements physiques fonctionnent avec le même hardware et tournent sous le même système d’exploitation et les mêmes applications de bases de données. Au contraire, dans le cas d’une database distribuée hétérogène, le hardware, les systèmes d’exploitation et les applications de bases de données peuvent varier entre les différents endroits physiques.</p><img src='./images/database.jpg' class='img-article'>"
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
        <div class='info'>${articleDetail.button}   <i class='fas fa-calendar-alt'style='font-size:15px'></i> <span class='dateArticle'>${articleDetail.date}</span> <br>
        <h3>${articleDetail.title}</h3> <br> </div>
        <p>${articleDetail.content}</p>
</div>
`;