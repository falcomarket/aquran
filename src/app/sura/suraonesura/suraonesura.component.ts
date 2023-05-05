
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { RouterModule, Routes,ActivatedRoute,Params,ParamMap } from '@angular/router';
import {SuraServices} from "../../services/sura.services";
import {Observable, of} from "rxjs";

@Component({
  selector: 'app-suraonesura',
  templateUrl: './suraonesura.component.html',
  styleUrls: ['./suraonesura.component.css']
})
export class SuraonesuraComponent implements OnInit {

  public os?:any;
  surahs:any;
  constructor(private  suraServices:SuraServices,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params=>{this.os=params.get('os')});
    
    this.onGetAllSuraByOrdre(this.os) ;
  }

  onGetAllSuraByOrdre(os:any) {
  
    this.suraServices.getSuraByOrdre(os).subscribe(data=>(this.surahs=data));
  
    return of(this.surahs);
  }

}
