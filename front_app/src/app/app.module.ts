import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { AuthModule } from './features/auth/auth.module';
import { UserModule } from './features/user/user.module';
import { SpecialityComponent } from './features/speciality/speciality.component';
import { SubjectComponent } from './features/subject/subject.component';

@NgModule({
  declarations: [AppComponent, SpecialityComponent, SubjectComponent],
  imports: [AppRoutingModule, CoreModule, UserModule, AuthModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
