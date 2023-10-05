import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})

export class RegistroPage implements OnInit {
  
  constructor(
    public formBuilder: FormBuilder,
    public alertController: AlertController,
    private router:Router
    ) { }

  form = this.formBuilder.group({
    email: ['',[Validators.email, Validators.required]],
    password: ['', [Validators.required]],
    confirmPassword: ['',[Validators.required]]    
  })  


  ngOnInit() {
  }

  async register() {
    if(this.form.valid) {
      const { email, password } = this.form.getRawValue();
      await this.router.navigate(['/login']);
      console.log(email, password);
    }
  }

 /* async guardar(){
    var f = this.formularioRegistro.value;

    if(this.formularioRegistro.invalid){
      const alert = await this.alertController.create({
        header: 'Campos vacios',
        message: 'Porfavor ingresar correctamente los datos',
        buttons: ['Aceptar']
      });
      await alert.present();
      return;
    }
    var usuario = {
      nombre: f.nombre,
      password: f.password
    }
    localStorage.setItem('usuario',JSON.stringify(usuario));

    this.router.navigateByUrl("login");
  */

}
