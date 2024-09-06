import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <button class="hello" (click)="visible=!visible">invert</button>
  <button (click)="toggle()">toggle</button>
  <h1 *ngIf="visible"> Hello World</h1>
  <li
    [hidden]="!visible"
    *ngFor="let user of users"
  >{{user}}</li>
   `,
  styles: [`.hello { background-color : red }`]
})
export class AppComponent {
  visible = true
  users = ['fabio', 'lorenzo', 'Simone']
  toggle() {
      this.visible = !this.visible
  }
}
