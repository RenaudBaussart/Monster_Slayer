import { Injectable, inject } from '@angular/core';
import { PnjCombatLogicService } from './pnj-combat-logic.service';
import { DeathService } from './death.service';
import { CombatlogService } from './combatlog.service';
import { log } from 'console';
import { timeout } from 'rxjs';

interface Entity {
  max: number;
  current: number;
}

@Injectable({
  providedIn: 'root',
})
export class CombatCoreService {
  pnjCombatLogicService = inject(PnjCombatLogicService);
  deathService = inject(DeathService);
  logService = inject(CombatlogService);

  playerHealth: Entity = {
    max: 100,
    current: 100,
  };

  pnjHealth: Entity = {
    max: 100,
    current: 100,
  };

  //player health function
  get PlayerMaxHealth(): number {
    return this.playerHealth.max;
  }
  get playerCurrentHealth(): number {
    return this.playerHealth.current;
  }
  get playerHealthPercentage(): number {
    if((this.playerHealth.current / this.playerHealth.max) * 100 < 0){
      return 0;
    }
    return (this.playerHealth.current / this.playerHealth.max) * 100;
  }
  UpdateCurrentPlayerHealth(newHealth: number) {
    this.playerHealth.current += newHealth;
  }

  //pnj health function
  get pnjMaxHealth(): number {
    return this.pnjHealth.max;
  }
  get pnjCurrentHealth(): number {
    return this.pnjHealth.current;
  }
  get pnjHealthPercentage(): number {
    if((this.pnjHealth.current / this.pnjHealth.max) * 100 < 0){
      return 0;
    }
    return (this.pnjHealth.current / this.pnjHealth.max) * 100;
  }

  UpdateCurrentPnjHealth(newHealth: number) {
    this.pnjHealth.current += newHealth;
  }

  resetgame(){
    this.pnjHealth.current = this.pnjHealth.max
    this.playerHealth.current = this.playerHealth.max
  }
  deathTester() {
    if(this.playerHealth.current <= 0){
      if(this.deathService.IsDead('Player')){
        
        this.resetgame();
      }
    }
    else if (this.pnjHealth.current <= 0)
    {
      if(this.deathService.IsDead('NPC')){
        this.resetgame()
      }
    }
  }

  combatHandler(actionType: string, actionValue: number){
    let actionOfPnj = this.pnjCombatLogicService.pnjAction();
    //handle error for both action of the player and pnj;
    if (typeof actionType !== 'string' ){
      alert('Error in the player action(go see in the player.components.ts)');
      return;
    }

    else if(actionOfPnj === "Error"){
      alert('Error in the pnj combat logic');
      return;
    }
    //handle special combat counter case
    else if(typeof actionOfPnj === 'object'){
      if(actionType === "Attack" && actionOfPnj.action ==='Counter'){
        this.logService.newLogs('you have attacked but the npc counter and do ' + actionValue +' damage !');
        this.UpdateCurrentPlayerHealth(actionValue);
      }

      else if( actionType === 'Counter' && actionOfPnj.action === 'Attack' ){
        this.logService.newLogs('the npc attack but you counter with' + actionOfPnj.value + ' damage !');
        this.UpdateCurrentPnjHealth(actionOfPnj.value);
      }

      else if(actionOfPnj.action === 'Counter' && actionType === 'Counter'){
        this.logService.newLogs('metapod intense look(you have both counter)')
      }
      //handle all other case
      else{
        //player action
        if(actionType === 'Heal'){
          this.logService.newLogs('You have heal yourself for ' + actionValue + ' !');

          this.UpdateCurrentPlayerHealth(actionValue)

          if(this.playerHealth.current > this.playerHealth.max){
            this.playerHealth.current = this.playerHealth.max;
          }
          
        }
        else if(actionType === 'Attack'){
          this.logService.newLogs('you have done ' + actionValue + ' damage to the ennemy !');

          this.UpdateCurrentPnjHealth(actionValue)
        }
        //pnj action
        if(actionOfPnj.action === 'Heal'){
          this.logService.newLogs('NPC heal himself for ' + actionOfPnj.value + ' !');

          this.UpdateCurrentPnjHealth(actionOfPnj.value);

          if(this.pnjHealth.current > this.pnjHealth.max){
            this.pnjHealth.current = this.pnjHealth.max;
          }
        }
        else if(actionOfPnj.action === 'Attack'){
          this.logService.newLogs('NPC done ' + actionOfPnj.value + ' damage to you !');
          this.UpdateCurrentPlayerHealth(actionOfPnj.value);
        }
      }
    }
    setTimeout(() => {
      this.deathTester();
    }, 1); 
  }
  
}
