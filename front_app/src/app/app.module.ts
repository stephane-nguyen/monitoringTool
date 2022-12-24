import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { AuthModule } from './features/auth/auth.module';

@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  imports: [AppRoutingModule, CoreModule, AuthModule],
})
export class AppModule {}
