import { Component, OnInit } from '@angular/core';
import {DosService} from '../../servicios/dos.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

limpieza:any[] = [];

  constructor(private _aboutService:DosService) {

   }

  ngOnInit(): void {

    this.limpieza = this._aboutService.getlimpieza();

  console.log(this.limpieza);

  }

}
