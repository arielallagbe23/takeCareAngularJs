import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { WelcomeviewComponent } from './components/welcomeview/welcomeview.component';
import { RdvComponent } from './components/rdv/rdv.component';
import { OrdonanceComponent } from './components/ordonance/ordonance.component';
import { PaiementeffectueComponent } from './components/paiementeffectue/paiementeffectue.component';
import { PanierComponent } from './components/panier/panier.component';


const appRoutes: Routes = [

{ path: '', component:WelcomeviewComponent },
{ path: 'welcomeviewcomponent', component:WelcomeviewComponent },
{ path: 'articlecomponentpath', component:ArticlesComponent },
{ path: 'rdvcomponentpath', component:RdvComponent },
{ path: 'ordonancecomponentpath', component:OrdonanceComponent},
{ path: 'paiementeffectuecomponentpath', component:PaiementeffectueComponent},
{ path: 'paniercomponentpath', component:PanierComponent}


];

@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    NavbarComponent,
    WelcomeviewComponent,
    RdvComponent,
    OrdonanceComponent,
    PaiementeffectueComponent,
    PanierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
