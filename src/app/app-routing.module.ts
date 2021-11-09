import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component'
import { CardComponent } from './componentes/card/card.component'
import { ListaComponent } from './componentes/lista/lista.component'
import { AdicionarComponent } from './componentes/adicionar/adicionar.component'

const routes: Routes = [
  { path:"",component:InicioComponent},
  { path:"card",component:CardComponent},
  { path:"lista",component:ListaComponent},
  { path:"adicionar",component:AdicionarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
