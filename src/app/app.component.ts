import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  url = 'http://blog.miniasp.com/';
  imgurl = '/assets/images/logo.png';
  constructor() {
  }
  changeTitle($event: MouseEvent) {
    if ($event.altKey) {
      this.title  = 'The Will Will Web';
    }
    console.log($event);
  }
}
