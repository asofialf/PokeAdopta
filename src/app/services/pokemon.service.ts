import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, retry, throwError} from 'rxjs';
import { forkJoin } from 'rxjs';
import { Pokemon } from '../models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  baseURL: string = environment.baseURL;
  jsonURL: string = environment.jsonURL;

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Default Error Handling
      console.log(
        `An error occurred ${error.status}, body was: ${error.error}`
      );
    } else {
      // Unsuccessful Response Error Code returned from Backend
      console.log(
        `Backend returned code ${error.status}, body was: ${error.error}`
      );
    }
    // Return Observable with Error Message to Client
    return throwError(
      'Something happened with request, please try again later.'
    );
  }

  getPokemon(index: number){
    const pokemonRequest = this.http.get<any>(`${this.baseURL}/pokemon/${index}`);
    const speciesRequest = this.http.get<any>(`${this.baseURL}/pokemon-species/${index}`);
    return forkJoin([pokemonRequest, speciesRequest]);
    //forkJoin es un operador de combinación de observables en la biblioteca RxJS 
    //que te permite combinar varios observables y esperar a que todos ellos emitan 
    //un valor antes de continuar. Una vez que todos los observables hayan emitido un valor, 
    //forkJoin emitirá un solo valor que contiene todos los valores emitidos en el mismo orden en que se pasaron los observables.
  }

  addFavorite(data: any):Observable<Pokemon>{
    return this.http
    .post<Pokemon>(this.jsonURL, JSON.stringify(data), this.httpOptions)
    .pipe(retry(2), catchError(this.handleError));
  }

  deleteFavourite(id: string):Observable<Pokemon>{
    return this.http
      .delete<Pokemon>(`${this.jsonURL}/${id}`, this.httpOptions )
      .pipe(retry(2), catchError(this.handleError));
  }
}
