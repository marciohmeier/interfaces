import { Motor } from "../interfaces/motor";

export class Combustao implements Motor {
  acelerar(): void {
    console.log("Motor à combustão acelerou o carro")
  }
  
  pararDeAcelar(): void {
    console.log("Motor à combustão parou de acelerar o carro")
  }


}