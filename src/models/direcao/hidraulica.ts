import { Direcao } from "../interfaces/direcao";

export class Hidraulica implements Direcao {

  virarParaEsquerda(): void {
    console.log("Direção hidráulica virou para esquerda")
  }
  
  virarParaDireita(): void {
    console.log("Direção hidráulica virou para direita")
  }
  
}