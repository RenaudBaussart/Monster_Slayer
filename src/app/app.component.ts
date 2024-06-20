import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CombatlogComponent } from './components/combatlog/combatlog.component';
import { PlayerModule } from './player-module/player.module';
import { PnjModule } from './pnj-module/pnj.module';
import { PlayerComponent } from './player-module/player/player.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CombatlogComponent, PlayerModule, PnjModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'monster-slayer';

  constructor(private player: PlayerComponent) {}
  handleButtonClick(methodName: string) {
    switch (methodName) {
      case 'attack':
        this.player.attack();
        console.log('attack');
        break;

      case 'counter':
        this.player.counter();
        console.log('counter');
        break;

      case 'heal':
        this.player.heal();
        console.log('heal');
        break;
    }
  }
}
