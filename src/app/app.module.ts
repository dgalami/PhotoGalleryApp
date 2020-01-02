import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GallaryComponent } from './gallary/gallary.component';
import { ImageComponent } from './image/image.component';
import { ImageFilterPipe } from './shared/image-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GallaryComponent,
    ImageComponent,
    ImageFilterPipe
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
