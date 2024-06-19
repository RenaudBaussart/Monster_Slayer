import { Component, inject } from '@angular/core';
import { CombatCoreService } from '../../services/combat-core.service';
import { DeathService } from '../../services/death.service';

@Component({
  selector: 'app-player-button',
  templateUrl: './player-button.component.html',
  styleUrl: './player-button.component.scss'
})
export class PlayerButtonComponent {
  deathService = inject(DeathService);
  combatCoreService = inject(CombatCoreService);
  attack() {
    console.log('attack');
    this.combatCoreService.combatHandler('Attack', -20);
  }
  counter() {
    console.log('counter');
    this.combatCoreService.combatHandler('Counter', 0);
  }
  heal() {
    console.log('Heal');
    this.combatCoreService.combatHandler('Heal', 20);
  }
}