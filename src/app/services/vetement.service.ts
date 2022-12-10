import { Vetement } from './../model/vetement.model';
import { Injectable } from '@angular/core';

@Injectable({
providedIn: 'root'
})
export class VetementService {
vetements : Vetement[]; //un tableau de Produit
vetement!:Vetement;
constructor() {
this.vetements = [
{ idvetements : 1, nomVetement : "pull", prixVetement : 3000.600, dateCreation
: new Date("01/14/2011")},
{ idvetements : 2, nomVetement : "chemise", prixVetement : 4000.600, dateCreation
: new Date("01/14/2011")},
{ idvetements : 3, nomVetement : "srwal", prixVetement : 5000.600, dateCreation
: new Date("01/14/2011")},

];
}
listerVetement(){
return this.vetements;
}
ajouterVetement(vetement : Vetement){
this.vetements.push(vetement);
}

supprimerVetement( vetement : Vetement){
  //supprimer le produit prod du tableau produits
  const index = this.vetements.indexOf(vetement, 0);
  if (index > -1) {
  this.vetements.splice(index, 1);
  }
  //ou Bien
  /* this.produits.forEach((cur, index) => {
  if(prod.idProduit === cur.idProduit) {
  this.produits.splice(index, 1);
  }
  }); */
  }
  consulterVetement(id:number): Vetement{
    this.vetement = this.vetements.find(p => p.idvetements == id)!;
    return this.vetement;
    }
    updateVetement(p:Vetement)
{
// console.log(p);
this.supprimerVetement(p);
this.ajouterVetement(p);
this.trierVetemnts();
}
trierVetemnts(){
  this.vetements = this.vetements.sort((n1,n2) => {
  if (n1.idvetements! > n2.idvetements!) {
  return 1;
  }
  if (n1.idvetements! < n2.idvetements!) {
  return -1;
  }
  return 0;
  });
  }
}