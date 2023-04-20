import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div class="hello">Sesso {{gender==='m'? 'Uomo':'Donna'}}</div>`,
  styles: [`.hello { background-color : red }`]
})
export class AppComponent {
  title = 'myapp';
  gender ='m';
}
