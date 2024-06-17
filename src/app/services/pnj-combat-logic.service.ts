import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PnjCombatLogicService {

  pnjAction(){
    let actionType: number = Math.floor(Math.random() * 3); ;
    console.log (actionType)

    switch(actionType){
      
      case 0: 
        return {action: 'Attack', value : -10};
      
      case 1:
      return {action: 'Heal', value : 10};
      
      case 2:
      return {action: 'Counter', value : 0};
      
      default: 
        return 'Error';
    }
  }

  constructor() { }
}
