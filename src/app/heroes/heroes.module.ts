import { NgModule } from '@angular/core';
import { ListadoComponent } from './listado/listado.component';
import { HeroeComponent } from './heroe/heroe.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        ListadoComponent,
        HeroeComponent
    ],
    exports: [
        ListadoComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
    ]
})
export class HeroesModule {

}