import { Component } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Pokemon } from 'src/app/models/pokemon';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-favorites-card',
  templateUrl: './favorites-card.component.html',
  styleUrls: ['./favorites-card.component.css']
})
export class FavoritesCardComponent {
  pokemons: any[]=[];

  constructor(private pokemonService: PokemonService, private router: Router,
    private _snackBar: MatSnackBar, private http: HttpClient){
  }

  ngOnInit(): void{
    this.getFavorites();
  }

  getFavorites(){
    this.pokemonService.getFavorites().subscribe((response: any)=>{
      this.pokemons = response;
    });
  }
  deleteFavorite(id: string){
    this.pokemonService.deleteFavourite(id).subscribe((response: any)=>{
      this.pokemons = response;
    })
  }
  reloadPage() {
    location.reload();
  }
}
