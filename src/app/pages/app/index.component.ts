import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { CalculadoraComponent } from '../../components/calculadora/calculadora.component';

@Component({
  selector: 'app-root',
  imports: [ CalculadoraComponent ],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent {
  title = 'conceitos-basicos';
}
