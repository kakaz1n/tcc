import { Injectable } from '@angular/core';
import { Dados } from '../services/dados';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})

export class DadosService {
  UsuariosListRef: AngularFireList<any>;
  usuarioRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) { }

  // Create
  createBooking(dados: Dados) {
    return this.UsuariosListRef.push({
      nome: dados.nome,
      email: dados.email,
      telefone: dados.telefone,
      estado:dados.estado,
      cidade:dados.cidade,
      senha:dados.senha,
    })
  }

  // Get Single
  getBooking(id: string) {
    this.usuarioRef = this.db.object('/usuarios/' + id);
    return this.usuarioRef;
  }
  pegarQuestionario(id){
    this.usuarioRef = this.db.object('/questionario/'+id);
    return this.usuarioRef;
  }
  // Get List
  getBookingList() {
    this.UsuariosListRef = this.db.list('/usuarios');
    return this.UsuariosListRef;
  }
  

  // Update
 /* updateBooking(id, dados: Dados) {
    return this.bookingRef.update({
      name: apt.name,
      email: apt.email,
      mobile: apt.mobile
    })
  }*/

  // Delete
  /*deleteBooking(id: string) {
    this.bookingRef = this.db.object('/appointment/' + id);
    this.bookingRef.remove();
  }*/
}