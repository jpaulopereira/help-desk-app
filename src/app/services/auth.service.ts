import { Injectable } from '@angular/core';
import { Credenciais } from '../models/credenciais';
import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from '../config/api.config';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //O service que faz a autenticação. Não o componente Login


  //criação de variável jwtService
  jwtService: JwtHelperService = new JwtHelperService;
  
  constructor(private http: HttpClient) { }

  // faz a autenticação
  authenticate(creds: Credenciais)  {
    return this.http.post(`${API_CONFIG.baseUrl}/login`, creds, {

      //Obeserva a resposta e retorna o texto(Token)
      observe: 'response',
      responseType: 'text'
    });  
  }

  //salva o token no localStorage
  successfullLogin(authToken: string) {
    localStorage.setItem('token', authToken);
  }


  //Pega o token do localStorage e verifica se está expirado
  isAuthenticated() {
    let authToken = localStorage.getItem('token');
    if(authToken != null) {
      return !this.jwtService.isTokenExpired(authToken)
    }
    return false;
  }

}
