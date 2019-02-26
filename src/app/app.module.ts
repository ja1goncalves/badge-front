import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonalizeBadgeComponent } from './personalize-badge/personalize-badge.component';
import { MessageInfoComponent } from './message-info/message-info.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonalizeBadgeComponent,
    MessageInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
