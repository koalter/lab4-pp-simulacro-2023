export interface Peliculas {
    id?: number;
    nombre: string;
    tipo: Tipo;
    fechaDeEstreno: Date;
    cantidadPublico: number;
    foto: string;
}

export enum Tipo {
    terror,
    comedia,
    amor,
    otros
}
