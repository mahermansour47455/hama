import { Component ,OnInit } from '@angular/core';
import { Vetement } from '../model/vetement.model';
import { VetementService } from '../services/vetement.service';
@Component({
  selector: 'app-vetements',
  templateUrl: './vetements.component.html'
})
export class VetementsComponent implements OnInit{
  vetements! : Vetement[]; //un tableau de chînes de caractères
  

constructor (private vetementService : VetementService ) {

  this.vetements = vetementService.listerVetement();
  

}
ngOnInit():void{

}
supprimerVetement(vetement : Vetement){
  let conf = confirm("Etes-vous sûr ?");
 if (conf)
  this.vetementService.supprimerVetement(vetement);}



}
