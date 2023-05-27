import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  baseURL: string = environment.baseURL;
  constructor(private http: HttpClient) { }
  getPokemon(index: number){
    const pokemonRequest = this.http.get<any>(`${this.baseURL}/pokemon/${index}`);
    const speciesRequest = this.http.get<any>(`${this.baseURL}/pokemon-species/${index}`);
    return forkJoin([pokemonRequest, speciesRequest]);
    //forkJoin es un operador de combinación de observables en la biblioteca RxJS 
    //que te permite combinar varios observables y esperar a que todos ellos emitan 
    //un valor antes de continuar. Una vez que todos los observables hayan emitido un valor, 
    //forkJoin emitirá un solo valor que contiene todos los valores emitidos en el mismo orden en que se pasaron los observables.
  }
}
