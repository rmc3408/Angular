import { Component, OnInit } from '@angular/core';
import { AnimalsService } from 'src/app/services/animals.service';


export type animalsDatatype = {
  id: number;
  name: string;
  type: string;
  age: number;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  public listAnimals: animalsDatatype[] = []
  
  constructor(private animalService: AnimalsService) { 
    this.getAnimals()
  }

  ngOnInit(): void {
  }

  removeAnimal(animal: animalsDatatype): void {
    this.listAnimals = this.listAnimals.filter((bicho) => bicho.name !== animal.name)
    this.animalService.remove(animal.id)
  }

  getAnimals(): void {
    this.animalService.getAll().subscribe((result) => this.listAnimals = result)
  }

}
