import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerButtonComponent } from './player-button/player-button.component';
import { PlayerHealthBarComponent } from './player-health-bar/player-health-bar.component';
import { CombatCoreService } from '../services/combat-core.service';
import { DeathService } from '../services/death.service';

@NgModule({
  providers: [CombatCoreService, DeathService],
  declarations: [
    PlayerButtonComponent,
    PlayerHealthBarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PlayerModuleModule { }
