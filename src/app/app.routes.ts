import { Routes } from '@angular/router';
import { IndexComponent } from './pages/app/index.component';
import { CounterPageComponent } from './pages/counter/counterPage.component'

export const routes: Routes = [
    { path: 'calculadora', component: IndexComponent },
    { path: '', redirectTo: '/calculadora', pathMatch: 'full' },
    { path: 'counter', component: CounterPageComponent }
];
