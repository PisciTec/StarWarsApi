import { NgModule } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';

import { FilmesRoutingModule } from './filmes-routing.module';
import { FilmesComponent } from './filmes.component';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    FilmesComponent
  ],
  imports: [
    CommonModule,
    FilmesRoutingModule,
    MatTableModule,
    FormsModule, 
    MatFormFieldModule, 
    MatInputModule,
    NgIf, 
    MatButtonModule, 
    MatIconModule
  ]
})
export class FilmesModule { }
