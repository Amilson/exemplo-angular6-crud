import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'hammerjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

///componentes HTML
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule} from '@angular/material/tooltip';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatStepperModule } from '@angular/material/stepper';
import { MatRadioModule } from '@angular/material/radio';
///////////////

import { AppComponent } from './app.component';
import { HeaderMainComponent } from './headers/header-main/components/header-main.component';
import { HomeComponent } from './paginas/home/home.component';
import { LoginComponent } from './paginas/login/components/login.component';
import { LoginCadastroComponent } from './paginas/login-cadastro/components/login-cadastro.component';
import { PrincipalComponent } from './paginas/principal/components/principal.component';
import { AppRoutingModule } from './routes/app-routing.module';
import { ErrorComponent } from './paginas/error/error.component';
import { LoginCadastroService } from './paginas/login-cadastro/services//login-cadastro.service';
import { LoginService } from './paginas/login/services/login.service';
import { PrincipalService } from './paginas/principal/services/principal.service';
import { AuthService } from './auth/services/auth.service';
import { ProgressComponent } from './paginas/progress/progress.component';
import { AuthGuard } from './auth/guard/auth.guard';
import { HeaderValidaLoginComponent } from './headers/header-valida-login/components/header-valida-login.component';
import { MenuUserComponent } from './headers/menu-user/menu-user.component';
import { PrincipalLogoffComponent } from './paginas/principal-logoff/principal-logoff.component';
import { PrincipalSignupComponent } from './paginas/principal-signup/principal-signup.component';
import { NavComponent } from './nav/components/nav/nav.component';
import { DeclaracaoCadastroComponent } from './paginas/principal/components/declaracao-cadastro/declaracao-cadastro.component';
import { DeclaracaoAnaliseRelComponent } from './paginas/principal/components/declaracao-analise-rel/declaracao-analise-rel.component';
import { ClientesComponent } from './paginas/principal/components/clientes/clientes.component';
import { ClientesCadastroComponent } from './paginas/principal/components/clientes-cadastro/clientes-cadastro.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderMainComponent,
    HomeComponent,
    LoginComponent,
    LoginCadastroComponent,
    PrincipalComponent,
    ErrorComponent,
    ProgressComponent,
    HeaderValidaLoginComponent,
    MenuUserComponent,
    PrincipalLogoffComponent,
    PrincipalSignupComponent,
    NavComponent,
    DeclaracaoCadastroComponent,
    DeclaracaoAnaliseRelComponent,
    ClientesComponent,
    ClientesCadastroComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    MatToolbarModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatMenuModule,
    MatSidenavModule,
    MatExpansionModule,
    MatStepperModule,
    MatRadioModule
  ],
  providers: [
    LoginCadastroService, 
    LoginService,
    PrincipalService,
    AuthService,
    AuthGuard],
  bootstrap: [AppComponent],
  entryComponents: [
    LoginComponent,
    LoginCadastroComponent
  ]
})
export class AppModule { }
