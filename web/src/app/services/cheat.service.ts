import {Cheat} from '../models/cheat';
import {HttpHeaders, HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class CheatService {

  constructor(private http: HttpClient) {}

  // Uses the Cheat model to create a new Cheat
  create(cheatInfo: any) {
    return new Cheat(cheatInfo);
  }

  save(cheat: any): Observable<Cheat> {
    return this.http
      .post('api/cheat', JSON.stringify(cheat), httpOptions).map((res: Response) => new Cheat(res));
  }

  update(cheat: Cheat): Observable<Cheat> {
    return this.http
      .put('api/cheat/' + cheat.id, JSON.stringify(cheat), httpOptions).map((res: Response) => new Cheat(res));
  }

  getById(id: number): Observable<Cheat> {
    return this.http.get('api/cheat/' + id).map((res: Response) => new Cheat(res));
  }

  getAll(): Observable<Cheat[]> {
    return this.http.get<Cheat[]>('api/cheat');
  }

  deleteById(id: number): Observable<Cheat> {
    return this.http.delete<Cheat>('api/cheat/' + id);
  }

}
