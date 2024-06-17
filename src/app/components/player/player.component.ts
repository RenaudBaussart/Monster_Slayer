import { Component, inject } from '@angular/core';
import { PlayerHealthBarComponent } from '../player-health-bar/player-health-bar.component';
import { CombatCoreService } from '../../services/combat-core.service';

@Component({
  selector: 'app-player',
  standalone: true,
  imports: [PlayerHealthBarComponent],
  templateUrl: './player.component.html',
  styleUrl: './player.component.scss',
})
export class PlayerComponent {
  combatCoreService = inject(CombatCoreService);
  attack() {
    console.log('attack');
    this.combatCoreService.UpdateCurrentPlayerHealth(-10);
  }
}
