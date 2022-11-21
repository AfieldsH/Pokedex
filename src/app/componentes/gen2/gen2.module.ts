import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Gen2PageRoutingModule } from './gen2-routing.module';

import { Gen2Page } from './gen2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Gen2PageRoutingModule
  ],
  declarations: [Gen2Page],
  exports: [Gen2Page],
})
export class Gen2PageModule {}
