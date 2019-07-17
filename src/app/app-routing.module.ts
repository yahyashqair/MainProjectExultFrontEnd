import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule,  } from '@angular/router';
import { XdeComponent } from './Component/xde/xde.component';
import { ErrorlinkComponent } from './Component/errorlink/errorlink.component';
import { AppComponent } from './app.component';
import { TreeComponent } from './Component/tree/tree.component';
import { FeatureComponent } from './Component/feature/feature.component';
const routes: Routes = [
  {path: 'xde' ,component: XdeComponent},
  {path: 'feature',component : FeatureComponent},
  {path: '',component : TreeComponent},
  {path: '**',component : ErrorlinkComponent}];

@NgModule({
  imports: [
    CommonModule,RouterModule.forRoot(routes)
  ],  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
