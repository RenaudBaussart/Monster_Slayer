import { Injectable } from '@angular/core';
import { Action } from 'rxjs/internal/scheduler/Action';

@Injectable({
  providedIn: 'root'
})
export class PnjCombatLogicService {

  pnjAction(){
    let actionType: number = (Math.random() * 3) ;
    
    switch(actionType){
      
      case 0: 
        return {action: 'Attack', value : 10};
      
        case 1:
        return {action: 'heal', value : 10};
      
        case 2:
        return {action: 'Counter', value : 0};
      
        default: 
      return 'Error'
    }
  }

  constructor() { }
}
