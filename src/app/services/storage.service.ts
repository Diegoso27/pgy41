import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { Usuario } from '../models/usuario';


const storageUsuario = 'usuarioData';

@Injectable({
  providedIn: 'root'
})
export class StorageService {



  constructor() { 

    
  }
  

  async getUser():Promise<Usuario[]> {
    const usuarioData = await this.getItem(storageUsuario);
    if (usuarioData == null) {
      return[];
    }

    const data:any[] = JSON.parse(usuarioData);
    if (data) {
      return data;
    }
    else{
      return [];
    }
  }

  async setItem(key: string, value: any) {
    await Preferences.set({key:key, value:value});
  }

  async getItem(key: string):Promise<string | null> {
    const objeto = await Preferences.get({key});
    return objeto.value

  }

  async setUser(usuario: Usuario[]) {
    var usuarios = await this.getUser();
    for (const i of usuarios) {
      if (i) {
        usuario.push(i);
      }
      this.setItem(storageUsuario, JSON.stringify(usuario));
    }
    
  }
}
