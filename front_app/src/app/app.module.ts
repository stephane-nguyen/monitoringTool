import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { AuthModule } from './features/auth/auth.module';
import { UserModule } from './features/user/user.module';

@NgModule({
  declarations: [AppComponent],
  imports: [AppRoutingModule, CoreModule, UserModule, AuthModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
