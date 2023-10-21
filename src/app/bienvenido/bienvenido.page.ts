import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { filter } from 'rxjs';
import { StorageService } from '../services/storage.service';
import { ApiJokesService } from '../services/api-jokes.service';
import { QrResultPage } from '../modals/qr-result/qr-result.page';
import { HelperService } from '../services/helper.service';
import { BarcodeScanner } from 'capacitor-barcode-scanner';
import {  GeolocationPlugin } from '@capacitor/geolocation';


@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.page.html',
  styleUrls: ['./bienvenido.page.scss'],
})
export class BienvenidoPage implements OnInit {


  
  usuario: any;
  nombreUser: string = '';
  usuarioCorreo: string = '';
  jokeSetup: string = '';
  jokeDelivery: string = '';
  tipo: string = '';
  jokeSingle: string = '';

  data: any[] = [];

  resultQr: any = "";

  llenarData() {
    this.apiJoke.getData().subscribe(data => {
      this.data = data;

      this.tipo = JSON.stringify(data.type);
      console.log(this.tipo);
      this.jokeSetup = JSON.stringify(data.setup);
      this.jokeDelivery = JSON.stringify(data.delivery);
      console.log(this.jokeSetup, this.jokeDelivery,);
      this.jokeSingle = JSON.stringify(data.joke);
      console.log(this.jokeSetup, this.jokeDelivery,);
      

      console.log("apiJokes",this.data);
      console.log(this.jokeSetup, this.jokeDelivery,);
    })
  }


  constructor(
    private auth: AuthService,
    private router: Router,
    private storage: StorageService,
    private apiJoke: ApiJokesService,
    private helper: HelperService,
   // private geolocation: GeolocationPlugin
  ) { }


/*   geolocalizacion() {
    var localizacion = this.geolocation.getCurrentPosition().then((resp) =>{

    }).catch(error)

  } */

  async scan() {
    this.resultQr = (await BarcodeScanner.scan()).code;
    console.log(this.resultQr);
    await this.modalResultQr();
  }

  async modalResultQr(){
    
/*     var asistencia = 
    [ {
      asignatura: this.resultQr.asignatura,
      seccion: this.resultQr.seccion,
      docente: this.resultQr.docente,
      sala: this.resultQr.sala,
      fecha: this.resultQr.resut,
      hora: this.resultQr.hora,
      leccion: this.resultQr.leccion
    }
    ];
    qr.push(this.resultQr); */
  


    const parametros={dataQr: this.resultQr}
    await this.helper.showModal(QrResultPage,parametros,false);
  }


  
  async correoUserFirebase(){
    var user = await this.auth.currentUser();
    console.log("CURRENT USER", user?.email);
    console.log("CORREO USUARIO STORAGE",this.nombreUser);
    
  }



  async cargarUsuario() {
    console.log("USUARIO STORAGE", await this.storage.obtenerUsuario());
    console.log("PROPIEDAD SERVICE STORAGE", this.storage.usuarioCorreo);

    const currentUser = await this.auth.currentUser();

    if (currentUser) {
        const user = (await this.storage.obtenerUsuario()).find(e => e.email == currentUser.email);

        if (user) {
            this.usuario = user;
            this.usuarioCorreo = user.email;
            this.nombreUser = user.name;
            console.log(this.usuario);
        } else {

        }
    } else {

    }
  }

  ngOnInit() {
   this.llenarData();
   this.cargarUsuario();
   this.correoUserFirebase(); 
  }

  async logout() {
    var corfirmar = await this.helper.showConfirm("Desea cerrar la sesión actual?","Confirmar","Cancelar")
    if (corfirmar == true) {
      await this.auth.logout();
      await this.router.navigateByUrl("login");
    }
  } 




}
