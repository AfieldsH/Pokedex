import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PokemonService  {
  base = "https://pokeapi.co/api/v2/pokemon/"

  constructor(private http: HttpClient) { }

  obtenerpokemon(name:string){
    return this.http.get(this.base + name)
  }
}
