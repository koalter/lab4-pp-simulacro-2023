export class Actor {
    id?: string;
    nombre: string;
    apellido: string;
    fechaNacimiento: Date;
    nacionalidad: string

    constructor(nombre: string, apellido: string, fechaNacimiento: Date, nacionalidad: string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.fechaNacimiento = fechaNacimiento;
        this.nacionalidad = nacionalidad;
    }
}
