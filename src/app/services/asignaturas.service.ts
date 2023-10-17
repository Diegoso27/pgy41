import { Injectable } from '@angular/core';
import { Asignatura } from '../models/asignatura.model';

@Injectable({
  providedIn: 'root'
})
export class AsignaturasService {


  asignaturaArray: Asignatura[]= [
    {nombre: 'Programación de Aplicaciones moviles', codigo: 'PGY', asistencia: 0},
    {nombre: 'Ingles Intermedio', codigo: 'ING', asistencia: 0},
    {nombre: 'Calidad de Software', codigo: 'CDS', asistencia: 0},
    {nombre: 'Programación de Aplicaciones moviles', codigo: 'PGY', asistencia: 0},
    {nombre: 'Ingles Intermedio', codigo: 'ING', asistencia: 0},
    {nombre: 'Calidad de Software', codigo: 'CDS', asistencia: 0}  
  ];

  constructor() { }
}
