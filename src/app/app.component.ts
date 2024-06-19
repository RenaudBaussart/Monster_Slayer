import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PnjHealthBarComponent } from './components/pnj-health-bar/pnj-health-bar.component';
import { PnjComponent } from './components/pnj/pnj.component';
import { CombatlogComponent } from './components/combatlog/combatlog.component';
import { PlayerModule } from './player-module/player.module';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    PnjHealthBarComponent,
    PnjComponent,
    CombatlogComponent,
    PlayerModule

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'monster-slayer';
}
