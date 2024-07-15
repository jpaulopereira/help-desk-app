import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from "src/app/models/cliente";
import { ClienteService } from 'src/app/services/cliente.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cliente-delete',
  templateUrl: './cliente-delete.component.html',
  styleUrls: ['./cliente-delete.component.css']
})
export class ClienteDeleteComponent implements OnInit {

  cliente: Cliente = {
    id: "",
    nome: "",
    cpf: "",
    email: "",
    senha: "",
    perfis: [],
    dataCriacao: "",
  };  

  constructor(
    private clienteService: ClienteService,
    private toast: ToastrService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // pega o id do cliente que será atualizado
    this.cliente.id = this.route.snapshot.paramMap.get('id');
    //traz os dados do cliente pelo id
    this.findById();
  } 
  
  findById(): void {
    this.clienteService.findById(this.cliente.id).subscribe(resposta => {
      resposta.perfis = []
      this.cliente = resposta;      
    })
  }

  delete(): void {
    this.clienteService.delete(this.cliente.id).subscribe(
      () => {
        this.toast.success("Cliente deletado com sucesso!", "Cliente");
        this.router.navigate(['clientes']);
      },
      (ex) => {
        if (ex.error.errors) {
          ex.error.errors.forEach((element) => {
            this.toast.error(element.message, "Erro");
          });
        }else {
          this.toast.error(ex.error.message, "Erro");
        }
      }
    );
  } 
}