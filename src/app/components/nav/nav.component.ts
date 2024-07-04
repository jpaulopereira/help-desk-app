import { AuthService } from 'src/app/services/auth.service';
import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.css"],
})
export class NavComponent implements OnInit {
  //quando o componente for construido cria o router
  
  constructor(
    private router: Router, 
    private authService: AuthService,
    private toast: ToastrService ) {}

  //métodos que iniciam com o programa
  //verifica se o usuário está logado e redireciona para a página de login caso contrário
  ngOnInit(): void {
    if(!this.authService.isAuthenticated())
    this.router.navigate(['login']);
  }

  //redireciona para a página de login, e apaga o token do localStorage
  logout() {
    this.router.navigate(['login']);
    this.authService.logout();
    this.toast.info('Usuário desconectado!', 'Logout', {timeOut: 3000});
  }
}
