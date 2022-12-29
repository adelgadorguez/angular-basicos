import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent implements OnInit {
  public heroes: string[] = ['Spiderman', 'Iroman', 'Hulk', 'Thor'];
  public delete: number;
  public heroesBorrados: string[];

  constructor() { 
    this.delete = 0; 
    this.heroesBorrados = [];
  }

  ngOnInit(): void {
  }

  public Delete(item: number): void {
    this.heroesBorrados.push(this.heroes[item]);
    this.heroes.splice(item, 1);
  }
}
