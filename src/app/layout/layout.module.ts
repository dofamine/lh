import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';
import { HeaderModule } from './header/header.module';
import { NavigationModule } from './navigation/navigation.module';
import { RouterModule } from '@angular/router';
import { FiltersModule } from './filters/filters.module';

@NgModule({
  declarations: [LayoutComponent],
  exports: [LayoutComponent],
  imports: [HeaderModule, NavigationModule, RouterModule, FiltersModule],
})
export class LayoutModule {}
