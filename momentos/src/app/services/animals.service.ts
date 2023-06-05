import { Injectable } from '@angular/core';
import { animalsDatatype } from '../components/trainning/trainning.component';

@Injectable({
  providedIn: 'root'
})
export class AnimalsService {

  constructor() { }

  remove(list: animalsDatatype[], animal: animalsDatatype) {
    return list.filter((bicho) => bicho.name !== animal.name)
  }
}
