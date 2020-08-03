import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageComponent } from './manage.component';
import { ManageRountingModule } from './manage-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ManageRountingModule
  ],
  declarations: [ManageComponent]
})
export class ManageModule { }
