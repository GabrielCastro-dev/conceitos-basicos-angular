import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counterPage.component.html',
  styleUrl: './counterPage.component.scss'
})
export class CounterPageComponent {
  // O valor sempre será atualizado na tela pois
  // foi feita a interpolação do mesmo em um elemento HTML
  counter: number = 0;

  somar(): number{
    // Aumenta e retorna o valor do contador
    return ++this.counter;
  }

  diminuir(): number{
    // Diminui e retorna o valor do contador
    return --this.counter;
  }

  somarAte10(){
    const valorAtual = this.somar(); // chama a função de soma efetivamente

    // Reseta o contador caso tennha passado de 10
    if(valorAtual > 10){
      this.counter = 0;
    }
  }

  zerarContador(){
    this.counter = 0;
  }
}
