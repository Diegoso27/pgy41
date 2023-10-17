import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { StorageService } from '../services/storage.service';
import { Usuario } from '../models/usuario';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})

export class RegistroPage implements OnInit {
  
  
  

  constructor(
    public formBuilder: FormBuilder,
    public alertController: AlertController,
    private router:Router,
    private auth: AuthService,
    private storage: StorageService
    ) { } 

    userName: string = '';
    email2: string = '';
  

  form = this.formBuilder.group({
    email: ['',[Validators.email, Validators.required]],
    password: ['', [Validators.required]],
    userName: ['',[Validators.required]]  
  })  

  ngOnInit() {}

  async register() {

    console.log('aaaa');
    if(this.form.valid) {
      const { email, password } = this.form.getRawValue();
      console.log("aaa");
      this.auth.register(email, password)
      .then(async () => {
      var usuario = [{           
        name: this.userName,
        email: this.email2           
      }]
      this.storage.setUser(usuario);
      console.log(usuario);     

        this.router.navigate(['/login']);  
      })
      .catch(error => {
        console.log(error);
      });  
    } else {
      this.form.markAllAsTouched();
      console.log("BBB")

    }
  }

}
