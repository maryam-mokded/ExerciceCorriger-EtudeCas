const taux = 20 ;

var prixHT;
var prixTTC;

prixHT=window.prompt('Introduire le prix HT');
prixHT=parseFloat(prixHT);

//calcule du prix TTC

prixTTC = prixHT + (prixHT * taux / 100);

//Affichage du prix TTC

document.write('Le prix hors taxe est '+prixHT +'  Alors que le prix TTC est : ' +prixTTC);