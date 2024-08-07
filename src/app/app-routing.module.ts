import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NavComponent } from "./components/nav/nav.component";
import { HomeComponent } from "./components/home/home.component";
import { TecnicoListComponent } from "./components/tecnico/tecnico-list/tecnico-list.component";
import { LoginComponent } from "./components/login/login.component";
import { AuthGuard } from "./auth/auth.guard";
import { TecnicoCreateComponent } from "./components/tecnico/tecnico-create/tecnico-create.component";
import { TecnicoUpdateComponent } from "./components/tecnico/tecnico-update/tecnico-update.component";
import { TecnicoDeleteComponent } from "./components/tecnico/tecnico-delete/tecnico-delete.component";
import { ChamadoListComponent } from "./components/chamados/chamado-list/chamado-list.component";
import { ChamadoCreateComponent } from "./components/chamado-create/chamado-create.component";
import { ClienteListComponent } from "./components/cliente/cliente-list/cliente-list.component";
import { ClienteCreateComponent } from "./components/cliente/cliente-create/cliente-create.component";
import { ClienteUpdateComponent } from "./components/cliente/cliente-update/cliente-update.component";
import { ClienteDeleteComponent } from "./components/cliente/cliente-delete/cliente-delete.component";

//Configuração da rotas do app
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  
  { 
    //Auth guard é responsável por verificar se o usuário está logado ou não
    path: '', component: NavComponent, canActivate:[AuthGuard], children : [
      { path: 'home', component: HomeComponent },
      
      { path: 'tecnicos', component: TecnicoListComponent },
      { path: 'tecnicos/create', component: TecnicoCreateComponent },
      //informação do id do tecnico que será atualizado, passando uma variável de "path"
      { path: 'tecnicos/update/:id', component: TecnicoUpdateComponent },
      { path: 'tecnicos/delete/:id', component: TecnicoDeleteComponent },

      { path: 'chamados', component: ChamadoListComponent },
      { path: 'chamados/create', component: ChamadoCreateComponent },

      { path: 'clientes', component: ClienteListComponent },
      { path: 'clientes/create', component: ClienteCreateComponent },
      { path: 'clientes/update/:id', component: ClienteUpdateComponent },
      { path: 'clientes/delete/:id', component: ClienteDeleteComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
