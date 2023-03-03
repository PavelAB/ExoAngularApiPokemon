import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObservableService {

  constructor() { }

  monSubject : Subject<string> = new Subject<string>

  sendMessage(message:string){

    console.log("J'emmet un message");
    
    this.monSubject.next(message)

    
  }

  sendError(message : string){
    this.monSubject.error(message)

  }

  sendComplete(){
    this.monSubject.complete()
  }

}