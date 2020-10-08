import { Component, OnInit } from '@angular/core';
import {TercerService} from '../../servicios/tercer.service';
@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {

mantenimiento:any[] = [];


  constructor(private _serviciosService:TercerService) {


   }

  ngOnInit(): void {


  }

}
