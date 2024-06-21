import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerHealthBarComponent } from './player-health-bar/player-health-bar.component';
import { PlayerComponent } from './player/player.component';
import { CombatCoreService } from '../services/combat-core.service';
import { DeathService } from '../services/death.service';

@NgModule({
  providers: [CombatCoreService, DeathService],
  declarations: [
    PlayerComponent,
    PlayerHealthBarComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [PlayerComponent, PlayerHealthBarComponent]
})
export class PlayerModule { }
