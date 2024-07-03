import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot):boolean {
   
    let authenticated = this.authService.isAuthenticated();
  
      // Se o token estiver autenticado, permitir a navegação
      if (authenticated) {
        return true;
      } else {
        // Se não estiver autenticado, redirecionar para a rota de login
        this.router.navigate(['login']);
        return false; // Retorna false para impedir a navegação para a rota solicitada
      }
    }
}
