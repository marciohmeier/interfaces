"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const carro_1 = require("./carro");
const combustao_1 = require("../motor/combustao");
const roda14_1 = require("../rodado/roda14");
const manual_1 = require("../cambio/manual");
const mecanica_1 = require("../direcao/mecanica");
class Clio extends carro_1.Carro {
    constructor() {
        super(new combustao_1.Combustao(), new roda14_1.Roda14(), new manual_1.Manual(), new mecanica_1.Mecaninca());
    }
}
exports.Clio = Clio;
