import { NgModule } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';

import { NaveRoutingModule } from './nave-routing.module';
import { NaveComponent } from './nave.component';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {PageEvent, MatPaginatorModule} from '@angular/material/paginator';


@NgModule({
  declarations: [
    NaveComponent
  ],
  imports: [
    CommonModule,
    NaveRoutingModule,
    MatTableModule,
    FormsModule, 
    MatFormFieldModule, 
    MatInputModule,
    NgIf, 
    MatButtonModule, 
    MatIconModule,
    MatPaginatorModule
  ]
})
export class NaveModule { }
