import { Component, OnInit,EventEmitter,Input,Output } from '@angular/core';
import { LafdServices } from '../../services/lafd.services';
import { ActionEvent } from '../../state/state';
import {Observable, of} from "rxjs";

@Component({
  selector: 'app-listindexlafd',
  templateUrl: './listindexlafd.component.html',
  styleUrls: ['./listindexlafd.component.css']
})
export class ListindexlafdComponent implements OnInit {

  @Input() lafdqs:any; 
  
  @Output() lafdEventEmitter:EventEmitter<ActionEvent> = new EventEmitter();
  hhijas:any;
  
  constructor(private lafdServices:LafdServices) { }

  ngOnInit(): void {
    this.onGetHhija() 
  }
  onGetHhija(){
    this.lafdServices.getLafds().subscribe(data=>(this.hhijas=data));
           return of(this.hhijas);
}

}

