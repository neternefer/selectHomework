import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http"
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly baseUrl: string = "https://randomuser.me/api";
  
  getGenders() {
    return ["Male", "Female", "Other"];
  }
  
  constructor(private http: HttpClient) { 

  }

  getRandomUser(): Observable<any>{
    return this.http.get<any>(this.baseUrl + "/");
  }
}
