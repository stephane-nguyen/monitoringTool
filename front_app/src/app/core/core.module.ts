import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PageNotFoundComponent } from './components/pageNotFound/page-not-found.component';
import { LoadingInterceptor } from './components/loading-spinner/loading.interceptor';

import { SharedModule } from '../shared/shared.module';

import { AgendaModule } from '../features/agenda/agenda.module';
import { SpecialityModule } from '../features/speciality/speciality.module';
import { SubjectModule } from '../features/subject/subject.module';
import { UserModule } from '../features/user/user.module';

@NgModule({
  declarations: [NavBarComponent, PageNotFoundComponent],
  exports: [NavBarComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    SharedModule,

    AgendaModule,
    SpecialityModule,
    SubjectModule,
    UserModule,

    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true,
    },
  ],
})
export class CoreModule {}
