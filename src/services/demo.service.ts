import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {environment} from '../environments/environment';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class DemoService {
  constructor(private http: HttpClient) {
  }

  getBaseServices():Observable<Object> {
    return this.http.get(environment.baseServiceUrl);
  }
}
