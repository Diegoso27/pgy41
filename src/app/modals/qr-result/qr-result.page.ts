import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-qr-result',
  templateUrl: './qr-result.page.html',
  styleUrls: ['./qr-result.page.scss'],
})
export class QrResultPage implements OnInit {
  
  @Input() dataQr:any;
  dataAsistencia:any;

  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() {
    console.log("data-Modal",JSON.parse(this.dataQr));
    this.dataAsistencia = JSON.parse(this.dataQr);
  }
  
  close(){
    this.modalController.dismiss();
  }

}
