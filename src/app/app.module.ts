import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { VisiblePipe } from './visible.pipe';

@NgModule({
  declarations: [AppComponent, VisiblePipe],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
