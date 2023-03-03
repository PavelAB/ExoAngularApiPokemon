import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { map} from 'rxjs/operators';

import { pokemon } from '../../shared/models/pokemon';


@Injectable({
  providedIn: 'root'
})
export class PokeService {

  constructor(private _httpClient : HttpClient) { }
 
 
  //Pipes exemples
  GetPokemon(id : number): Observable<pokemon>{
    return this._httpClient.get<pokemon>('https://pokeapi.co/api/v2/pokemon/'+id)
    .pipe(map(x=>
      {
      return{...x,
        height : x.height*10,
        weight : x.weight*0.1
            }
      }
    ))
  }


}