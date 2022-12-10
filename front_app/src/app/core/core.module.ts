import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [NavBarComponent],
  imports: [BrowserModule, BrowserAnimationsModule, RouterModule],
  exports: [NavBarComponent],
})
export class CoreModule {}
