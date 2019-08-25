import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {NavbarComponent} from './Component/navbar/navbar.component';
import {XdeComponent} from './Component/xde/xde.component';
import {FeatureComponent} from './Component/feature/feature.component';
import {ProfileComponent} from './Component/profile/profile.component';
import {TreeComponent} from './Component/tree/tree.component';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './/app-routing.module';
import {ErrorlinkComponent} from './Component/errorlink/errorlink.component';
import {XdeinfoComponent} from './Component/Info/xdeinfo/xdeinfo.component';
import {ProfileinfoComponent} from './Component/Info/profileinfo/profileinfo.component';
import {FeatureinfoComponent} from './Component/Info/featureinfo/featureinfo.component';
import {VisModule} from 'ngx-vis';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api';
import {NProfileComponent} from './Component/profile/n-profile/n-profile.component';                 //api
import {DataViewModule} from 'primeng/dataview';
import {PanelModule} from 'primeng/components/panel/panel';
import {DataGridModule} from 'primeng/components/datagrid/datagrid';
import {DialogModule} from 'primeng/components/dialog/dialog';
import {TabViewModule} from 'primeng/components/tabview/tabview';
import {CodeHighlighterModule} from 'primeng/components/codehighlighter/codehighlighter';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TooltipModule} from 'primeng/tooltip';
import {TableModule} from 'primeng/table';
import {NfeatureComponent} from './Component/feature/nfeature/nfeature.component';
import {NxdeComponent} from './Component/xde/nxde/nxde.component';

import {LoaderComponent} from './Component/device/loader/loader.component';
import {FileSelectDirective} from 'ng2-file-upload';
import {MatchingComponent} from './Component/profile/matching/matching.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HomeComponent} from './Component/device/home/home.component';
import {DeviceInfoComponent} from './Component/Info/device-info/device-info.component';
import {DropdownModule} from 'primeng/dropdown';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import { ServerHomeComponent } from './Component/server/server-home/server-home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    XdeComponent,
    FeatureComponent,
    ProfileComponent,
    TreeComponent,
    ErrorlinkComponent,
    XdeinfoComponent,
    ProfileinfoComponent,
    FeatureinfoComponent,
    NProfileComponent,
    NfeatureComponent,
    NxdeComponent,
    LoaderComponent, FileSelectDirective,
    MatchingComponent,
    HomeComponent,
    DeviceInfoComponent,
    ServerHomeComponent
  ],
  imports: [
    CommonModule,
    BrowserModule, HttpClientModule, AppRoutingModule, VisModule, DataViewModule, PanelModule,
    DialogModule,
    TabViewModule, MessagesModule, MessageModule,
    CodeHighlighterModule, DataGridModule, DropdownModule,
    BrowserAnimationsModule, AccordionModule, TooltipModule, TableModule, ReactiveFormsModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
