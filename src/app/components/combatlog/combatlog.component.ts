import { Component, inject } from '@angular/core';
import { CombatlogService } from '../../services/combatlog.service';
import { NgFor } from '@angular/common';



@Component({
  selector: 'app-combatlog',
  standalone: true,
  imports: [NgFor],
  templateUrl: './combatlog.component.html',
  styleUrl: './combatlog.component.scss'
})
export class CombatlogComponent {
  logService = inject(CombatlogService);
  

}
