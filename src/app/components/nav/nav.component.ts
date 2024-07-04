import { AuthService } from 'src/app/services/auth.service';
import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.css"],
})
export class NavComponent implements OnInit {
  //quando o componente for construido cria o router
  
  constructor(private router: Router, private AuthService: AuthService) {}

  //métodos que iniciam com o programa
  //verifica se o usuário está logado e redireciona para a página de login caso contrário
  ngOnInit(): void {
    if(!this.AuthService.isAuthenticated())
    this.router.navigate(['login']);
  }
}
