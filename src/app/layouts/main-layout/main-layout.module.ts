import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainLayoutComponent } from './main-layout.component';
import { AngularMaterialModule } from '../../shared/angular-material/angular-material.module'
import { MainRoutingModule } from './main-routing.module';
import { MapModule } from '../../main/map/map.module';
import { SidenavComponent } from './components/sidenav/sidenav.component';

@NgModule({
  imports: [
    AngularMaterialModule,
    CommonModule,
    RouterModule,
    MainRoutingModule,
    MapModule
  ],
  declarations: [
    MainLayoutComponent,
    SidenavComponent
  ]
})
export class MainLayoutModule { }
