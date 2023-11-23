import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
// import { HttpHeaders } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NewPlayerComponent } from './components/new-player/new-player.component';
import { NewGameComponent } from './components/new-game/new-game.component';
import { NewDesignerComponent } from './components/new-designer/new-designer.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from "@angular/forms";
import { AllDesignerComponent } from './components/all-designer/all-designer.component';
import { AllGameComponent } from './components/all-game/all-game.component';
import { AllPlayerComponent } from './components/all-player/all-player.component';
import { PlayerItemComponent } from './components/player-item/player-item.component';
import { GameItemComponent } from './components/game-item/game-item.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { DesinerItemComponent } from './components/desiner-item/desiner-item.component';
// import { companyHomeComponent } from './components/company-home/company-home.component';
import { FirstHomeComponent } from './components/first-home/first-home.component';
// import { HomeComponent } from './components/home-designer/home.component';
import { DesignerGameComponent } from './components/designer-game/designer-game.component';
import { PlayerGameComponent } from './components/player-game/player-game.component';
import { ListPlayerGameComponent } from './components/list-player-game/list-player-game.component';
import { HomePageComponent } from './components/home-page/home-page.component';
// import { DesignerHomePageComponent } from './components/designer-home-page/designer-home-page.component';
import { UpDateComponent } from './components/up-date/up-date.component';
// import { FirstDesignerPageComponent } from './components/first-designer-page/first-designer-page.component';
import { PlayerLoginComponent } from './components/player-login/player-login.component';
import { LogInCompanyComponent } from './components/log-in-company/log-in-company.component';
import { PlayerNameComponent } from './components/player-name/player-name.component';
import { ComLoginComponent } from './components/com-login/com-login.component';
import { ComSignComponent } from './components/com-sign/com-sign.component';
import { DesLoginComponent } from './components/des-login/des-login.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import {MatTreeModule} from '@angular/material/tree';
import { PlayerInfoComponent } from './components/player-info/player-info.component';
import { DesignerInfoComponent } from './components/designer-info/designer-info.component';

@NgModule({
  declarations: [
    AppComponent,
    NewPlayerComponent,
    NewGameComponent,
    NewDesignerComponent,
    AllDesignerComponent,
    AllGameComponent,
    AllPlayerComponent,
    PlayerItemComponent,
    GameItemComponent,
    NavBarComponent,
    DesinerItemComponent,
    FirstHomeComponent,
    // HomeComponent,
    DesignerGameComponent,
    
    PlayerGameComponent,
    ListPlayerGameComponent,
    HomePageComponent,
    // DesignerHomePageComponent,
    UpDateComponent,
    // FirstDesignerPageComponent,
    PlayerLoginComponent,
    // PlayerSignupComponent,
    LogInCompanyComponent,
    PlayerNameComponent,
    ComLoginComponent,
    ComSignComponent,
    DesLoginComponent,
    AboutUsComponent,
    PlayerInfoComponent,
    DesignerInfoComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTreeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
