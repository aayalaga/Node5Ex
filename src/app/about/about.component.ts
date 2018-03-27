import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';      // This will give us access to the route parameters
import { Router } from '@angular/router';             // Add this
import { DataService} from '../data.service';
//This section is called decorators, it is used to define where the template and styles are located
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  goals : any;
  // To have access to the parameters it is neccesary to create an instance of ActivatedRoute in the constructor 
  // This is called DEPENDENCY INJECTION
  constructor(private route: ActivatedRoute, private router: Router, private _data: DataService) { 
    this.route.params.subscribe(res => console.log(res.id));

  }

  ngOnInit() {
    this._data.goal.subscribe(res => this.goals = res)

  }

//Component based routing navigation
  sendMeHome() {
    this.router.navigate(['']);
  }

}
