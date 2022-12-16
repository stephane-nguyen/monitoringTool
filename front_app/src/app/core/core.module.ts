import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PageNotFoundComponent } from './components/pageNotFound/page-not-found.component';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { SharedModule } from '../shared/shared.module';
import { AgendaModule } from '../features/agenda/agenda.module';

@NgModule({
  declarations: [NavBarComponent, PageNotFoundComponent],
  exports: [NavBarComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    SharedModule,
    AgendaModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
  ],
})
export class CoreModule {}
