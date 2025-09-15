import { Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { CounterPageComponent } from './pages/counter/counterPage.component'
import { ListaComprasComponent } from './components/lista-compras/lista-compras.component';

export const routes: Routes = [
    { path: 'calculadora', component: IndexComponent },
    { path: '', redirectTo: '/calculadora', pathMatch: 'full' },
    { path: 'counter', component: CounterPageComponent },
    { path: 'compras', component: ListaComprasComponent }
];
