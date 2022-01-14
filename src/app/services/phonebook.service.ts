import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Phonebook } from '../Phonebook';

@Injectable({
  providedIn: 'root'
})
export class PhonebookService {

  apiUrl:string = '/api/telefonkonyv'; //még hiányzik a server domain

  constructor(private http:HttpClient){}

  getPhonebook():Observable<Phonebook[]>{
      return this.http.get<Phonebook[]>(this.apiUrl);
  }
}
