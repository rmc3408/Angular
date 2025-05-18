import { Component, OnInit } from '@angular/core';
import { animalsDatatype } from '../list/list.component';
import { AnimalsService } from 'src/app/services/animals.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {

  public animal?: animalsDatatype

  constructor(private list: AnimalsService, private route: ActivatedRoute) { 
    this.getAnimal()
  }

  ngOnInit(): void {
  }

  getAnimal() {
    const id = this.route.snapshot.paramMap.get('id')
    if (!id) return
    this.list.getOne(id).subscribe(result => this.animal = result)
  }
}
