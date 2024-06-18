import { Injectable, inject } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class DeathService {
  isSomeoneDead = false
  get checkIfDead(){
    return this.isSomeoneDead;
  }
  IsDead(who : string){
    this.isSomeoneDead = true;
    console.log(who + ' is dead');
    if(confirm(who +'is dead. do you whant to play one more')){
      this.isSomeoneDead = false
      return true;
    }
    else{
      return false;
    }
  }
  constructor() { }
}
