import { Carro } from "./carro";
import { Hidraulica } from "../direcao/hidraulica";
import { Combustao } from "../motor/combustao";
import { Roda16 } from "../rodado/roda16";
import { SemiAutomatico } from "../cambio/semiAutomatico";

export class Golf extends Carro {

  constructor() {
    super(
        new Combustao(),
        new Roda16(),
        new SemiAutomatico(),
        new Hidraulica()
    )
  }
  
}