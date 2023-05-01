import { Injectable } from '@angular/core';
import { Firestore, Timestamp, addDoc, collection } from '@angular/fire/firestore';
import { Actor } from './actor.model';

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  constructor(private firestore: Firestore) { }

  guardar(actor: Actor) {
    const coleccion = collection(this.firestore, 'actores');
    const data = {
      nombre: actor.nombre,
      apellido: actor.apellido,
      nacionalidad: actor.nacionalidad,
      fechaDeNacimiento: new Date(actor.fechaNacimiento)
    }
    const ref = addDoc(coleccion, data);
    return ref;
  }
}
