import { Cambio } from "../interfaces/cambio";

export class Automatico implements Cambio {

  aumentarMarcha(): void {
    console.log('Câmbio automático aumentou a marcha')
  }

  diminuirMarcha(): void {
    console.log('Câmbio automático diminuiu a marcha')
  }

  verificarMarchaAtual(): void {
    console.log('Câmbio automático verificou a marcha')
  }
  
}