import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltersComponent } from './filters.component';
import { DropdownModule } from 'primeng/dropdown';
import { ReactiveFormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [FiltersComponent],
  exports: [FiltersComponent],
  imports: [CommonModule, DropdownModule, ReactiveFormsModule, MultiSelectModule, ButtonModule],
})
export class FiltersModule {}
