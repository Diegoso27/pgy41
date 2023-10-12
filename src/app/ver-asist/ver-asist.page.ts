import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Asignatura } from '../models/asignatura.model';

@Component({
  selector: 'app-ver-asist',
  templateUrl: './ver-asist.page.html',
  styleUrls: ['./ver-asist.page.scss'],
})
export class VerAsistPage implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  codigo: any;

  ngOnInit() {
    this.codigo = this.activatedRoute.snapshot.paramMap.get('codigo');
    console.log("codigo", this.codigo);
  }


}
