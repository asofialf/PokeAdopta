import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AdoptedComponent } from './pages/adopted/adopted.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { InAdoptionComponent } from './pages/in-adoption/in-adoption.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AdoptFormComponent } from './pages/adopt-form/adopt-form.component';
import { FinalAdoptionComponent } from './pages/final-adoption/final-adoption.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'adopted', component: AdoptedComponent},
  {path: 'favorites', component: FavoritesComponent},
  {path: 'in-adoption', component: InAdoptionComponent},
  {path: 'adopt-form', component: AdoptFormComponent},
  {path: 'final-adoption', component: FinalAdoptionComponent},
  {path:'', pathMatch:'full', redirectTo:'home'},
  {path:'**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
