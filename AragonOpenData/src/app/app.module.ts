import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  ChartModule, PanelModule, FieldsetModule, InputTextModule, DropdownModule,
  InputTextareaModule, ButtonModule, SharedModule, DataTableModule
} from 'primeng/primeng';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AdminHomeComponent } from './components/app-admin/admin_home/admin_home.component';
import { DataCenterComponent } from './components/app-admin/data-center/data-center.component';
import {CampusComponent} from './components/app-admin/campus/admin_campus.component';
import { LoginComponent } from './components/login/login.component';
import { AppAdminComponent } from './components/app-admin/app-admin.component';
import { GlobalAdminComponent } from './components/app-admin/global-admin/global-admin.component';
import { UsersComponent } from './components/app-admin/global-admin/users/users.component';
import { RolesComponent } from './components/app-admin/global-admin/roles/roles.component';
import { ContentComponent } from './components/app-admin/global-admin/content/content.component';
import { DatasetsComponent } from './components/app-admin/data-center/datasets/datasets.component';
import { OrgsComponent } from './components/app-admin/data-center/orgs/orgs.component';
import { InfoComponent } from './components/app-admin/global-admin/content/info/info.component';
import { ApplicationsComponent } from './components/app-admin/global-admin/content/applications/applications.component';
import { EventsComponent } from './components/app-admin/global-admin/content/events/events.component';
import { DevelopersComponent } from './components/app-admin/global-admin/content/developers/developers.component';
import { ApisComponent } from './components/app-admin/global-admin/content/apis/apis.component';
import { SparqlComponent } from './components/app-admin/global-admin/content/sparql/sparql.component';
import { DataCenterHomeComponent } from './components/app-admin/data-center/data-center-home/data-center-home.component';
import { GlobalAdminHomeComponent } from './components/app-admin/global-admin/global-admin-home/global-admin-home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminHomeComponent,
    DataCenterComponent,
    CampusComponent,
    LoginComponent,
    AppAdminComponent,
    GlobalAdminComponent,
    UsersComponent,
    RolesComponent,
    ContentComponent,
    DatasetsComponent,
    OrgsComponent,
    InfoComponent,
    ApplicationsComponent,
    EventsComponent,
    DevelopersComponent,
    ApisComponent,
    SparqlComponent,
    DataCenterHomeComponent,
    GlobalAdminHomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ChartModule,
    PanelModule,
    FieldsetModule,
    InputTextModule,
    DropdownModule,
    InputTextareaModule,
    ButtonModule,
    DataTableModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
