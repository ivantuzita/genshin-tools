import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class FetcherService {

  private baseUrl:string = "https://localhost:7093/api/dashboard/"
  constructor(private http : HttpClient) { }

  getUserCharacters(id:any){
    return this.http.get<any>(`${this.baseUrl}characters/${id}`)
  }

  getUserWeapons(id:any){
    return this.http.get<any>(`${this.baseUrl}weapons/${id}`)
  }

}
