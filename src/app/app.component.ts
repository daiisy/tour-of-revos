import { Component } from '@angular/core';

//  Remember that in JS position/order matters because SCOPE + WAY OF COMPILING
export class Revolutionaries {
  id: number;
  name: string;
};

// static array
const REVOS: Revolutionaries[] = [
  { id: 11, name: 'Pam Tau Lee' },
  { id: 12, name: 'Grace Lee Boggs' },
  { id: 13, name: 'Helen Xia' },
  { id: 14, name: 'Ben Lee' },
  { id: 15, name: 'Suzanne Lee' },
  { id: 16, name: 'Don Misumi' },
  { id: 17, name: 'Gordon' },
  { id: 18, name: 'Yi Zhou He' },
  { id: 19, name: 'Mah Wah' },
  { id: 20, name: 'May Louie' }
];


@Component({
  selector: 'app-root',
 //templateUrl: './app.component.html', // overrides template
  template: 
  
   `<h1>{{title}}</h1>

  <h2>My Revolutionary Heroes (;</h2>
  <ul class="heroes">
    <li *ngFor="let revo of revos" (click)="onSelect(revo)" [class.selected]="revo === selectedRev">
       <!-- each hero goes here -->
       <span class="badge">{{revo.id}}</span> {{revo.name}}
     </li>
   </ul>
   
   <div *ngIf="selectedRev">
   <h2>{{selectedRev.name}} details!</h2>
     <div><label>id: </label>{{selectedRev.id}}</div>
     <div>
       <label>name: </label> 
       <input [(ngModel)]="selectedRev.name" placeholder="name"> 
     </div>
   </div>
   `,
  
   styles: [`
   .selected {
     background-color: #CFD8DC !important;
     color: white;
   }
   .revos {
     margin: 0 0 2em 0;
     list-style-type: none;
     padding: 0;
     width: 15em;
   }
   .revos li {
     cursor: pointer;
     position: relative;
     left: 0;
     background-color: #EEE;
     margin: .5em;
     padding: .3em 0;
     height: 1.6em;
     border-radius: 4px;
   }
   .revos li.selected:hover {
     background-color: #BBD8DC !important;
     color: white;
   }
   .revos li:hover {
     color: #607D8B;
     background-color: #DDD;
     left: .1em;
   }
   .revos .text {
     position: relative;
     top: -3px;
   }
   .revos .badge {
     display: inline-block;
     font-size: small;
     color: white;
     padding: 0.8em 0.7em 0 0.7em;
     background-color: #607D8B;
     line-height: 1em;
     position: relative;
     left: -1px;
     top: -4px;
     height: 1.8em;
     margin-right: .8em;
     border-radius: 4px 0 0 4px;
   }
 `]

  //styleUrls: ['./app.component.css'] //overrides styles
})




export class AppComponent {
  title = 'Tour of Revolutionaries';
  revos = REVOS;
  selectedRev: Revolutionaries;
  
  onSelect(revo: Revolutionaries): void {
     this.selectedRev = revo;
  }
};

