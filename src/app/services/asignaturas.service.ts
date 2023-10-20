import { Injectable } from '@angular/core';
import { Asignatura } from '../models/asignatura.model';

@Injectable({
  providedIn: 'root'
})
export class AsignaturasService {


  asignaturaArray: Asignatura[]= [

    {
        "asignatura": "ENG4567",
        "seccion": "002D",
        "docente": "Carlos Fernández",
        "sala": "Aula 205",
        "fecha": "24-09-2023",
        "hora": "10:45",
        "leccion": "Inglés Avanzado"
    },
    {
        "asignatura": "HIS7890",
        "seccion": "002D",
        "docente": "Isabel Gómez",
        "sala": "Aula 301",
        "fecha": "25-09-2023",
        "hora": "13:20",
        "leccion": "Historia Contemporánea"
    },
    {
        "asignatura": "BIO2345",
        "seccion": "002D",
        "docente": "Luis Ramirez",
        "sala": "Laboratorio 7",
        "fecha": "26-09-2023",
        "hora": "15:00",
        "leccion": "Biología Celular"
    },
    {
        "asignatura": "CHE6789",
        "seccion": "002D",
        "docente": "Elena Torres",
        "sala": "Aula 110",
        "fecha": "27-09-2023",
        "hora": "08:55",
        "leccion": "Química Orgánica"
    },
    {
        "asignatura": "ART1234",
        "seccion": "002D",
        "docente": "Pablo Martinez",
        "sala": "Sala de Arte",
        "fecha": "28-09-2023",
        "hora": "12:10",
        "leccion": "Arte Contemporáneo"
    },
    {
        "asignatura": "ECON5678",
        "seccion": "002D",
        "docente": "Laura García",
        "sala": "Aula 303",
        "fecha": "29-09-2023",
        "hora": "09:15",
        "leccion": "Economía Internacional"
    },
    {
        "asignatura": "PHY3456",
        "seccion": "002D",
        "docente": "Roberto Pérez",
        "sala": "Laboratorio 6",
        "fecha": "30-09-2023",
        "hora": "14:30",
        "leccion": "Física Nuclear"
    },
    {
        "asignatura": "MKT9012",
        "seccion": "002D",
        "docente": "Sandra Fernández",
        "sala": "Aula 108",
        "fecha": "01-10-2023",
        "hora": "11:45",
        "leccion": "Marketing Estratégico"
    },
    {
        "asignatura": "HIS1234",
        "seccion": "002D",
        "docente": "Pedro Sánchez",
        "sala": "Aula 201",
        "fecha": "02-10-2023",
        "hora": "16:05",
        "leccion": "Historia Antigua"
    },
    {
        "asignatura": "CS4567",
        "seccion": "002D",
        "docente": "Sofía López",
        "sala": "Laboratorio 4",
        "fecha": "03-10-2023",
        "hora": "10:00",
        "leccion": "Ciencias de la Computación"
    },
    {
        "asignatura": "LIT7890",
        "seccion": "002D",
        "docente": "Marta Fernández",
        "sala": "Aula 306",
        "fecha": "04-10-2023",
        "hora": "13:45",
        "leccion": "Literatura Universal"
    },
    {
        "asignatura": "ECO1234",
        "seccion": "002D",
        "docente": "Andrés Gómez",
        "sala": "Aula 109",
        "fecha": "05-10-2023",
        "hora": "09:30",
        "leccion": "Economía Microeconómica"
    },
    {
        "asignatura": "CHE5678",
        "seccion": "002D",
        "docente": "Lucía Rodríguez",
        "sala": "Laboratorio 8",
        "fecha": "06-10-2023",
        "hora": "15:20",
        "leccion": "Química Inorgánica"
    },
    {
        "asignatura": "ART9012",
        "seccion": "002D",
        "docente": "Diego Pérez",
        "sala": "Sala de Arte",
        "fecha": "07-10-2023",
        "hora": "11:10",
        "leccion": "Historia del Arte"
    },
    {
        "asignatura": "MKT2345",
        "seccion": "002D",
        "docente": "Natalia Martínez",
        "sala": "Aula 112",
        "fecha": "08-10-2023",
        "hora": "16:45",
        "leccion": "Investigación de Mercados"
    }
    ];

  constructor() { }
}
