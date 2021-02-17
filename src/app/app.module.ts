import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './Components/user/user.component';
import { ThumbnailComponent } from './Components/thumbnail/thumbnail.component';
import { UsercardComponent } from './Components/user/usercard/usercard.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ThumbnailComponent,
    UsercardComponent
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
