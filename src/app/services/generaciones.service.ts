import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GeneracionesService {
  base = "https://pokeapi.co/api/v2/pokemon"

  constructor(private http: HttpClient) { }

  obtenerGen1(){
    return this.http.get(this.base + "?limit=151")
  }
  obtenerGen2(){
    return this.http.get(this.base + "?offset=151&limit=100")
  }
  obtenerTodos(){
    return this.http.get(this.base  + "?limit=898")
  }
}


