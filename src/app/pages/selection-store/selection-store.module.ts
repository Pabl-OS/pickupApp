import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectionStorePageRoutingModule } from './selection-store-routing.module';

import { SelectionStorePage } from './selection-store.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectionStorePageRoutingModule
  ],
  declarations: [SelectionStorePage]
})
export class SelectionStorePageModule {}
