import { Direcao } from "../interfaces/direcao";

export class Mecaninca implements Direcao {

  virarParaEsquerda(): void {
    console.log("Direção mecânica virou para esquerda")
  }
  
  virarParaDireita(): void {
    console.log("Direção mecânica virou para direita")
  }
  
}