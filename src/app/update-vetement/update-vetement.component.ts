import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vetement } from '../model/vetement.model';
import { VetementService } from '../services/vetement.service';
@Component({
  selector: 'app-update-vetement',
  templateUrl: './update-vetement.component.html',
  styleUrls: ['./update-vetement.component.css']
})
export class UpdateVetementComponent {

  currentVetement = new Vetement();

  constructor(private activatedRoute: ActivatedRoute,
    private vetementService: VetementService,private router :Router) { }

    ngOnInit() {
      // console.log(this.route.snapshot.params.id);
      this.currentVetement = this.vetementService.consulterVetement(this.activatedRoute.snapshot. params['id']);
      console.log(this.currentVetement);
      }
      updateVetement(){
        this.vetementService.updateVetement(this.currentVetement);
        this.router.navigate(['vetements']);
      }
      

     }



