import { Injectable } from '@angular/core';
import { Appointment } from '../shared/Appointment';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})

export class AppointmentService {
  bookingListRef: AngularFireList<any>;
  bookingRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) { }

  // Create
  createBooking(apt: Appointment) {
    console.log(apt)
    return this.bookingListRef.push({
      nome: apt.nome,
      descricao: apt.descricao,
      video: apt.video
    })
  }

  // Get Single
  getBooking(id: string) {
    this.bookingRef = this.db.object('/exercicio/' + id);
    return this.bookingRef;
  }

  // Get List
  getBookingList() {
    this.bookingListRef = this.db.list('/exercicio');
    return this.bookingListRef;
  }

  // Update
  updateBooking(id, apt: Appointment) {
    return this.bookingRef.update({
      nome: apt.nome,
      descricao: apt.descricao,
      video: apt.video
    })
  }

  // Delete
  deleteBooking(id: string) {
    this.bookingRef = this.db.object('/exercicio/' + id);
    this.bookingRef.remove();
  }
}