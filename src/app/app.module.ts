import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { ApolloModule } from 'apollo-angular';


import { AppComponent } from './app.component';
import { ApolloClientComponent } from './apollo-client/apollo-client.component';
import { ApolloClientService } from './apollo-client.service';
import { HttpLink } from 'apollo-angular-link-http';

const galileoRoutes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: ApolloClientComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    ApolloClientComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ApolloModule,
    RouterModule.forRoot(galileoRoutes)
  ],
  providers: [ApolloClientService, HttpLink],
  bootstrap: [AppComponent]
})
export class AppModule { }
