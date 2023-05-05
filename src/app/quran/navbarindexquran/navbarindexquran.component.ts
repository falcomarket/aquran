import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ActionsTypes, ActionEvent } from '../../state/state';
import { RouterModule, Routes,ActivatedRoute,Params,ParamMap } from '@angular/router';
@Component({
  selector: 'app-navbarindexquran',
  templateUrl: './navbarindexquran.component.html',
  styleUrls: ['./navbarindexquran.component.css']
})
export class NavbarindexquranComponent implements OnInit {

    
  @Output() indexEventEmitter:EventEmitter<ActionEvent> = new EventEmitter();
  constructor(route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.onGetAllSurahs();
  }
  onGetAllSurahs() {
    this.indexEventEmitter.emit({type:ActionsTypes.GET_INDEX_QURAN})
  }
}
