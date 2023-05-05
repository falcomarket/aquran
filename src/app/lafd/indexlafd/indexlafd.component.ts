import { Component, OnInit } from '@angular/core';
import {LafdServices} from "../../services/lafd.services";
import { ActionsTypes, ActionEvent } from '../../state/state';
import {Observable, of} from "rxjs";



@Component({
  selector: 'app-indexlafd',
  templateUrl: './indexlafd.component.html',
  styleUrls: ['./indexlafd.component.css']
})
export class IndexlafdComponent implements OnInit {

  lafdqs:any;

  idh:any;
  constructor(private  lafdServices:LafdServices) { }

  ngOnInit(): void {
  }
  onActionEvent($event:ActionEvent){
    switch($event.type){
      
      case ActionsTypes.GET_ALL_LAFDS_BY_HARF: this.onGetLafdsByHarf(); break;
      
  
    }
  }
  onGetLafdsByHarf(){
    this.lafdServices.getLafdByHarf(this.idh).subscribe(data=>(this.lafdqs=data));
           return of(this.lafdqs);
  }
}