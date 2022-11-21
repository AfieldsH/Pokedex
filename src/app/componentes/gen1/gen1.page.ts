import { Component, OnInit } from '@angular/core';
import { GeneracionesService } from 'src/app/services/generaciones.service';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-gen1',
  templateUrl: './gen1.page.html',
  styleUrls: ['./gen1.page.scss'],
})
export class Gen1Page implements OnInit {

  pokedex:any = [];
  constructor( private gen1Serv: GeneracionesService, private router:Router) {
    gen1Serv.obtenerGen1().subscribe((data:any) => {
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

  consultar(pokemon:any){
    this.router.navigate(["/pokedex/"+pokemon])
  }

}
