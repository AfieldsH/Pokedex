import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodospokesPage } from './todospokes.page';

const routes: Routes = [
  {
    path: '',
    component: TodospokesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodospokesPageRoutingModule {}
