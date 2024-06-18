import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CombatlogService {
  logsArray: string[] = ['test'];

  newLogs(log: string){
    if (this.logsArray.length > 9){
      this.logsArray.pop();
    }
    this.logsArray.unshift(log);
  }
}
