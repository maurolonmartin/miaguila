import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentMethodsComponent } from './payment-methods.component';
import { PaymentMethodsRoutingModule } from './payment-routing.module';

@NgModule({
  imports: [
    CommonModule,
    PaymentMethodsRoutingModule
  ],
  declarations: [PaymentMethodsComponent]
})
export class PaymentMethodsModule { }
