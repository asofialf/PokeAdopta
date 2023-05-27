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
}
