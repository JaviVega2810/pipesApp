export const enum Universo{
  Marvel, DC
}

export interface Heroe {
  nombre: string;
  edad: number;
  universo: Universo;
  poder: number;
}
