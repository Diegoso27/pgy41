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
    private auth: AuthService
    ) { } 

  form = this.formBuilder.group({
    email: ['',[Validators.email, Validators.required]],
    password: ['', [Validators.required]]  
  })  


  ngOnInit() {
  }

  async register() {

    console.log('aaaa');
    if(this.form.valid) {
      const { email, password } = this.form.getRawValue();
      console.log("aaa")
      this.auth.register(email, password)
      .then(() => {
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
