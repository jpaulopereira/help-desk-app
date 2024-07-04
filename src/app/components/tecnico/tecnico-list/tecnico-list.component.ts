import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Tecnico } from 'src/app/models/tecnicos';
import { TecnicoService } from 'src/app/services/tecnico.service';

@Component({
  selector: 'app-tecnico-list',
  templateUrl: './tecnico-list.component.html',
  styleUrls: ['./tecnico-list.component.css']
})
export class TecnicoListComponent implements OnInit {

  DADOS_DOS_TECNICOS: Tecnico[] = [];
  
  displayedColumns: string[] = ['id', 'nome', 'cpf', 'mail', 'dataCriacao', 'perfis', 'acao'];
  dataSource = new MatTableDataSource<Tecnico>(this.DADOS_DOS_TECNICOS);
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
 
  constructor(
    private tecnicoService: TecnicoService
  ) { }

  //inicia o método findAll() quando o componente for construido
  ngOnInit(): void {
    this.findAll();
  }  

  findAll(){
    //'se inscreve' e aguarda a resposta, passa a resposta para o DADOS_DOS_TECNICOS
    this.tecnicoService.findAll().subscribe(resposta =>{
      this.DADOS_DOS_TECNICOS = resposta
      this.dataSource = new MatTableDataSource<Tecnico>(resposta);

      //atualiza o paginator, para que ele possa exibir paginação 
      this.dataSource.paginator = this.paginator;
    })    
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
  

