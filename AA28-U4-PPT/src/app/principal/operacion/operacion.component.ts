import { Component } from '@angular/core';

@Component({
  selector: 'app-operacion',
  templateUrl: './operacion.component.html',
  styleUrls: ['./operacion.component.css']
})

export class OperacionComponent {

  valor1:number = 0;
  valor2:number = 0;
  operaciones ="ninguna";
  resultado:number=0;

  constructor(){}

  sumar(num1:number, num2:number)  { return num1 + num2 }
  restar(num1:number, num2:number) { return num1 - num2 }
  multiplicar(num1:number, num2:number) { return num1 * num2 }
  dividir(num1:number, num2:number) { return num1 / num2 }
  
  Operar(){
    switch (this.operaciones) {
      case 'sumar':
       this.resultado= this.sumar(this.valor1,this.valor2)
        break;
      case 'restar':
        this.resultado= this.restar(this.valor1,this.valor2)
        break;
      case 'multiplicar':
        this.resultado= this.multiplicar(this.valor1,this.valor2)
        break;
      case 'dividir':
        this.resultado= this.dividir(this.valor1,this.valor2)
        break;      
    
      default:
        break;
    }
  }
}
