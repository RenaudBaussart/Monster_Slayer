import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AttackBtnComponent } from './components/attack-btn/attack-btn.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AttackBtnComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'monster-slayer';
}
