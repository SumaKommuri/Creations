import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LabelComponent } from './label/label.component';
import {FormsModule} from "@angular/forms";
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { TabelComponent } from './tabel/tabel.component';

const appRoutes: Routes = [
{ path: 'home', component: HomeComponent },
{ path: 'signup', component: SignupComponent},
{path: '', redirectTo: '/home', pathMatch: 'full'},
{ path: 'label', component: LabelComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LabelComponent,
    NavbarComponent,
    SignupComponent,
    HomeComponent,
    TabelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
