import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTabsModule } from '@angular/material/tabs'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { CoursesComponent } from './components/courses/courses.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CoursesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatTabsModule,
    NgbModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
