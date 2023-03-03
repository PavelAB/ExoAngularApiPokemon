import { Component } from '@angular/core';
import { pokemon } from '../shared/models/pokemon';
import { PokeService } from '../shared/services/poke.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  valueInput!:number;
  monMessage : string = '';
  monPokemon! : pokemon 
  
  constructor (private _pokeService: PokeService){}

  searchPikachu(){
    this.monMessage=''
    this._pokeService.GetPokemon(this.valueInput).subscribe({
      next:(data)=>{
        console.log(data);
        this.monPokemon=data;
        
      },
      error:(err)=>{  
        console.log(err);
        
        this.monMessage='Erreure recue : '+err.message
        

      },
      complete:()=>{
        console.log('complete');
        
      }
    })
  }
}
