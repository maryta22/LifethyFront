import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { GraphicsComponent } from './graphics/graphics.component';

const routes: Routes = [  
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'catalogo', component: CatalogoComponent},
  { path: 'graphics', component: GraphicsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
