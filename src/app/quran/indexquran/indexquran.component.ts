
import {SuraServices} from '../../services/sura.services'
import { Component, OnInit} from '@angular/core';
import { ActionEvent,ActionsTypes } from '../../state/state';

@Component({
  selector: 'app-indexquran',
  templateUrl: './indexquran.component.html',
  styleUrls: ['./indexquran.component.css']
})

export class IndexquranComponent implements OnInit {
  
  surahs:any;
  constructor(private  suraServices:SuraServices) { 
  }

  ngOnInit(): void {
    this.onGetAllSurahs();
  }

  onActionEvent($event:ActionEvent){
    switch($event.type){
    case ActionsTypes.GET_ALL_SURAHS: this.onGetAllSurahs(); break;
    case ActionsTypes.GET_INDEX_QURAN: this.onGetAllSurahs(); break;
    }
  }

  onGetAllSurahs() {
    this.suraServices.getSurahs().subscribe(data=>(this.surahs=data));
    return (this.surahs);  
  }

}