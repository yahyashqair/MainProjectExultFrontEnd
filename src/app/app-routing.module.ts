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
const routes: Routes = [
  { path: 'xde', component: XdeComponent },
  { path: 'xde/:id', component: XdeinfoComponent },
  { path: 'feature', component: FeatureComponent },
  { path: 'nprofile', component:NProfileComponent },

  { path: 'feature/:id', component: FeatureinfoComponent },
  { path: 'profile/:id', component: ProfileinfoComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '', component: TreeComponent },
  { path: '**', component: ErrorlinkComponent }];

@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ], exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
