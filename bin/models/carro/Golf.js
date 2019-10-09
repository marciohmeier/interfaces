"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const carro_1 = require("./carro");
const hidraulica_1 = require("../direcao/hidraulica");
const combustao_1 = require("../motor/combustao");
const roda16_1 = require("../rodado/roda16");
const semiAutomatico_1 = require("../cambio/semiAutomatico");
class Golf extends carro_1.Carro {
    constructor() {
        super(new combustao_1.Combustao(), new roda16_1.Roda16(), new semiAutomatico_1.SemiAutomatico(), new hidraulica_1.Hidraulica());
    }
}
exports.Golf = Golf;
