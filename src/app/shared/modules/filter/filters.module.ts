import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltersComponent } from './filters.component';
import { DropdownModule } from 'primeng/dropdown';
import { ReactiveFormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';
import { ButtonModule } from 'primeng/button';
import { StoreModule } from '@ngrx/store';
import { FILTER_STATE_KEY, filterReducer } from './store/filter.reducer';

@NgModule({
  declarations: [FiltersComponent],
  exports: [FiltersComponent],
  imports: [
    CommonModule,
    DropdownModule,
    ReactiveFormsModule,
    MultiSelectModule,
    ButtonModule,
    StoreModule.forFeature(FILTER_STATE_KEY, filterReducer),
  ],
})
export class FiltersModule {}
