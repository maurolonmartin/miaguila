import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularMaterialModule } from './shared/angular-material/angular-material.module';
import { Routing } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { LoginLayoutModule } from './layouts/login-layout/login-layout.module';
import { MainLayoutModule } from './layouts/main-layout/main-layout.module';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AngularMaterialModule,
    Routing,
    LoginLayoutModule,
    MainLayoutModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [AngularMaterialModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
