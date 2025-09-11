import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counterPage.component.html',
  styleUrl: './counterPage.component.scss'
})
export class CounterPageComponent {
  counter: number = 0;

  somar(){
    this.counter++;
  }

  diminuir(){
    this.counter--;
  }
}
