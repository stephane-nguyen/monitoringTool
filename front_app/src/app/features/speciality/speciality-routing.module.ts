import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpecialityListComponent } from './speciality-list/speciality-list.component';

const routes: Routes = [{ path: '', component: SpecialityListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpecialityRoutingModule {}
