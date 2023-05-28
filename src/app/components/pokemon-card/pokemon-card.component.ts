import { Component, ViewChild } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Pokemon } from 'src/app/models/pokemon';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent {
pokemons: any[]=[];
favouritePokemons: Pokemon[] = [];

constructor(private pokemonService: PokemonService, private router: Router,
  private _snackBar: MatSnackBar, private http: HttpClient){
  }

ngOnInit(): void{
  this.getPokemon();
}

addPokemonToFavourites(pokemon: Pokemon){
  //this.favouritePokemons.push(pokemon);
  this.pokemonService.addFavorite(pokemon).subscribe(
    (response: Pokemon) => {
      this.favouritePokemons.push(response);
      this.openSnackBar('Pokemon agregado a favoritos');
    },
    (error) => {
      console.log(error);
    }
  );
}

getPokemon(){
  let pokemonData;
  for(let i = 10; i <= 19; i++){
    this.pokemonService.getPokemon(i).subscribe(
      res=>{
        const pokemon = res[0];
        const species = res[1];
        pokemonData={
          position: i,
          image: pokemon.sprites.front_default,
          name: pokemon.name,
          shape: species.shape.name,
          color: species.color.name,
          generation: species.generation.name,
          habitat: species.habitat.name
        };
        this.pokemons.push(pokemonData);
        console.log(pokemonData);
      },
      err=>{
        console.log(err);
      }
    )
  }
}

openSnackBar(message:string){
  this._snackBar.open(message, 'Deshacer',{
    duration: 2000
  });
}

}
