import { Carro } from "./carro";
import { Eletrico } from "../motor/eletrico";
import { Roda21 } from "../rodado/roda21";
import { Automatico } from "../cambio/automatico";
import { Eletrica } from "../direcao/eletrica";

export class Modelx extends Carro {

  constructor() {
    super(
        new Eletrico(),
        new Roda21(),
        new Automatico(),
        new Eletrica()
    )
  }
  
}