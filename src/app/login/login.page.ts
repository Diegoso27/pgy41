import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioLogin: FormGroup;

  email:string = "";
  contrasena:string = "";


  constructor(public fb: FormBuilder,
    public alertController: AlertController,
    private router:Router,private helperService:HelperService) { 

    this.formularioLogin = this.fb.group({
      'nombre': new FormControl("", Validators.required),
      'password': new FormControl("", Validators.required)
    })
  }

  ngOnInit() {
  }

  login(){
    if (this.email == "") {
      //alert("Debe ingresar un email.");
      this.helperService.showAlert("Debe ingresar un email", "Advertencia");
      return;
    }
    if (this.contrasena == "") {
      alert("Debe ingresar una contraseña.")
      return;
    }
    
    if (this.email == "pgy4121-002d" && this.contrasena == "pgy4121-002d") {
      //alert("Login correcto.");
      this.router.navigateByUrl("bienvenido");
    }else{
      alert("Credeneciales no validas.");
    }
    
  }

  /*meo corte compa;ero no funca 
  async ingresar(){
    var f = this.formularioLogin.value;

    var usuario = localStorage.getItem('usuario');

    if(usuario !== null){
      var user = JSON.parse(usuario);
      if (user.nombre == f.nombre && user.password == f.password) {
        console.log('inicio sesion mi xan');
        localStorage.setItem('inicio sesion mi xan', 'true');
      }else {
        const alert = await this.alertController.create({
          header: 'Datos incorrectos',
          message: 'Tienes que llenar todos los datos',
          buttons: ['Aceptar'],
        });
        await alert.present();
      }
    } else {
      // Manejo de caso cuando no se encuentra el valor en localStorage
    }
  }*/
} 