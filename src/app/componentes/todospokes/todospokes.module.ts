import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TodospokesPageRoutingModule } from './todospokes-routing.module';

import { TodospokesPage } from './todospokes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TodospokesPageRoutingModule
  ],
  declarations: [TodospokesPage],
  exports: [TodospokesPage],
})
export class TodospokesPageModule {}
