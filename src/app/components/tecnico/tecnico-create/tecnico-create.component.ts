import { Component, OnInit } from "@angular/core";
import { Validators } from "@angular/forms";
import { FormControl } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { Tecnico } from "src/app/models/tecnicos";
import { TecnicoService } from "src/app/services/tecnico.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-tecnico-create",
  templateUrl: "./tecnico-create.component.html",
  styleUrls: ["./tecnico-create.component.css"],
})
export class TecnicoCreateComponent implements OnInit {
  tecnico: Tecnico = {
    id: "",
    nome: "",
    cpf: "",
    email: "",
    senha: "",
    perfis: [],
    dataCriacao: "",
  };

  nome: FormControl = new FormControl(null, Validators.minLength(3));
  cpf: FormControl = new FormControl(null, Validators.required);
  email: FormControl = new FormControl(null, Validators.minLength(3));
  senha: FormControl = new FormControl(null, Validators.minLength(3));

  constructor(
    private tecnicoService: TecnicoService,
    private toast: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {}
 

  // adiciona um perfil ao array de perfis
  addPerfil(perfil: any): void {
    // remove o perfil que foi marcado na checkbox
    if (this.tecnico.perfis.includes(perfil)) {
      this.tecnico.perfis.splice(this.tecnico.perfis.indexOf(perfil), 1);
    } else {
      this.tecnico.perfis.push(perfil);
    }
  }

  create(): void {
    this.tecnicoService.create(this.tecnico).subscribe(
      () => {
        this.toast.success("Cadastro realizado com sucesso!", "Cadastro");
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

  validaCampos(): boolean {
    return (
      this.nome.valid && this.cpf.valid && this.email.valid && this.senha.valid
    );
  }
}
