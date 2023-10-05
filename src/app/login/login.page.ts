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

  constructor(
    public formBuilder: FormBuilder,
    public alertController: AlertController,
    private router:Router,private helperService:HelperService
    ) {}

  form = this.formBuilder.group({
    email: ['',[Validators.email, Validators.required]],
    password: ['',[Validators.required]]
  })




  ngOnInit() {
  }

  navegarRegistro() {
    this.router.navigate(['/registro'])
  }
  
  login(){
    if(this.form.valid) {
      const { email, password } = this.form.getRawValue();
      


    }

    
  }
} 