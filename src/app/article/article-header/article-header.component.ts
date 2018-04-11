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

  @Output()
  titleChanged = new EventEmitter<any>();

  isEdit = false;
  newTitle = '';

  constructor() { }

  doEdit(title) {
    this.newTitle = title;
    this.titleChanged.emit({ id: this.item.id, title: title });
  }

  deleteArticle() {
    this.delete.emit(this.item);
  }

  ngOnInit() {
    this.newTitle = this.item.title;
  }

  ngOnDestroy() {

  }

}
