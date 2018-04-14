import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {

  constructor(private http: HttpClient) {
  }

  getData() {
    return this.http.get('http://localhost:4200/api/articles.json')
  }
  run() {
    console.log('DataService');
  }

  doDelete(item) {
    return this.http.delete('http://localhost:4200/api/articles/'+item.id);
  }

  doModify(post: any) {
    return this.http.put('http://localhost:4200/api/articles/'+post.id, post);
  }

}
