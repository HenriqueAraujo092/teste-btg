import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersComponent } from './characters/characters.component';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CharactersDetailsComponent } from './characters-details/characters-details.component';


@NgModule({
  declarations: [
    CharactersComponent,
    CharactersDetailsComponent
  ],
  imports: [
    CommonModule,
    CharactersRoutingModule,
    MatCardModule,
    MatGridListModule,
    MatProgressSpinnerModule
  ]
})
export class CharactersModule { }
