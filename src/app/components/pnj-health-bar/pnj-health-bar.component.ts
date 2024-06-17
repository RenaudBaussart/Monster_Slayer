import { Component , inject } from '@angular/core';
import { CombatCoreService } from '../../services/combat-core.service';

@Component({
  selector: 'app-pnj-health-bar',
  standalone: true,
  imports: [],
  templateUrl: './pnj-health-bar.component.html',
  styleUrl: './pnj-health-bar.component.scss'
})
export class PnjHealthBarComponent {
  combatCoreService = inject(CombatCoreService);
}
  
