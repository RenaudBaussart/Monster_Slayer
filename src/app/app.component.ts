import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PnjHealthBarComponent } from './components/pnj-health-bar/pnj-health-bar.component';
import { PlayerHealthBarComponent } from './components/player-health-bar/player-health-bar.component';
import { PlayerComponent } from './components/player/player.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PnjHealthBarComponent, PlayerHealthBarComponent, PlayerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'monster-slayer';
}
