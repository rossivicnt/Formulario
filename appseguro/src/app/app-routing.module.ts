import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { PrivadoPageComponent } from './components/privado-page/privado-page.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { Formulario1Component } from './components/formulario1/formulario1.component';
import { Formulario2Component } from './components/formulario2/formulario2.component';
import { Formulario3Component } from './components/formulario3/formulario3.component';

const routes: Routes = [
  {path: '', redirectTo:'login', pathMatch:'full'},
  {path:'user',component:HomePageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'usuarios', component: UsuariosComponent},
  {path: 'formulario1', component: Formulario1Component},
  {path: 'formulario1/:id', component: Formulario1Component},
  {path: 'formulario2', component: Formulario2Component},
  {path: 'formulario2/:id', component: Formulario2Component},
  {path: 'formulario3', component: Formulario3Component},
  {path: 'formulario3/:id', component: Formulario3Component},
  {path: 'privado', component: PrivadoPageComponent},
  {path: '**', component: NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
