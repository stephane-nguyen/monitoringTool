import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingInterceptor } from '../core/components/loading-spinner/loading.interceptor';
import { BorderCardDirective } from './directives/border-card.directive';

@NgModule({
  declarations: [BorderCardDirective],
  imports: [CommonModule],
  exports: [],
})
export class SharedModule {}
