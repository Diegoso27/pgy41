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
  usuarioCorreo: string = '';

  constructor(
    //private auth: AngularFireAuth,
    private auth: AuthService,
    private router: Router,
    private storage: StorageService
  ) { }




  
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
   // console.log(this.user$);
   this.cargarUsuario();
   this.correoUserFirebase();
  }

  async logout() {
    await this.auth.logout();
    this.router.navigate(['/login']);
  } 




}
