import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Gen1PageRoutingModule } from './gen1-routing.module';

import { Gen1Page } from './gen1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Gen1PageRoutingModule
  ],
  declarations: [Gen1Page],
  exports: [Gen1Page],
})
export class Gen1PageModule {}
