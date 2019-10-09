"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const clio_1 = require("./models/carro/clio");
const Golf_1 = require("./models/carro/Golf");
const modelx_1 = require("./models/carro/modelx");
const c180_1 = require("./models/carro/c180");
let carros = [
    new clio_1.Clio(),
    new Golf_1.Golf(),
    new modelx_1.Modelx(),
    new c180_1.C180()
];
carros.forEach((carro) => {
    console.log(`\n------------------------\n${carro.getClassName()}\n------------------------\n`);
    carro.executarAcoes();
});
