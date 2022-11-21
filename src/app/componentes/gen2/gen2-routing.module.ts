import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Gen2Page } from './gen2.page';

const routes: Routes = [
  {
    path: '',
    component: Gen2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Gen2PageRoutingModule {}
