import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Cliente } from "src/app/models/cliente";
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit {

  DADOS_DOS_CLIENTES: Cliente[] = [];
  
  displayedColumns: string[] = ['id', 'nome', 'cpf', 'mail', 'dataCriacao', 'perfis', 'acao'];
  dataSource = new MatTableDataSource<Cliente>(this.DADOS_DOS_CLIENTES);
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
 
  constructor(
    private clienteService: ClienteService
  ) { }

  //inicia o método findAll() quando o componente for construido
  ngOnInit(): void {
    this.findAll();
  }  

  findAll(){
    //'se inscreve' e aguarda a resposta, passa a resposta para o DADOS_DOS_CLIENTES
    this.clienteService.findAll().subscribe(resposta =>{
      this.DADOS_DOS_CLIENTES = resposta
      this.dataSource = new MatTableDataSource<Cliente>(resposta);

      //atualiza o paginator, para que ele possa exibir paginação 
      this.dataSource.paginator = this.paginator;
    })    
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
  

