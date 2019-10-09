"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const carro_1 = require("./carro");
const eletrico_1 = require("../motor/eletrico");
const roda21_1 = require("../rodado/roda21");
const automatico_1 = require("../cambio/automatico");
const eletrica_1 = require("../direcao/eletrica");
class Modelx extends carro_1.Carro {
    constructor() {
        super(new eletrico_1.Eletrico(), new roda21_1.Roda21(), new automatico_1.Automatico(), new eletrica_1.Eletrica());
    }
}
exports.Modelx = Modelx;
