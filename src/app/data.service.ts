import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {
  private goals = new BehaviorSubject<any>(['Land a job @ Apple','Loose 10 pounds']);
  goal = this.goals.asObservable();

  constructor() { }


  changeGoal(goal){
    this.goals.next(goal);
  }

}
