import { Component, Input } from '@angular/core';
import { Revolutionaries } from './revolutionaries';

@Component({
    selector:"revo-detail",
    template: 
    `<div *ngIf="revo">
    <h2>{{revo.name}} details!</h2>
      <div><label>id: </label>{{revo.id}}</div>
      <div>
        <label>name: </label> 
        <input [(ngModel)]="revo.name" placeholder="name"> 
      </div>
    </div>`
})

export class RevoDetailComponent{
    @Input() revo: Revolutionaries;
}