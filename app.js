// Pour utiliser notre module log de module simple (objet)
const logModule = require ("./Modules/Simple/log");
//Ici logModule contient l'objet log que nous avons exporté pour accéder à chacune de ses propriétés
logModule.info('Projet Node.JS lancé avec succès')
logModule.warning('Attention votre projet est sur le point d\'exploser')
logModule.error('Vous avez explosé')


//Pour utiliser notre module log de module de fonction
const logModuleFunc = require('./Modules/Func/log')
//Ici logModuleFunc contient une fonctio,qu'on devra directement appeler avec les parenthèses
logModuleFunc('Bonjour les Full Stack')


//Pour utiliser notre module person.js ,c'est un module de classe

const person = require('./Modules/ClassM/Person')

let bryan = new person('Lequeux' ,'Bryan' , new Date(1995,8,14))
console.log(bryan.description)