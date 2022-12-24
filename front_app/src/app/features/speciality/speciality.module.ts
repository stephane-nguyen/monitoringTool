import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpecialityRoutingModule } from './speciality-routing.module';
import { SpecialityListComponent } from './speciality-list/speciality-list.component';
import { SpecialityAddComponent } from './speciality-add/speciality-add.component';
import { SpecialityUpdateComponent } from './speciality-update/speciality-update.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    SpecialityListComponent,
    SpecialityAddComponent,
    SpecialityUpdateComponent,
  ],
  imports: [CommonModule, SpecialityRoutingModule, HttpClientModule],
})
export class SpecialityModule {}
