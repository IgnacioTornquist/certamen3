import { Component, OnInit } from '@angular/core';
import { ListaClientes } from '../../interfaces/clientes'
@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  ListaClientes=ListaClientes;
  constructor() { }

  ngOnInit(): void {
  }

}
