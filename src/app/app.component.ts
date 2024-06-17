import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PnjHealthBarComponent } from './components/pnj-health-bar/pnj-health-bar.component';
import { PlayerHealthBarComponent } from './components/player-health-bar/player-health-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,PnjHealthBarComponent, PlayerHealthBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'monster-slayer';
}
