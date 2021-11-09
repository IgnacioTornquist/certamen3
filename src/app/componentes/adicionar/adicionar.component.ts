import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup, Validators} from '@angular/forms';
import { ListaClientes } from '../../interfaces/clientes';
@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.component.html',
  styleUrls: ['./adicionar.component.scss']
})
export class AdicionarComponent implements OnInit {

  formulario:FormGroup;
 
  constructor(private Form:FormBuilder) {
    this.formulario=this.Form.group({
       nombre:['',Validators.required],
       apellido:['',Validators.required],
       genero:['',Validators.required],
       pais:['',Validators.required],
       ciudad:['',Validators.required]
      }
    );
  
  }
  
  ngOnInit(): void {
  }
  validacion(){
    let datos:any=[{
      "nombre": this.formulario.get("nombre")?.value,
      "apellido": this.formulario.get("apellido")?.value,
      "genero": this.formulario.get("genero")?.value,
      "pais": this.formulario.get("pais")?.value,
      "ciudad": this.formulario.get("ciudad")?.value
    }];
    console.log(datos);
    ListaClientes.push(datos[0]);
    console.log(ListaClientes);
  }
  
}
