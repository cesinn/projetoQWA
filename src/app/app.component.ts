import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Avaliacao';
  mustOpen = false;

  cpf:any = "";
  nome = "";
  sobrenome = "";
  data = "";
  users:any = [];


  public close() {
    this.mustOpen = false;

  }

  openAddUser(){
    this.mustOpen = true; 
  }

  addUser(){
   
    let obj = {
      cpf: this.cpf,
      nome:this.nome,
      sobrenome:this.sobrenome,
      data:this.data
    };
  this.users.push(obj);
  this.close();

  }
}
