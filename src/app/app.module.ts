import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Component/navbar/navbar.component';
import { XdeComponent } from './Component/xde/xde.component';
import { FeatureComponent } from './Component/feature/feature.component';
import { ProfileComponent } from './Component/profile/profile.component';
import { TreeComponent } from './Component/tree/tree.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './/app-routing.module';
import { ErrorlinkComponent } from './Component/errorlink/errorlink.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    XdeComponent,
    FeatureComponent,
    ProfileComponent,
    TreeComponent,
    ErrorlinkComponent
  ],
  imports: [
    BrowserModule,HttpClientModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
