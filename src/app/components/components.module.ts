import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    MenuComponent,
    HeaderComponent
  ],
  exports:[
    MenuComponent,
    HeaderComponent
    
  ],
  imports: [
    CommonModule,
    IonicModule,
   RouterModule
  ]
})
export class ComponentsModule { }
