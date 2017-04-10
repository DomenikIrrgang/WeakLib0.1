import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WeakauraListComponent } from './weakaura-list/weakaura-list.component';
import { NewsEntryComponent } from './news-entry/news-entry.component';

import { HeroService } from './hero.service';
import { WeakauraService } from './services/weakaura.service';
import { NewsService } from './services/news.service';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent,
    NavbarComponent,
    WeakauraListComponent,
    NewsEntryComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [
    HeroService,
    WeakauraService,
    NewsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
