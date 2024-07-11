import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Tecnico } from 'src/app/models/tecnicos';
import { TecnicoService } from 'src/app/services/tecnico.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-tecnico-delete',
  templateUrl: './tecnico-delete.component.html',
  styleUrls: ['./tecnico-delete.component.css']
})
export class TecnicoDeleteComponent implements OnInit {

  tecnico: Tecnico = {
    id: "",
    nome: "",
    cpf: "",
    email: "",
    senha: "",
    perfis: [],
    dataCriacao: "",
  };  

  constructor(
    private tecnicoService: TecnicoService,
    private toast: ToastrService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // pega o id do tecnico que será atualizado
    this.tecnico.id = this.route.snapshot.paramMap.get('id');
    //traz os dados do tecnico pelo id
    this.findById();
  } 
  
  findById(): void {
    this.tecnicoService.findById(this.tecnico.id).subscribe(resposta => {
      resposta.perfis = []
      this.tecnico = resposta;      
    })
  }

  delete(): void {
    this.tecnicoService.delete(this.tecnico.id).subscribe(
      () => {
        this.toast.success("Tecnico deletado com sucesso!", "Tecnico");
        this.router.navigate(['tecnicos']);
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