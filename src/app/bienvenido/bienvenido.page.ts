import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.page.html',
  styleUrls: ['./bienvenido.page.scss'],
})
export class BienvenidoPage implements OnInit {

  user$ = this.auth.authState$.pipe(
    filter(state => state ? true : false)
  );

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    console.log(this.user$);
  }


  async logout() {
    await this.auth.logout();
    this.router.navigate(['/login']);
  } 


}
