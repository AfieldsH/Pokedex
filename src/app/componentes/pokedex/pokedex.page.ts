import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.page.html',
  styleUrls: ['./pokedex.page.scss'],
})
export class PokedexPage implements OnInit {
  detallePokemon:any = [];
  folder :string;
  constructor(private activatedRoute: ActivatedRoute, private pokeServ: PokemonService,) { }

  ngOnInit() {
    this.pokeServ.obtenerpokemon().subscribe((data:any) =>{
      this.detallePokemon = data;
    });


  }

}
