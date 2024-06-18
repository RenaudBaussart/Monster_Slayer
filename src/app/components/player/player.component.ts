import { Component, inject} from '@angular/core';
import { PlayerHealthBarComponent } from '../player-health-bar/player-health-bar.component';
import { CombatCoreService } from '../../services/combat-core.service';
import { DeathService } from '../../services/death.service';
import { PlayerButtonComponent } from '../player-button/player-button.component';

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
}
