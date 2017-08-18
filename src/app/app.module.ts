import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ResourceDataService } from './services/resource-data.service';
import { LogService } from './services/log.service';

import { AppComponent } from './app.component';
import { MenuComponent } from './shared/menu/menu.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TabsComponent } from './tabs/tabs.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { AddResourceComponent } from './add-resource/add-resource.component';

const routes = [
  {
    path: '', component: DashboardComponent
  },
  {
    path: 'add-resource', component: AddResourceComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    TabsComponent,
    ListComponent,
    ItemComponent,
    AddResourceComponent
  ],
  imports: [
    BrowserModule, NgbModule.forRoot(), FormsModule, RouterModule.forRoot(routes)
  ],
  providers: [ResourceDataService, LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
