import { Component, OnInit, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-article-header',
  templateUrl: './article-header.component.html',
  styleUrls: ['./article-header.component.css']
})
export class ArticleHeaderComponent implements OnInit, OnDestroy {

  @Input()
  item;

  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy() {

  }

}
