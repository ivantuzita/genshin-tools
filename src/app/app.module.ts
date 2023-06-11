import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TalentListComponent } from './components/home/talents/talent-list/talent-list.component';
import { TalentCardComponent } from './components/home/talents/talent-card/talent-card.component';
import { WeaponListComponent } from './components/home/weapons/weapon-list/weapon-list.component';
import { WeaponCardComponent } from './components/home/weapons/weapon-card/weapon-card.component';
import { ResourceListComponent } from './components/home/resources/resource-list/resource-list.component';
import { ResourceCardComponent } from './components/home/resources/resource-card/resource-card.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TalentListComponent,
    TalentCardComponent,
    WeaponListComponent,
    WeaponCardComponent,
    ResourceListComponent,
    ResourceCardComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
