import { RouterModule, Routes } from '@angular/router';
import { Pregunta1Component } from './menu/pregunta1/pregunta1.component';
import { MenuComponent } from './menu/menu.component';

export const routes: Routes = [
    {path: 'menu', component: MenuComponent},
    { path: 'pregunta1', component: Pregunta1Component},
    { path: '', redirectTo: 'menu', pathMatch: 'full' }
];

