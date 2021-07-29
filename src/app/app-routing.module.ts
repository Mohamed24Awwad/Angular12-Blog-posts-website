import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { FavoriteComponent } from './favorite/favorite.component';

const routes: Routes = [

  
  {path : "contact",component:ContactComponent},
  {path : "about", component:AboutComponent},
  {path : "home",component:HomeComponent},
  {path : "favorite",component:FavoriteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 