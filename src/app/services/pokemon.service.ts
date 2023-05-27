import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  baseURL: string = environment.baseURL;
  constructor(private http: HttpClient) { }
  getPokemon(index: any){
    console.log(this.baseURL);
    return this.http.get<any>(`${this.baseURL}/pokemon/${index}`);
  }
}
