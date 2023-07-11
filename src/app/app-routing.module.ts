import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }, { path: 'filmes', loadChildren: () => import('./filmes/filmes.module').then(m => m.FilmesModule) }, { path: 'nave', loadChildren: () => import('./nave/nave.module').then(m => m.NaveModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
