import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RandomPhotoGeneratorComponent } from './random-photo-generator/random-photo-generator.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, RandomPhotoGeneratorComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
