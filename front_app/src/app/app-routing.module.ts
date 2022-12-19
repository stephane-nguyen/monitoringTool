import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './core/components/pageNotFound/page-not-found.component';
import { LoginComponent } from './features/auth/login/login.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./features/agenda/agenda.module').then((m) => m.AgendaModule),
  },

  {
    path: 'users',
    loadChildren: () =>
      import('./features/user/user.module').then((m) => m.UserModule),
  },
  { path: 'login', component: LoginComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
