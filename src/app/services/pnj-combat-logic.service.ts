import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PnjCombatLogicService {
  randomNum(num : number){
    return Math.floor(Math.random() * num);
  }
  pnjAction(){
    let actionType: number = Math.floor(Math.random() * 100); ;

    if(actionType <= 50){
      return {action: 'Attack', value : -this.randomNum(10)};
    }

    else if(actionType > 50 && actionType <= 80){
      return {action: 'Heal', value : this.randomNum(10)};
    }

    else if(actionType > 80 && actionType <= 100) {
      return {action: 'Counter', value : 0};
    }
    else{return 'Error';}
  }
  
  constructor() { }
}
