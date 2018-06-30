import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class QueryService {

  private urlHistory: string;
  mydata: Array<object>;

  constructor(private http: HttpClient) { this.urlHistory = ""; }

  public setUrlHistoryObj(val: string): void {
    this.urlHistory = val;
  }

  public getUrlHistoryObj(): string {
    return this.urlHistory;
  }

  getData(path: string): Observable<any> {
    return this.http.get(path)
  }
}
