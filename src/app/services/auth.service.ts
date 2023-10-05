import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, authState } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  
  constructor(
    private auth: Auth
  ) { }



  async register(email: any, password: any) {
    const user = await createUserWithEmailAndPassword(this.auth, email, password);
    return await signInWithEmailAndPassword(this.auth, email, password); 
  }

  async login(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  logout() {
    return signOut(this.auth);
  }


}
