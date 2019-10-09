import { Motor } from "../interfaces/motor";

export class Hibrido implements Motor {
  acelerar(): void {
    console.log("Motor híbrido acelerou o carro")
  }
  
  pararDeAcelar(): void {
    console.log("Motor híbrido parou de acelerar o carro")
  }


}