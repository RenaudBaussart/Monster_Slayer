import { Injectable } from '@angular/core';

interface Entity {
  max: number;
  current: number;
}

@Injectable({
  providedIn: 'root'
})
export class CombatCoreService {

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
    return (this.playerHealth.current / this.playerHealth.max) * 100;
  }
  //pnj health function
  get pnjMaxHealth(): number {
    return this.pnjHealth.max;
  }
  get pnjCurrentHealth(): number {
    return this.pnjHealth.current;
  }
  get pnjHealthPercentage(): number {
    return (this.pnjHealth.current / this.pnjHealth.max) * 100;
  }

}
