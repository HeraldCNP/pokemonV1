import { Component } from '@angular/core';
import { Pokemon } from '../../interfaces/pokemon.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  pokemons: Pokemon[] = [
    {
      "name": "bulbasaur",
      "url": "https://pokeapi.co/api/v2/pokemon/1/"
    },
    {
      "name": "ivysaur",
      "url": "https://pokeapi.co/api/v2/pokemon/2/"
    },
    {
      "name": "venusaur",
      "url": "https://pokeapi.co/api/v2/pokemon/3/"
    }
  ]

  onNewPokemon(Pokemon: Pokemon):void{
    console.log(Pokemon);
    this.pokemons.push(Pokemon);
  }

  onDeletePokemon(index:number){
    this.pokemons.splice(index, 1);
  }
}


