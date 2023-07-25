import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NaveComponent } from './nave.component';

const routes: Routes = [{ path: '', component: NaveComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NaveRoutingModule { }
