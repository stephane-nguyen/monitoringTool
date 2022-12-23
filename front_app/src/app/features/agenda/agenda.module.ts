import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgendaRoutingModule } from './agenda-routing.module';
import { AgendaComponent } from './agenda.component';

import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { SharedModule } from 'src/app/shared/shared.module';

import { FormsModule } from '@angular/forms';

import { FlatpickrModule } from 'angularx-flatpickr';

@NgModule({
  declarations: [AgendaComponent],
  imports: [
    AgendaRoutingModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    CommonModule,
    MatButtonToggleModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    SharedModule,
    FormsModule,
    FlatpickrModule,
  ],
})
export class AgendaModule {}
