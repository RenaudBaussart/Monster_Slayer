import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PnjComponent } from './pnj/pnj.component';
import { PnjHealthBarComponent } from './pnj-health-bar/pnj-health-bar.component';



@NgModule({
  declarations: [
    PnjComponent,
    PnjHealthBarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [PnjComponent, PnjHealthBarComponent]
})
export class PnjModule { }
