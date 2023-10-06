import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  user$ = this.auth.authState$.pipe(
    filter(state => state ? true : false)
  )


  constructor(
    private auth: AuthService,

  ) {}
}
