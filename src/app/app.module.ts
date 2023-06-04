import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import  {HttpClientModule} from '@angular/common/http';
import { VedioHomePageComponent } from './vedio-home-page/vedio-home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    VedioHomePageComponent
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    HttpClientModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
