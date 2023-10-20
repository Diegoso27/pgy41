import { Component, OnInit } from '@angular/core';
import { Asignatura } from '../models/asignatura.model';
import { Router } from '@angular/router';
import { AsignaturasService } from '../services/asignaturas.service';

@Component({
  selector: 'app-asist-register',
  templateUrl: './asist-register.page.html',
  styleUrls: ['./asist-register.page.scss'],
})
export class AsistRegisterPage implements OnInit {



  asignaturaArray: Asignatura[] = this.asignaturas.asignaturaArray;


  constructor(
    private router: Router,
    private asignaturas: AsignaturasService
  ) { }

  ngOnInit() {
  }

  onClick(item: any, index: number) {
    console.log(item);
    this.router.navigate(['/ver-asist',index,item.asignatura]);
    
  }

}
