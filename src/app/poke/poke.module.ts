import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { PokeRoutingModule } from './poke-routing.module';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddPokeComponent } from './components/add-poke/add-poke.component';



@NgModule({
  declarations: [
    MainPageComponent,
    ListComponent,
    AddPokeComponent,
  ],
  exports:[
    MainPageComponent
  ],
  imports: [
    CommonModule,
    PokeRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class PokeModule { }
