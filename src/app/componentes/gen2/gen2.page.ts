import { Component, OnInit } from '@angular/core';
import { GeneracionesService } from 'src/app/services/generaciones.service';
import { InfiniteScrollCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-gen2',
  templateUrl: './gen2.page.html',
  styleUrls: ['./gen2.page.scss'],
})
export class Gen2Page implements OnInit {

  pokedex:any = [];
  constructor( private gen2Serv: GeneracionesService) { 
    gen2Serv.obtenerGen2().subscribe((data:any) => {
     this.pokedex = data.results; 
    });

  }

  ngOnInit() {
  }
  onIonInfinite(ev:any) {
    setTimeout(() => {
      (ev as InfiniteScrollCustomEvent).target.complete();
    }, 500);
  }

}
