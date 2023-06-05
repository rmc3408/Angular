import { Injectable } from '@angular/core';
import { animalsDatatype } from '../components/list/list.component';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AnimalsService {
  private apiUrl = 'http://localhost:3000/animals'

  constructor(private http: HttpClient) {}

  remove(id: number) {
    this.http.delete(this.apiUrl+ "/" + id).subscribe()
  }

  getAll(): Observable<animalsDatatype[]> {
    return this.http.get<animalsDatatype[]>(this.apiUrl)
  }

  getOne(id: string): Observable<animalsDatatype> {
    return this.http.get<animalsDatatype>(this.apiUrl+ "/" + id)
  }
}
