/*
Imports
*/
  // Angular
  import { BrowserModule } from '@angular/platform-browser';
  import { NgModule } from '@angular/core';
  import { AppRoutingModule } from './app-routing.module';
  import { CarouselComponent } from './carousel/carousel.component';
  import { FormComponent } from './form/form.component';
  import { HttpClientModule } from '@angular/common/http';

  // Inner
  import { AppComponent } from './app.component';
  import { ContentService } from "./services/content/content.service";
  import { CrudService } from "./services/crud/crud.service";
//

/*
Definition & export
*/
  @NgModule({
    declarations: [
      AppComponent
    ],
    imports: [
      BrowserModule,
      HttpClientModule,
      AppRoutingModule,
      CarouselComponent,
      FormComponent
    ],
    providers: [ ContentService, CrudService ],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
//