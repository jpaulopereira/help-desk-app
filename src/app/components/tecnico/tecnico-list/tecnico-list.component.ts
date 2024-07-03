import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Tecnico } from 'src/app/models/tecnicos';

@Component({
  selector: 'app-tecnico-list',
  templateUrl: './tecnico-list.component.html',
  styleUrls: ['./tecnico-list.component.css']
})
export class TecnicoListComponent implements OnInit {

  ELEMENT_DATA: Tecnico[] = [
    {
      id: 1, 
      nome: "João Paulo", 
      cpf: "999.999.999-99", 
      email: "joao@gmail.com", 
      senha: "12345", 
      perfis:['0'], 
      dataCriacao: '15/01/2022'
    },
    {
      id: 2, 
      nome: "João Paulo", 
      cpf: "999.999.999-99", 
      email: "joao@gmail.com", 
      senha: "12345", 
      perfis:['0'], 
      dataCriacao: '15/01/2022'
    },
    {
      id: 3, 
      nome: "João Paulo", 
      cpf: "999.999.999-99", 
      email: "joao@gmail.com", 
      senha: "12345", 
      perfis:['0'], 
      dataCriacao: '15/01/2022'
    },
    {
      id: 4, 
      nome: "João Paulo", 
      cpf: "999.999.999-99", 
      email: "joao@gmail.com", 
      senha: "12345", 
      perfis:['0'], 
      dataCriacao: '15/01/2022'
    },
    {
      id: 5, 
      nome: "João Paulo", 
      cpf: "999.999.999-99", 
      email: "joao@gmail.com", 
      senha: "12345", 
      perfis:['0'], 
      dataCriacao: '15/01/2022'
    },
    {
      id: 6, 
      nome: "João Paulo", 
      cpf: "999.999.999-99", 
      email: "joao@gmail.com", 
      senha: "12345", 
      perfis:['0'], 
      dataCriacao: '15/01/2022'
    }    
  ]
  
  displayedColumns: string[] = ['id', 'nome', 'cpf', 'mail', 'dataCriacao', 'acao'];
  dataSource = new MatTableDataSource<Tecnico>(this.ELEMENT_DATA);
 
  constructor() { }

  ngOnInit(): void {
  }


  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

