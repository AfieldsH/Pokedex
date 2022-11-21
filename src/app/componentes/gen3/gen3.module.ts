import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Gen3PageRoutingModule } from './gen3-routing.module';

import { Gen3Page } from './gen3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Gen3PageRoutingModule
  ],
  declarations: [Gen3Page]
})
export class Gen3PageModule {}
