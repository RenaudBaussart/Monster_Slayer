import { Component } from '@angular/core';
import { PlayerHealthBarComponent } from '../player-health-bar/player-health-bar.component';

@Component({
  selector: 'app-player',
  standalone: true,
  imports: [PlayerHealthBarComponent],
  templateUrl: './player.component.html',
  styleUrl: './player.component.scss',
})
export class PlayerComponent {
  attack() {
    console.log('attack');
    // Ajouter l'action d'attaque
  }
}
