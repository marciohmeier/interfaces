"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Carro {
    constructor(motor, rodado, cambio, direcao) {
        this.motor = motor;
        this.rodado = rodado;
        this.cambio = cambio;
        this.direcao = direcao;
    }
    getMotor() {
        return this.motor;
    }
    getRodado() {
        return this.rodado;
    }
    getCambio() {
        return this.cambio;
    }
    getDirecao() {
        return this.direcao;
    }
    aumentarMarcha() {
        this.cambio.aumentarMarcha();
    }
    diminuirMarcha() {
        this.cambio.diminuirMarcha();
    }
    verificarMarchaAtual() {
        this.cambio.verificarMarchaAtual();
    }
    virarParaEsquerda() {
        this.direcao.virarParaEsquerda();
    }
    virarParaDireita() {
        this.direcao.virarParaDireita();
    }
    acelerar() {
        this.motor.acelerar();
    }
    pararDeAcelar() {
        this.motor.pararDeAcelar();
    }
    rodar() {
        this.rodado.rodar();
    }
    executarAcoes() {
        this.aumentarMarcha();
        this.diminuirMarcha();
        this.verificarMarchaAtual();
        this.virarParaEsquerda();
        this.virarParaDireita();
        this.acelerar();
        this.pararDeAcelar();
        this.rodar();
    }
    getClassName() {
        let dataClass = this.constructor.toString().match(/\w+/g);
        return dataClass[1];
    }
}
exports.Carro = Carro;
