import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-article-header',
  templateUrl: './article-header.component.html',
  styleUrls: ['./article-header.component.css']
})
export class ArticleHeaderComponent implements OnInit, OnDestroy {

  @Input()
  item;

  @Output()
  delete = new EventEmitter<any>();

  constructor() { }

  deleteArticle() {
    this.delete.emit(this.item);
  }

  ngOnInit() {
  }

  ngOnDestroy() {

  }

}
