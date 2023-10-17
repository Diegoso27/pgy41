import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { filter } from 'rxjs';
import { StorageService } from '../services/storage.service';


@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.page.html',
  styleUrls: ['./bienvenido.page.scss'],
})
export class BienvenidoPage implements OnInit {

  /* user$ = this.auth.authState$.pipe(
    filter(state => state ? true : false)
  ); */

  usuario: any;
  nombreUser: string = '';

  constructor(
    //private auth: AngularFireAuth,
    private auth: AuthService,
    private router: Router,
    private storage: StorageService
  ) { }



  async obtenerUsuario() {
    const currentUser = this.auth.currentUser();

    if (currentUser) {
      const user = (await this.storage.getUser()).find(e => e.email === currentUser.email);

      if (user) {
          this.usuario = user;
          this.nombreUser = user.name;
      } else {

      }
  } else {

  }

  } 

  ngOnInit() {
   // console.log(this.user$);
   this.obtenerUsuario();
  }

  async logout() {
    await this.auth.logout();
    this.router.navigate(['/login']);
  } 




}
