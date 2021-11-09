import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { CardComponent } from './componentes/card/card.component';
import { ListaComponent } from './componentes/lista/lista.component';
import { AdicionarComponent } from './componentes/adicionar/adicionar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    CardComponent,
    ListaComponent,
    AdicionarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
