import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Gen3Page } from './gen3.page';

const routes: Routes = [
  {
    path: '',
    component: Gen3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Gen3PageRoutingModule {}
