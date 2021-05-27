import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nocturnas',
  templateUrl: './nocturnas.component.html',
  styleUrls: ['./nocturnas.component.css']
})
export class NocturnasComponent implements OnInit {

  escondido = false;
  color = 'orange';

  constructor() { }

  pulsado($event){
    this.escondido = !this.escondido;
    console.log('Mi evento', $event);
  }

  ngOnInit(): void {
  }

}
