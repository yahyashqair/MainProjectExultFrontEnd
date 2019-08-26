import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, } from '@angular/router';
import { XdeComponent } from './Component/xde/xde.component';
import { ErrorlinkComponent } from './Component/errorlink/errorlink.component';
import { AppComponent } from './app.component';
import { TreeComponent } from './Component/tree/tree.component';
import { FeatureComponent } from './Component/feature/feature.component';
import { XdeinfoComponent } from './Component/Info/xdeinfo/xdeinfo.component';
import { FeatureinfoComponent } from './Component/Info/featureinfo/featureinfo.component';
import { ProfileinfoComponent } from './Component/Info/profileinfo/profileinfo.component';
import { ProfileComponent } from './Component/profile/profile.component';
import { NProfileComponent } from './Component/profile/n-profile/n-profile.component';
import { NfeatureComponent } from './Component/feature/nfeature/nfeature.component';
import { NxdeComponent } from './Component/xde/nxde/nxde.component';
import {LoaderComponent} from './Component/device/loader/loader.component';
import {MatchingComponent} from './Component/profile/matching/matching.component';
import {HomeComponent} from './Component/device/home/home.component';
import {DeviceInfoComponent} from './Component/Info/device-info/device-info.component';
import {ServerHomeComponent} from './Component/server/server-home/server-home.component';
import {ServerPageComponent} from './Component/server/server-page/server-page.component';
const routes: Routes = [
  { path: 'xde', component: NxdeComponent },
  { path: 'xde/:id', component: XdeinfoComponent },
  { path: 'feature', component: NfeatureComponent },
  { path: 'nprofile', component: ProfileComponent },
  { path: 'nfeature', component: FeatureComponent },
  { path: 'nxde', component: XdeComponent },
  { path: 'feature/:id', component: FeatureinfoComponent },
  { path: 'profile/:id', component: ProfileinfoComponent },
  { path: 'device/:id', component: DeviceInfoComponent },
  { path: 'profile', component: NProfileComponent },
  { path: 'device', component: HomeComponent },
  { path: 'upload', component: LoaderComponent },
  { path: 'matching', component: MatchingComponent },
  { path: 'tree', component: TreeComponent },
  { path: 'server/:id', component: ServerPageComponent },
  { path: '', component: ServerHomeComponent },
  { path: '**', component: ErrorlinkComponent }];

@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ], exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
