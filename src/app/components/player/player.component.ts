import { Component, inject, numberAttribute } from '@angular/core';
import { PlayerHealthBarComponent } from '../player-health-bar/player-health-bar.component';
import { CombatCoreService } from '../../services/combat-core.service';
import { DeathService } from '../../services/death.service';

@Component({
  selector: 'app-player',
  standalone: true,
  imports: [PlayerHealthBarComponent],
  templateUrl: './player.component.html',
  styleUrl: './player.component.scss',
})

export class PlayerComponent {
  deathService = inject(DeathService);
  combatCoreService = inject(CombatCoreService);
  attack() {
    console.log('attack');
    this.combatCoreService.combatHandler('Attack', -20);
  }
  counter(){
    console.log('counter');
    this.combatCoreService.combatHandler('Counter', 0);
  }
  heal(){
    console.log('Heal');
    this.combatCoreService.combatHandler('Heal', 20);
  }
}
