import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ItemLista } from './ItemLista';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-compras',
  imports: [ FormsModule, CommonModule ],
  templateUrl: './lista-compras.component.html',
  styleUrl: './lista-compras.component.scss'
})
export class ListaComprasComponent {
  novoItem: string = '';

  lista: ItemLista[] = []; // Array de ItemLista

  adicionarItem(){
    let item = new ItemLista();
    item.id = this.lista.length + 1;
    item.nome = this.novoItem;
    
    this.lista.push(item);
  }

  riscarItem(itemLista: ItemLista) {
    itemLista.comprado = !itemLista.comprado;
  }

  limparLista() {
    this.lista = [];
  }
}
