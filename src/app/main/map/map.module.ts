import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map.component';
import { MapRoutingModule } from './map-routing.module';
import { AngularMaterialModule } from '../../shared/angular-material/angular-material.module';

@NgModule({
  imports: [
    CommonModule,
    MapRoutingModule,
    AngularMaterialModule
  ],
  declarations: [MapComponent]
})
export class MapModule { }
