import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Gen1Page } from './gen1.page';

const routes: Routes = [
  {
    path: '',
    component: Gen1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Gen1PageRoutingModule {}
