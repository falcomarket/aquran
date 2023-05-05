
import { Component, OnInit, EventEmitter, Input, Output, OnChanges, SimpleChanges } from '@angular/core';
import { ActionEvent,ActionsTypes } from '../../state/state';
import { RouterModule, Routes,ActivatedRoute,Params,ParamMap } from '@angular/router';
//import {AyaServices} from "../../services/aya.services";
import {Observable, of} from "rxjs";
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { SuraServices } from '../../services/sura.services';
@Component({
  selector: 'app-listindexquran',
  templateUrl: './listindexquran.component.html',
  styleUrls: ['./listindexquran.component.css']
})
export class ListindexquranComponent implements OnInit{
  columnsToDisplay:any= ["الترتيب","السورة"];
  
  public os?:any; 
  public cde?:string;
  @Input() surahs:any;

  @Output() indexEventEmitter:EventEmitter<ActionEvent> = new EventEmitter();

  constructor(route: ActivatedRoute ,private  suraServices:SuraServices) { }
  
    
  ngOnInit(): void {
    
  }
  
  onGetAllSuraByPage(ip:any) {
  
    this.suraServices.getSurahsPage(ip).subscribe(data=>(this.surahs=data));
  
    return of(this.surahs);
  }
  
  OnPageChange(event:PageEvent):void{
    //console.log(event)
    
    const pindex=(event.pageIndex), psize=event.pageSize;
    this.cde='page='+pindex.toString()+'&size='+psize.toString()
    //console.log(this.cde)
    this.onGetAllSuraByPage(this.cde)
     
    }

}


/*
export class ListindexquranComponent implements OnInit{
  columnsToDisplay:any= ["الترتيب","السورة"];
  ayahs:any
  public os?:any; 
  public cde?:string;
  @Input() surahs:any;

  @Output() indexEventEmitter:EventEmitter<ActionEvent> = new EventEmitter();

  constructor(route: ActivatedRoute ,private  ayaServices:AyaServices) { }
  
    
  ngOnInit(): void {
    
  }
  
  onGetAllAyahsBySura(os:any) {
  
    this.ayaServices.getAyahsBySura(os).subscribe(data=>(this.ayahs=data));
  
    return of(this.ayahs);
  }
  
  OnPageChange(event:PageEvent):void{
    console.log(event)
    
    const pindex=(event.pageIndex), psize=event.pageSize;
    this.cde='page='+pindex.toString()+'&size='+psize.toString()
    console.log(this.cde)
    //this.onGetAllAyahsBySura(this.cde)
     
    }

}
*/