import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { MonthSummaryComponent } from './components/month-summary/month-summary.component';
import { LoginComponent } from './components/login/login.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { CategoryCreationComponent } from './components/category-creation/category-creation.component';
import { AlertComponent } from './components/alert/alert.component';

import ptBr from '@angular/common/locales/pt';
import { GeneralMainPageComponent } from './components/general-main-page/general-main-page.component';
registerLocaleData(ptBr);

@NgModule({
  declarations: [
    AppComponent,
    ListRenderComponent,
    MonthSummaryComponent,
    LoginComponent,
    CategoryCreationComponent,
    MainPageComponent,
    AlertComponent,
    GeneralMainPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt-BR' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
