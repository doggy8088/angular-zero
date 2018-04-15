import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  counter = 0;
  data$: Observable<any>;

  constructor(public datasvc: DataService) {
  }

  ngOnInit() {
    this.data$ = this.datasvc.getData();
  }

}
