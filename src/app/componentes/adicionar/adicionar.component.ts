import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup, Validators} from '@angular/forms';

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
      "ciudad": this.formulario.get("ciudad")?.value
    }];
  }
  
}
