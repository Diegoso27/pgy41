import { Component, OnInit } from '@angular/core';
import { Asignatura } from '../models/asignatura.model';

@Component({
  selector: 'app-asist-register',
  templateUrl: './asist-register.page.html',
  styleUrls: ['./asist-register.page.scss'],
})
export class AsistRegisterPage implements OnInit {

  asignaturaArray: Asignatura[]= [
    {nombre: 'Programación de Aplicaciones moviles', codigo: 'PGY', asistencia: 0},
    {nombre: 'Ingles Intermedio', codigo: 'ING', asistencia: 0},
    {nombre: 'Calidad de Software', codigo: 'CDS', asistencia: 0},
    {nombre: 'Programación de Aplicaciones moviles', codigo: 'PGY', asistencia: 0},
    {nombre: 'Ingles Intermedio', codigo: 'ING', asistencia: 0},
    {nombre: 'Calidad de Software', codigo: 'CDS', asistencia: 0}  
  ];


  constructor() { }

  ngOnInit() {
  }

}
