import { Carro } from "./carro";
import { Hibrido } from "../motor/hibrido";
import { Roda16 } from "../rodado/roda16";
import { Automatico } from "../cambio/automatico";
import { Eletrica } from "../direcao/eletrica";

export class C180 extends Carro {

  constructor() {
    super(
        new Hibrido(),
        new Roda16(),
        new Automatico(),
        new Eletrica()
    )
  }
  
}