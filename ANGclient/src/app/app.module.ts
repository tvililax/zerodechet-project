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
  import { HomepageComponent } from './routes/homepage/homepage.component';
//
// Router
import { RouterModule } from "@angular/router"
import { AppRouterModule } from "./app.router";
import { ZerodechetComponent } from './routes/zerodechet/zerodechet.component';
import { AlimentaireComponent } from './routes/alimentaire/alimentaire.component';
import { LoginComponent } from './routes/login/login.component';
import { UserComponent } from './routes/user/user.component'

/*
Definition & export
*/
  @NgModule({
    declarations: [
      AppComponent,
      CarouselComponent,
      FormComponent,
      HomepageComponent,
      ZerodechetComponent,
      AlimentaireComponent,
      LoginComponent,
      UserComponent
    ],
    imports: [
      BrowserModule,
      HttpClientModule,
      RouterModule.forRoot( AppRouterModule, { onSameUrlNavigation: 'reload' } ),
      AppRoutingModule
    ],
    providers: [ ContentService, CrudService ],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
//