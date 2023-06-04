import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class APIServiceService {
  vedioInformation="https://list.ly/api/v4/search/video?q=basketball";
  constructor(private _http:HttpClient) { }

  GetAll():Observable<any>{
    return this._http.get<any>(this.vedioInformation);
  }

}
