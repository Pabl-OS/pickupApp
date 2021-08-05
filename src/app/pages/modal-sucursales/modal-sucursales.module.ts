import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalSucursalesPageRoutingModule } from './modal-sucursales-routing.module';

import { ModalSucursalesPage } from './modal-sucursales.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalSucursalesPageRoutingModule
  ],
  declarations: [ModalSucursalesPage]
})
export class ModalSucursalesPageModule {}
