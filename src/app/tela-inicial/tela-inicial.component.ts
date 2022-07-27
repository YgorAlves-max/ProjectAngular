import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tela-inicial',
  templateUrl: './tela-inicial.component.html',
  styleUrls: ['./tela-inicial.component.scss']
})
export class TelaInicialComponent implements OnInit {


  DiasHora: number = 0;
  DiasTrab:number = 0;
  Salario:number = 0;

  horasPorMes:number = 0;
  horasPorSalario:number = 0;
  resultado:number = 0;

  constructor() {

  }

  ngOnInit(): void {
  }


  horasPorDia() {
    console.log(this.DiasHora)


  }
  
  DiasTrabalhados(){
    console.log(this.DiasTrab)

  }
 

  salario(){
    console.log(this.Salario)

  }


  Calculo() {

    this.horasPorMes =  this.DiasHora * this.DiasTrab
    this.horasPorSalario =  this.Salario / this.horasPorMes 
    console.log(this.horasPorSalario)

    this.resultado = this.horasPorSalario
  }





}
