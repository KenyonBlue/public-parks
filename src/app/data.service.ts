import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPark } from './park';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('https://reqres.in/api/users');
  }

 

  // getParks(): Observable <IPark[]> {
  //   return this.http.get<IPark[]>('https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=Eu4zH11ep0pdySNdCFbieT0fI5ua5ma16DpGBGm6'
  //   )
  // }

  getParks(): Observable <IPark[]> {
    return this.http.get<IPark[]>('https://developer.nps.gov/api/v1/parks?sort=fullname&api_key=Eu4zH11ep0pdySNdCFbieT0fI5ua5ma16DpGBGm6'
    )
  }

// above this line works 

 
}


// Eu4zH11ep0pdySNdCFbieT0fI5ua5ma16DpGBGm6
// above line is the NPS api key 