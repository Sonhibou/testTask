let a = 1;
let b = 0; 
let c = 0; 
let somcpt = 0;
let cpt = 0;
function cptoui(){
    if(somcpt >= 4){
        alert ("Désolé mais vous avez la covid");   
    }
    window.location = "index.html";
 
}
function compteur(rep){
   while((rep != "oui" ) && (rep != "non")){
    rep = prompt("Veuillez repondre par Oui ou par Non");
   }
    if(rep == "oui"){
        cpt = 1
    }else {
        cpt = 0;
    }
    cptoui();
    return cpt; 
    
    
}

let temp = prompt("Donnez votre température")
if(temp < 38 && temp > 30){
    let rep = prompt("Votre temperature n'est pas indequiante \nVoulez-vous continuer l'evaluation des symptomes Oui|Non?")
    
    while((rep != "oui" ) && (rep != "non")){
        rep = prompt("Veuillez repondre par Oui ou par Non");
    
    }
    if(rep == "non"){
        alert("A Bientôt !!! :) ")
    }else{
        alert("Merci de repondre à toutes les questions que nous allons vous poser ");
        rep =  prompt ("Q1- Est-ce que votre temperature est superieure à 38.1 ?");
        c = compteur(rep);
        somcpt = somcpt + c;

        rep = prompt ("Q2- Avez-vous des toux recents ou des toux qui se sont aggraves?");
        c = compteur(rep);
        somcpt = somcpt + c;

        rep = prompt ("Q3-Avez-vous des difficultes a respirer?");
        c = compteur(rep);
        somcpt = somcpt + c;
        
        rep = prompt ("Q4- Avez-vous des nez qui coulent ?");
        c = compteur(rep);
        somcpt = somcpt + c;
        
        rep = prompt ("Q5- Avez-vous des maux de gorge ?");
        c = compteur(rep);
        somcpt = somcpt + c;
        
        rep = prompt ("Q6- Avez-vous des maux de ventre?");
        c = compteur(rep);
        somcpt = somcpt + c;

        rep = prompt ("Q7- Avez-vous La diarrhee?");
        c = compteur(rep);
        somcpt = somcpt + c;

     
    }

}else{
    alert("Votre état est inquietant, Appeler le 1515");
}
