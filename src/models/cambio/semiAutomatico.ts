import { Cambio } from "../interfaces/cambio";

export class SemiAutomatico implements Cambio {

  aumentarMarcha(): void {
    console.log('Câmbio semi-automático aumentou a marcha')
  }

  diminuirMarcha(): void {
    console.log('Câmbio semi-automático diminuiu a marcha')
  }

  verificarMarchaAtual(): void {
    console.log('Câmbio semi-automático verificou a marcha')
  }
  
}