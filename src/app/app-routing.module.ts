import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes , RouterModule } from '@angular/router';
import { AllDesignerComponent } from './components/all-designer/all-designer.component';
import { AllGameComponent } from './components/all-game/all-game.component';
import { GameItemComponent } from './components/game-item/game-item.component';
import { PlayerItemComponent } from './components/player-item/player-item.component';
import { AllPlayerComponent } from './components/all-player/all-player.component';
import { DesinerItemComponent } from './components/desiner-item/desiner-item.component';
// import { CompanyHomeComponent } from './components/company-home/company-home.component';
import { FirstHomeComponent } from './components/first-home/first-home.component';
// import { HomeComponent } from './components/home-designer/home.component';
import { DesignerGameComponent } from './components/designer-game/designer-game.component';
import { NewGameComponent } from './components/new-game/new-game.component';
import { PlayerGameComponent } from './components/player-game/player-game.component';
import { ListPlayerGameComponent } from './components/list-player-game/list-player-game.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LogInCompanyComponent } from './components/log-in-company/log-in-company.component';
import { PlayerLoginComponent } from './components/player-login/player-login.component';
import { NewPlayerComponent } from './components/new-player/new-player.component';
import { PlayerNameComponent } from './components/player-name/player-name.component';
import { DesignerLoginComponent } from './components/designer-login/designer-login.component';
import { NewDesignerComponent } from './components/new-designer/new-designer.component';
import { UpDateComponent } from './components/up-date/up-date.component';
import { ComLoginComponent } from './components/com-login/com-login.component';
import { DesLoginComponent } from './components/des-login/des-login.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { PlayerInfoComponent } from './components/player-info/player-info.component';
import { DesignerInfoComponent } from './components/designer-info/designer-info.component';

const routes: Routes = [
  {
   path: "",
   component:HomePageComponent
 },

 {
   path: "designer",
   component: AllDesignerComponent
 },
 {
  path: "games",
  component: AllGameComponent
},
{
  path: "player",
  component: AllPlayerComponent
},
 { path: 'designer/id/:designerID',
  component: DesinerItemComponent },
  { path: 'games/id/:gameID',
  component: GameItemComponent },
  { path: 'player/id/:playerID',
  component: PlayerItemComponent },
  {
   path: "games/designerUsername/:designerUsername",
   component: DesignerGameComponent
 },
 {
  path: "games/playerUsername/:playerUsername",
  component: PlayerGameComponent
},
 {
  path: ":designerID/NewGames",
  component: NewGameComponent
},
{
  path: ":playerID/gamePlayer/:gameID",
  component: ListPlayerGameComponent
},
{
  path: "company",
  component: FirstHomeComponent
},

{
  path: 'log-in-company',
  component: LogInCompanyComponent
},
{
  path: 'aboutUs',
  component: AboutUsComponent
},
{
  path: 'login/player',
  component: PlayerLoginComponent
},
{
  path: 'NewPlayer',
  component: NewPlayerComponent
},

{
  path: 'player/playerUsername',
  component: PlayerNameComponent
},
{
  path: 'login/designer',
  component: DesLoginComponent
},
{
  path: 'NewDesigner',
  component: NewDesignerComponent
},
{
  path: 'login/company',
  component: ComLoginComponent
},


{
  path: 'UpdateGames/:gameID',
  component: UpDateComponent
},
{
  path: 'player/playerUsername/:playerUsername',
  component: PlayerInfoComponent
},
{
  path: 'designer/designerUsername/:designerUsername',
  component: DesignerInfoComponent
},

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule] 
})
export class AppRoutingModule { }
