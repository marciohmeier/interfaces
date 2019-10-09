import { Motor } from "../interfaces/motor";

export class Eletrico implements Motor {
  acelerar(): void {
    console.log("Motor elétrico acelerou o carro")
  }
  
  pararDeAcelar(): void {
    console.log("Motor elétrico parou de acelerar o carro")
  }


}