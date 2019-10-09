"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const carro_1 = require("./carro");
const hibrido_1 = require("../motor/hibrido");
const roda16_1 = require("../rodado/roda16");
const automatico_1 = require("../cambio/automatico");
const eletrica_1 = require("../direcao/eletrica");
class C180 extends carro_1.Carro {
    constructor() {
        super(new hibrido_1.Hibrido(), new roda16_1.Roda16(), new automatico_1.Automatico(), new eletrica_1.Eletrica());
    }
}
exports.C180 = C180;
