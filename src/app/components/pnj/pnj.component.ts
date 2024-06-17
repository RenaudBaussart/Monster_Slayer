import { Component } from '@angular/core';
import { PnjHealthBarComponent } from '../pnj-health-bar/pnj-health-bar.component';

@Component({
  selector: 'app-pnj',
  standalone: true,
  imports: [PnjHealthBarComponent],
  templateUrl: './pnj.component.html',
  styleUrl: './pnj.component.scss',
})
export class PnjComponent {}
