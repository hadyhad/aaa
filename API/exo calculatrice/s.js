const ecran = document.querySelector("#ecran");
const boutons = document.querySelectorAll("button");

let nombre1 = "";
let nombre2 = "";
let operateur = "";

boutons.forEach((bouton) => {
    

    bouton.addEventListener("click", () => {

        const valeur = bouton.textContent
        if (ecran.value === "0") {
            ecran.value = valeur;
        }
        // else {
        //     ecran.value += valeur;
        // }

        if (valeur === "+" || valeur === "-" || valeur === "*" || valeur === "/") {
            
            nombre1 = ecran.value; // ex: nombre1 = 5
            operateur = valeur; // valeur = +
            ecran.value = ""; // on vide l'écran pour pouvoir entrer le deuxieme nombre
        }
        else if(valeur === "." || valeur >= "0" && valeur <= "9" ){
            ecran.value += valeur
        }

        else if (valeur === "=") {

            nombre2 = ecran.value; // on récupere le deuxieme nombre par exemple: 3

            if (operateur === "+") {
                ecran.value = Number(nombre1) + Number(nombre2); //donc 5 + 3
            // Pourquoi Number()?, parce que ce qu'on récupere de l'écran est du texte.
            // ex: nombre1 = "5" avec Number(nombre1) on transforme "5" en 5
            }

            else if (operateur === "-") {
                ecran.value = Number(nombre1) - Number(nombre2);
            }

            else if (operateur === "*") {
                ecran.value = Number(nombre1) * Number(nombre2);
            }

            else if (operateur === "/") {
                ecran.value = Number(nombre1) / Number(nombre2);
            }
        }

        else if (valeur === "C") {
            ecran.value = "";
            nombre1 = "";
            nombre2 = "";
            operateur = "";
        }

  

        

        

    });

});