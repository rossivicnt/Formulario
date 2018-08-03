import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-seleccion',
  templateUrl: './seleccion.component.html',
  styleUrls: ['./seleccion.component.scss']
})
export class SeleccionComponent implements OnInit {
  @ViewChild('closeBtn') closeBtn: ElementRef;

  constructor() { }

  ngOnInit() {
  }

}
