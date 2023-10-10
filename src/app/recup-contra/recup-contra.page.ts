import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { 
  FormBuilder,
  Validators,
  FormGroup, 
  FormControl} from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-recup-contra',
  templateUrl: './recup-contra.page.html',
  styleUrls: ['./recup-contra.page.scss'],
  providers: [AuthService]  
})
export class RecupContraPage implements OnInit {

  constructor(
    private auth: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  email: string = '';


  ngOnInit() {
  }

  async resetPassword() {
      try {
        console.log(this.email);
        await this.auth.resetPassword(this.email);
        this.router.navigate(['/login']);
      } catch (error) {
        console.log(error);
      }
    }
  }
