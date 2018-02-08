import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  template: `
  <h2>Single Car</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, maiores.</p>
  `,
  // styleUrls: ['./car.component.css']
  styles:[`
    h2 {
        color: aqua;
    }
  `]
})
export class CarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
