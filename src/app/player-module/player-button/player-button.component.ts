import { Component, inject, Output, EventEmitter } from '@angular/core';
import { CombatCoreService } from '../../services/combat-core.service';
import { DeathService } from '../../services/death.service';

@Component({
  selector: 'app-player-button',
  templateUrl: './player-button.component.html',
  styleUrl: './player-button.component.scss',
})
export class PlayerButtonComponent {
  @Output() buttonClicked = new EventEmitter<any>();
  deathService = inject(DeathService);
  combatCoreService = inject(CombatCoreService);

  buttonClickedhandler(methodName: string) {
    this.buttonClicked.emit(methodName);
  }
  randomNum(num: number) {
    return Math.floor(Math.random() * num);
  }
  attack(methodName: string) {
    this.buttonClicked.emit(methodName);
  }
  counter(methodName: string) {
    this.buttonClicked.emit(methodName);
  }
  heal(methodName: string) {
    this.buttonClicked.emit(methodName);
  }
}
