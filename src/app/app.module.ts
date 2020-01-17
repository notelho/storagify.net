import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlankComponent } from './layouts/blank/blank.component';
import { BarComponent } from './layouts/bar/bar.component';
import { HomeComponent } from './pages/home/home.component';
import { DocsComponent } from './pages/docs/docs.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { HomeHeaderComponent } from './pages/home/home-header/home-header.component';
import { HomeQualityComponent } from './pages/home/home-quality/home-quality.component';
import { HomeParallaxComponent } from './pages/home/home-parallax/home-parallax.component';
import { HomeToolsComponent } from './pages/home/home-tools/home-tools.component';

@NgModule({
  declarations: [
    AppComponent,
    BlankComponent,
    BarComponent,
    HomeComponent,
    DocsComponent,
    NotfoundComponent,
    HomeHeaderComponent,
    HomeQualityComponent,
    HomeParallaxComponent,
    HomeToolsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
