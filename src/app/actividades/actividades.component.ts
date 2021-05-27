import { Component, OnInit, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html',
  styleUrls: ['./actividades.component.css']
})
export class ActividadesComponent implements OnInit {

  mensaje = 'Hola que tal?';
  escondido = false;
  color = 'orange';
  @Input()  selected!: number | string;
  @Output() selectedChange = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  getMensaje(){
    return this.mensaje +45
  }

  pulsado($event){
    this.escondido = !this.escondido;
    this.selectedChange.emit('Hola');
    console.log('Mi evento', $event);
  }
}
