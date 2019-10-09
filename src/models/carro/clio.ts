import { Carro } from "./carro";
import { Combustao } from "../motor/combustao";
import { Roda14 } from "../rodado/roda14";
import { Manual } from "../cambio/manual";
import { Mecaninca } from "../direcao/mecanica";

export class Clio extends Carro {

  constructor() {
    super(
        new Combustao(),
        new Roda14(),
        new Manual(),
        new Mecaninca()
    )
  }
  
}