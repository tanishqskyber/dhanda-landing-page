import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { CountToModule } from 'angular-count-to';
// import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DhandaLandingComponent } from './dhanda-landing/dhanda-landing.component';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@NgModule({
  declarations: [
    AppComponent,
    DhandaLandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
