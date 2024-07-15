import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Chamado } from 'src/app/models/chamado';
import { ChamadoService } from 'src/app/services/chamado.service';


@Component({
  selector: 'app-chamado-list',
  templateUrl: './chamado-list.component.html',
  styleUrls: ['./chamado-list.component.css']
})
export class ChamadoListComponent implements OnInit {
  
  ELEMENTE_DATA: Chamado[] = []
  FILTERED_DATA: Chamado[] = []
  
  
  displayedColumns: string[] = ['id', 'titulo', 'nomeCliente', 'nomeTecnico', 'dataAbertura',  'prioridade', 'status', 'acao'];
  dataSource = new MatTableDataSource<Chamado>(this.ELEMENTE_DATA);
  
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private chamadoService: ChamadoService
  ) { }

  ngOnInit(): void {
    this.findAll();    
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  findAll(): void {
    this.chamadoService.findAll().subscribe(resposta => {
      this.ELEMENTE_DATA = resposta;
      this.dataSource = new MatTableDataSource<Chamado>(this.ELEMENTE_DATA);
      this.dataSource.paginator = this.paginator;
    })
  }

  retonarStatus(status: any): string {
    if(status == '0') {
      return 'ABERTO'      
    }else if( status == '1') {
      return 'EM ANDAMENTO'
    }else {
      return 'ENCERRADO'
    }
  }

  retonarPrioridade(prioridade: any): string {
    if(prioridade == '0') {
      return 'BAIXA'      
    }else if( prioridade == '1') {
      return 'MÉDIA'
    }else {
      return 'ALTA'
    }
  }

  getPrioridadeClass(status: any): string {
    if (status == '0') {
      return 'prioridade-baixa';
    } else if (status == '1') {
      return 'prioridade-media';
    } else {
      return 'prioridade-alta';
    }
  }  

  orderByStatus(status: any): void {
    let list: Chamado[] = []
    this.ELEMENTE_DATA.forEach(element => {
      if(element.status == status)
        list.push(element)
    });
    this.FILTERED_DATA = list;
    this.dataSource = new MatTableDataSource<Chamado>(list);
    this.dataSource.paginator = this.paginator;
  }

}
