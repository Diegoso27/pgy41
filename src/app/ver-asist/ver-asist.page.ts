import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Asignatura } from '../models/asignatura.model';
import { AsignaturasService } from '../services/asignaturas.service';

@Component({
  selector: 'app-ver-asist',
  templateUrl: './ver-asist.page.html',
  styleUrls: ['./ver-asist.page.scss'],
})
export class VerAsistPage implements OnInit {


  asignaturaArray: Asignatura[] = this.asignaturas.asignaturaArray;

  


  constructor(
    private activatedRoute: ActivatedRoute,
    private asignaturas: AsignaturasService
  ) { }

  nombre: string = "";
  codigo: string = "";
  index: number = 0;
  asistencia: number = 0;


  ngOnInit() {
    this.index = this.activatedRoute.snapshot.params['index'];
    this.nombre = this.asignaturaArray[this.index].nombre;
    this.codigo = this.asignaturaArray[this.index].codigo;
    this.asistencia = this.asignaturaArray[this.index].asistencia;
    
    console.log("item", this.index);
   }



}
