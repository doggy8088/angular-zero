import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {

  data;

  constructor(private http: HttpClient) {
    http.get('http://localhost:4200/api/articles.json')
        .subscribe(result => {
          this.data = result;
        });
  }

  run() {
    console.log('DataService');
  }

  doDelete(item) {
    this.data = this.data.filter((v) => {
      return v.id !== item.id;
    });
  }

  doModify(post: any) {
    console.log(post);
    this.data = this.data.map((item) => {
      if (item.id == post.id) {
        return Object.assign({}, item, post);
      }
      return item;
    })
  }

}
