import { Component } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
    trigger('clickedDiv', [
      state('start', style({
        backgroundColor: 'blue',
        width: '150px',
        height: '150px',
        marginLeft: '50px'
      })),
      state('end', style({
        backgroundColor: 'red',
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        marginLeft: '50px'
      })),
      transition('start => end', animate(1500)),
      transition('end => start', animate('800ms 0.5s ease-out'))
    ])
  ]
})
export class AppComponent {
  clickedDivState = 'start';

  changeDivState() {
    this.clickedDivState = 'end';
    setTimeout(() => {
      this.clickedDivState = 'start';
    }, 3000);
  }
}
