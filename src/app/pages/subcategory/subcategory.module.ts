import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubcategoryPageRoutingModule } from './subcategory-routing.module';

import { SubcategoryPage } from './subcategory.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubcategoryPageRoutingModule,
    ComponentsModule
  ],
  declarations: [SubcategoryPage]
})
export class SubcategoryPageModule {}
