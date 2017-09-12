import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ApiproviderService } from "./services/apiprovider.service";
import { AllCustomersComponent } from './customers/all-customers/all-customers.component';
import { DetailCustomerComponent } from './customers/detail-customer/detail-customer.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'kunder',
    component: AllCustomersComponent
  },
  {
    path: 'kunder/:id',
    component: DetailCustomerComponent
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    AllCustomersComponent,
    DetailCustomerComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ApiproviderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
