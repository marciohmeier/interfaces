import { Motor } from "../interfaces/motor"
import { Rodado } from "../interfaces/rodado"
import { Cambio } from "../interfaces/cambio"
import { Direcao } from "../interfaces/direcao"

export class Carro {
  private motor: Motor
  private rodado: Rodado
  private cambio : Cambio
  private direcao : Direcao
  
  constructor(motor: Motor, rodado: Rodado, cambio : Cambio, direcao : Direcao) {
    this.motor = motor
    this.rodado = rodado
    this.cambio = cambio
    this.direcao = direcao
  }

  public getMotor() : Motor {
    return this.motor
  }
  
  public getRodado() : Rodado {
    return this.rodado
  }
  
  public getCambio() : Cambio {
    return this.cambio
  }
  
  public getDirecao() : Direcao {
    return this.direcao
  }

  aumentarMarcha() : void {
    this.cambio.aumentarMarcha()
  }

  diminuirMarcha() : void {
    this.cambio.diminuirMarcha()
  }

  verificarMarchaAtual() : void {
    this.cambio.verificarMarchaAtual()
  }

  virarParaEsquerda() : void {
    this.direcao.virarParaEsquerda()
  }

  virarParaDireita() : void {
    this.direcao.virarParaDireita()
  }

  acelerar() : void {
    this.motor.acelerar()
  }

  pararDeAcelar() : void {
    this.motor.pararDeAcelar()
  }

  rodar() : void {
    this.rodado.rodar()
  }

  executarAcoes() : void {
    this.aumentarMarcha()
    this.diminuirMarcha()
    this.verificarMarchaAtual()
    this.virarParaEsquerda()
    this.virarParaDireita()
    this.acelerar()
    this.pararDeAcelar()
    this.rodar()
  }

  public getClassName() : string {
    let dataClass = this.constructor.toString().match(/\w+/g)
    return dataClass![1];
  }
}