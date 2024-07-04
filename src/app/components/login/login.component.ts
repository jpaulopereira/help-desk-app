import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Credenciais } from 'src/app/models/credenciais';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  // criação de variável 'creds' 
  creds: Credenciais = {
    email: '',
    senha: ''
  }

  // Validação de campos
  email = new FormControl(null, Validators.email)
  senha = new FormControl(null, Validators.minLength(3))

  // criação de variável 'toast' no construtor
  constructor(
    private toast:ToastrService,
    private authService: AuthService,
    private router: Router
  
  ) { }

  ngOnInit(): void {  
  }

  logar(){
    //Login = Titulo
    //this.toast.error('Usuário ou senha inválidos!', 'Login');
    //this.creds.senha = '';

    //chama o service e faz a autenticação o subscribe fica aguardando a resposta e retorna o texto(Token)
    this.authService.authenticate(this.creds).subscribe(resposta => {     
      //chama o service e pega o token do header, tira o bearer e salva no localStorage
      this.authService.successfullLogin(resposta.headers.get('Authorization').substring(7));
      this.toast.success("Usuário logado com sucesso!", "Login");
      this.router.navigate(['home'])
    },
    () => {
      this.toast.error("Usuário ou senha inválidos!", "Login");     
    });
  }

  validaCampos(): boolean {
    return this.email.valid && this.senha.valid;
  } 
}
