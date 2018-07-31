import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { PrivadoPageComponent } from './components/privado-page/privado-page.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { Formulario1Component } from './components/formulario1/formulario1.component';
import { Exportform1Component } from './components/exportform1/exportform1.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'usuarios', component: UsuariosComponent},
  {path: 'register', component: RegisterPageComponent},
  {path: 'formulario1', component: Formulario1Component},
  {path: 'export1', component: Exportform1Component},
  {path: 'privado', component: PrivadoPageComponent, canActivate: [AuthGuard]},
  {path: '**', component: NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
