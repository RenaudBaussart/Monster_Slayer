import { Injectable, inject } from '@angular/core';
import { CombatlogService } from './combatlog.service';
@Injectable({
  providedIn: 'root'
})
export class DeathService {
  logService = inject(CombatlogService);
  isSomeoneDead = false
  get checkIfDead(){
    return this.isSomeoneDead;
  }
  IsDead(who : string){
    this.isSomeoneDead = true;
    this.logService.newLogs(who + ' is dead')
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
