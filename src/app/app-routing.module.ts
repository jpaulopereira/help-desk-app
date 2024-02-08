import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NavComponent } from "./components/nav/nav.component";

const routes: Routes = [
  {
    //path: 'login', component: NavComponent  //quando o path for login exibir componente NavComponent
    path: "", component: NavComponent, //quando o path for vazio exibir componente NavComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
