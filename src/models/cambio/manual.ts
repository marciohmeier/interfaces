import { Cambio } from "../interfaces/cambio";

export class Manual implements Cambio {

  aumentarMarcha(): void {
    console.log('Câmbio manual aumentou a marcha')
  }

  diminuirMarcha(): void {
    console.log('Câmbio manual diminuiu a marcha')
  }

  verificarMarchaAtual(): void {
    console.log('Câmbio manual verificou a marcha')
  }
  
}