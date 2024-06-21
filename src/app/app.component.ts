import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CombatlogComponent } from './components/combatlog/combatlog.component';
import { PlayerModule } from './player-module/player.module';
import { PnjModule } from './pnj-module/pnj.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CombatlogComponent,
    PlayerModule,
    PnjModule

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'monster-slayer';
}
