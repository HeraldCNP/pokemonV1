import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pokemon } from '../../interfaces/pokemon.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input() pokemonList : Pokemon[] = []

  @Output() onDelete : EventEmitter<number> = new EventEmitter();

  onDeletePokemon(index:number){
    this.onDelete.emit(index);
  }


}
