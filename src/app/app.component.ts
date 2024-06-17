import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HealthBarComponent } from './components/health-bar/health-bar.component';
import { PlayerComponent } from './components/player/player.component';
import { PnjComponent } from './components/pnj/pnj.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HealthBarComponent, PlayerComponent, PnjComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'monster-slayer';
}
