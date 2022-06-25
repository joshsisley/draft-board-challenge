import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DraftBoardModule } from './draft-board/draft-board.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DraftBoardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
