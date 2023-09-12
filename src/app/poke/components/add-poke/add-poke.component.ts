import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Pokemon } from '../../interfaces/pokemon.interface';

@Component({
  selector: 'app-add-poke',
  templateUrl: './add-poke.component.html',
  styleUrls: ['./add-poke.component.css']
})

export class AddPokeComponent {

  @Output() onNewPokemon: EventEmitter<Pokemon> = new EventEmitter();

  formPoke: any;

  constructor(private fb:FormBuilder){
    this.formPoke = this.fb.group({
      name: ['']
    })

  }

  addPokemon(form :Pokemon){
    console.log(form)

    if(form.name.length === 0) return

    this.onNewPokemon.emit(form)
  }

}
