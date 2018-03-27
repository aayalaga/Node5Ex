import { Component, OnInit } from '@angular/core';
import {trigger, style, transition, animate, keyframes, query, stagger} from '@angular/animations'
import { DataService} from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('goals',[
      transition('* => *', [
          query(':enter', style({opacity:0}), {optional: true}),
          query(':enter', stagger('300ms',[
            animate('0.6s ease-in', keyframes([
              style({opacity:0, transform: 'translateY(-75%)', offset:0}),
              style({opacity:0.5, transform: 'translateY(35px)', offset:0.3}),
              style({opacity:1, transform: 'translateY(0)', offset:1})
            ]))
          ]), {optional: true}),


          query(':leave', stagger('300ms',[
            animate('0.6s ease-in', keyframes([
              style({opacity:1, transform: 'translateY(0)', offset:0}),
              style({opacity:0.5, transform: 'translateY(35px)', offset:0.3}),
              style({opacity:0, transform: 'translateY(-75%)', offset:1})
            ]))
          ]), {optional: true})
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {

  itemCount: number; 
  btnText: string = "Add an item";
  goalText: string = "My first life goal..."
  goals=[]; //This is empty because now it's done using the service ['Fuck my gorgeous wife','Land a job @ Apple','Fuck my wife again ;)'];
            // Now is is declared in -- private goals = new BehaviorSubject<any>(['Land a job @ Apple','Loose 10 pounds']); declared in data.service.ts
  
  // We use dependency injection to create an instance of DataService
            constructor(private _data: DataService) { }

  ngOnInit() {
      
      this._data.goal.subscribe(res => this.goals = res );
      this.itemCount = this.goals.length;
      this._data.changeGoal(this.goals);
  }

  addItem()
  {
    this.goals.push(this.goalText);
    this.goalText = '';
    this.itemCount = this.goals.length; 
    this._data.changeGoal(this.goals);

  }
  removeItem(indexFucker)
  {
    this.goals.splice(indexFucker,1);
    this._data.changeGoal(this.goals);
  }


}
