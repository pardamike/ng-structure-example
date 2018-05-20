import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';


@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatSlideToggleModule
  ],
  exports: [
    MatButtonModule,
    MatSlideToggleModule
  ]
})
export class MaterialImportModule { }
