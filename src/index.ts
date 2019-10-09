import { Clio } from "./models/carro/clio";
import { Golf } from "./models/carro/Golf";
import { Modelx } from "./models/carro/modelx";
import { C180 } from "./models/carro/c180";
import { Carro } from "./models/carro/carro";

let carros : Array<Carro> = [
  new Clio(),
  new Golf(),
  new Modelx(),
  new C180()
]

carros.forEach((carro: Carro) => {
  console.log(`\n------------------------\n${carro.getClassName()}\n------------------------\n`)
  carro.executarAcoes()
})