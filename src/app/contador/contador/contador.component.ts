import { Component} from '@angular/core'

@Component({
    selector: 'app-contador',
    template: `
        <h1>{{ titulo }}</h1>
        <h1>La base es {{ base }}</h1>       
        &nbsp;
        <button (click)="Sumar( base )"> + {{ base }} </button>
        &nbsp;
        <span>{{ numero }}</span>
        &nbsp;
        <button (click)="Restar( base )"> - {{ base }} </button>    
    `
})
export class ContadorComponent {
    public titulo: string = 'Contador App';
    public numero: number;
    public base: number;
  
    constructor(){
      this.numero = 0;
      this.base = 5;
    }
  
    public Sumar(valor: number): void {
      this.numero += valor;
    }
  
    public Restar(valor: number): void {
      this.numero -= valor;
    }    
}