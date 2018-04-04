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
  wordcount = 0;

  constructor() {
  }
  changeTitle(altKey: boolean) {
    if (altKey) {
      this.title  = 'The Will Will Web';
    }
  }
  keywordChanges(keyword: string) {
    this.wordcount = keyword.length;
  }
  keywordReset(input: HTMLInputElement) {
    input.value = '';
    this.wordcount = 0;
  }
}
