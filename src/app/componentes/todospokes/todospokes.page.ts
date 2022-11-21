import { Component, OnInit } from '@angular/core';
import { GeneracionesService } from 'src/app/services/generaciones.service';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
@Component({
  selector: 'app-todospokes',
  templateUrl: './todospokes.page.html',
  styleUrls: ['./todospokes.page.scss'],
})
export class TodospokesPage implements OnInit {

  pokedex:any = [];
  constructor(private todosGenServ: GeneracionesService) { 
    todosGenServ.obtenerTodos().subscribe((data:any) => {
      this.pokedex= data.results;
    })
  }

  ngOnInit() {
  }
  onIonInfinite(ev:any) {
    setTimeout(() => {
      (ev as InfiniteScrollCustomEvent).target.complete();
    }, 500);
  }

}
