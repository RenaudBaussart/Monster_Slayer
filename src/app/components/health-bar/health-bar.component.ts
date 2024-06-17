import { Component } from '@angular/core';

@Component({
  selector: 'app-health-bar',
  standalone: true,
  imports: [],
  templateUrl: './health-bar.component.html',
  styleUrl: './health-bar.component.scss'
})
export class HealthBarComponent {
  public totalHealth: number = 100
  public actualHealth: number = this.totalHealth

  set TotalHealth(newTotalHealth: number){
    this.totalHealth = newTotalHealth;
  }
  get TotalHealth(){
    return this.totalHealth;
  }
}
