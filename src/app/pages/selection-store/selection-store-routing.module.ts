import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectionStorePage } from './selection-store.page';

const routes: Routes = [
  {
    path: '',
    component: SelectionStorePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectionStorePageRoutingModule {}
