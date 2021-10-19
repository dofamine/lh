import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';

@NgModule({
  declarations: [NavigationComponent, NavigationBarComponent],
  exports: [NavigationComponent],
  imports: [CommonModule],
})
export class NavigationModule {}
