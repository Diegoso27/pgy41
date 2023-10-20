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

  asignatura: string ="";
  seccion: string ="";
  docente: string ="";
  sala: string ="";
  fecha: string ="";
  hora: string ="";
  leccion: string ="";
  index: number = 0;


  ngOnInit() {
    this.index = this.activatedRoute.snapshot.params['index'];
    this.seccion = this.asignaturaArray[this.index].seccion;
    this.docente = this.asignaturaArray[this.index].docente;
    this.asignatura = this.asignaturaArray[this.index].asignatura;
    this.sala = this.asignaturaArray[this.index].sala;
    this.fecha = this.asignaturaArray[this.index].fecha;
    this.hora = this.asignaturaArray[this.index].hora;
    this.leccion = this.asignaturaArray[this.index].leccion;

    
    console.log("item", this.index);
   }



}
