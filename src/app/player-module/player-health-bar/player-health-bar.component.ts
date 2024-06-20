import { Component, inject } from '@angular/core';
import { CombatCoreService } from '../../services/combat-core.service';

@Component({
  selector: 'app-player-health-bar',
  templateUrl: './player-health-bar.component.html',
  styleUrl: './player-health-bar.component.scss'
})
export class PlayerHealthBarComponent {
  combatCoreService = inject(CombatCoreService);
}
