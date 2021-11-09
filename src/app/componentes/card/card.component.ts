import { Component, OnInit } from '@angular/core';
import { ListaClientes } from '../../interfaces/clientes'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  ListaClientes=ListaClientes;
  constructor() { }

  ngOnInit(): void {
  }

}
