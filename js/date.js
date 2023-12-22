// Récupère l'année courante
const currentYear = new Date().getFullYear();
// Met à jour le contenu du span
document.querySelector("footer p").innerHTML = "&copy; - " + "Andy LOUIS" + " - " + currentYear;

// export class Dates{
//         /* methode */
//         static dateTime = ()=>{
//             const dataFooter = document.querySelector("footer p")
//             let dateTimeFull = new Date().getFullYear()
//             dataFooter.innerHTML += "&copy; - MIT - ${dateTimeFull}"
//         }};