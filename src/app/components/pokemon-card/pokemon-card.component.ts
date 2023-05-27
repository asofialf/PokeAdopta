import { Component, ViewChild } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent {
pokemons: any[]=[];

constructor(private pokemonService: PokemonService, private router: Router){}

ngOnInit(): void{
  this.getPokemon();
}

getPokemon(){
  let pokemonData;
  for(let i = 1; i <= 10; i++){
    this.pokemonService.getPokemon(i).subscribe(
      res=>{
        pokemonData={
          position: i,
          image: res.sprites.front_default,
          name: res.name
        };
        this.pokemons.push(pokemonData);
      },
      err=>{
        console.log(err);
      }
    )
  }
}
}
