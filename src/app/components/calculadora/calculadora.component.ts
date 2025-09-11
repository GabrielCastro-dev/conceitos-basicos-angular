import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'calculadora',
  imports: [ FormsModule ],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.scss'
})
export class CalculadoraComponent {
  num1: number = 0;
  num2: number = 0;
  resultado: number = 0;

  calcularResultado(event: Event){
    event.preventDefault();
    this.resultado = this.num1 + this.num2;
  }
}
