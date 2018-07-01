import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CommonApiService {

  constructor(private http: HttpClient) { }

  postData(url , formData) {
    return this.http.post(url, formData)
            .map((response: Response) => {
              return response;
            }).catch( this.handleError );
  }

  handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json() || 'Server error');
  }
}
