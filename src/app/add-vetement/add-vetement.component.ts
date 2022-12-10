import { VetementService } from './../services/vetement.service';
import { Component, OnInit } from '@angular/core';
import { Vetement } from '../model/vetement.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-vetement',
  templateUrl: './add-vetement.component.html'
})
export class AddVetementComponent implements OnInit {
  newvetement= new Vetement();
  constructor(public  vetementService:VetementService) { }

  ngOnInit() {
  }


  addVetement(){
    console.log(this.newvetement);
    this.vetementService.ajouterVetement(this.newvetement);
    
  }


}
