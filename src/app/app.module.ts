import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DetectWasteComponent } from './detect-waste/detect-waste.component';


const routes : Routes = [
  {
    path:'detectWaste',
    component : DetectWasteComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    DetectWasteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
