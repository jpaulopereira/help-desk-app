import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.css"],
})
export class NavComponent implements OnInit {
  //quando o componente for construido cria o router
  
  constructor(private router: Router) {}

  //métodos que iniciam com o programa
  //navega para a página inicial
  ngOnInit(): void {
    this.router.navigate(["login"]);
  }
}
