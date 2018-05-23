import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from '../paginas/login/components/login.component';
import { LoginCadastroComponent } from '../paginas/login-cadastro/components/login-cadastro.component';
import { PrincipalComponent } from '../paginas/principal/components/principal.component';
import { HomeComponent } from '../paginas/home/home.component';
import { ErrorComponent } from '../paginas/error/error.component';
import { ProgressComponent } from '../paginas/progress/progress.component';
import { AuthGuard } from '../auth/guard/auth.guard';
import { PrincipalLogoffComponent } from '../paginas/principal-logoff/principal-logoff.component';
import { PrincipalSignupComponent } from '../paginas/principal-signup/principal-signup.component';
import { DeclaracaoCadastroComponent } from '../paginas/principal/components/declaracao-cadastro/declaracao-cadastro.component';
import { DeclaracaoAnaliseRelComponent } from '../paginas/principal/components/declaracao-analise-rel/declaracao-analise-rel.component';
import { ClientesComponent } from '../paginas/principal/components/clientes/clientes.component';
import { ClientesCadastroComponent } from '../paginas/principal/components/clientes-cadastro/clientes-cadastro.component';

const APP_ROTAS : Routes = [
  { path : '', component: HomeComponent},
  //{ path : 'login', component : LoginComponent},
  //{ path : 'login-cadastro', component : LoginCadastroComponent},
  { path : "home", component : HomeComponent},
  {
      path : "principal",
      component : PrincipalComponent,
      canActivate : [AuthGuard],
      children : [
        {
          path: "declaracao-cadastro",
          component : DeclaracaoCadastroComponent,
          canActivate : [AuthGuard]
        },
        {
          path: "declaracao-analise-rel",
          component : DeclaracaoAnaliseRelComponent,
          canActivate : [AuthGuard]
        },
        {
          path: "clientes",
          component : ClientesComponent,
          canActivate : [AuthGuard]
        },
        {
          path: "clientes-cadastro",
          component : ClientesCadastroComponent,
          canActivate : [AuthGuard]
        }
      ]
  },
  { path : "principal-logoff", component : PrincipalLogoffComponent},
  { path : "principal-signup", component : PrincipalSignupComponent},
  { path : "**", component : ErrorComponent},
];

@NgModule({
  exports: [ RouterModule ],
  imports: [
    CommonModule,
    RouterModule.forRoot(APP_ROTAS)
  ],
  declarations: []
})
export class AppRoutingModule { }
