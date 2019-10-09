import { Direcao } from "../interfaces/direcao";

export class Eletrica implements Direcao {

  virarParaEsquerda(): void {
    console.log("Direção elétrica virou para esquerda")
  }
  
  virarParaDireita(): void {
    console.log("Direção elétrica virou para direita")
  }
  
}