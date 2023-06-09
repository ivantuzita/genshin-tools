import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TalentListComponent } from './components/talents/talent-list/talent-list.component';
import { TalentCardComponent } from './components/talents/talent-card/talent-card.component';
import { WeaponListComponent } from './components/weapons/weapon-list/weapon-list.component';
import { WeaponCardComponent } from './components/weapons/weapon-card/weapon-card.component';
import { ResourceListComponent } from './components/resources/resource-list/resource-list.component';
import { ResourceCardComponent } from './components/resources/resource-card/resource-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TalentListComponent,
    TalentCardComponent,
    WeaponListComponent,
    WeaponCardComponent,
    ResourceListComponent,
    ResourceCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
