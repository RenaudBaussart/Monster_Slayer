import {
  Component,
  inject,
  numberAttribute,
  ViewChild,
  ElementRef,
  Renderer2,
} from '@angular/core';
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
  @ViewChild('playerModel', { static: false }) playerModel!: ElementRef;

  renderer = inject(Renderer2);
  deathService = inject(DeathService);
  combatCoreService = inject(CombatCoreService);
  resetGif(url: string) {
    const element = this.playerModel.nativeElement;
    const parent = element.parentNode;
    this.renderer.removeChild(parent, element);

    const newElement = this.renderer.createElement('div');
    this.renderer.setStyle(newElement, 'background-image', `url(${url})`);
    this.renderer.addClass(newElement, 'player-model-idle');
    this.renderer.appendChild(parent, newElement);

    // Update playerModel to the new element
    this.playerModel = new ElementRef(newElement);
  }

  attack() {
    this.resetGif('/res/player-model/Fantasy-Warrior/Sprites/Attack1_hero.gif');
    setTimeout(() => {
      console.log('Delayed for 1 second.');
      this.resetGif('/res/player-model/Fantasy-Warrior/Sprites/Idle_hero.gif');
      this.combatCoreService.combatHandler('Attack', -20);
    }, 1200);
  }
  counter() {
    console.log('counter');
    this.combatCoreService.combatHandler('Counter', 0);
  }
  heal() {
    console.log('Heal');
    this.combatCoreService.combatHandler('Heal', 20);
  }
}
