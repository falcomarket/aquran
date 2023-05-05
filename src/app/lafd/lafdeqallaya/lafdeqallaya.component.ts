import { Component, OnInit, ViewChild } from '@angular/core';
import {BahtServices} from "../../services/baht.services";
import {Observable, of} from "rxjs";
import { RouterModule, Routes,ActivatedRoute,Params,ParamMap } from '@angular/router';
import { MatPaginator, PageEvent } from '@angular/material/paginator';


@Component({
  selector: 'app-lafdeqallaya',
  templateUrl: './lafdeqallaya.component.html',
  styleUrls: ['./lafdeqallaya.component.css']
})
export class LafdeqallayaComponent implements OnInit {

  public lafdAyas:any;
  public dataSource:any;
  public cde?:string;
  public nl?:any;
  displayedColumns:string[]=["nl","npa","cao","na","nsa"];

  constructor(private  bahtServices:BahtServices,private route: ActivatedRoute) { }

  ngOnInit(): void {
    

    this.route.paramMap.subscribe(params=>{this.nl=params.get('nl')});
    this.onGetAllLafdByKlmb(this.nl) 
  }
  onGetAllLafdByKlmb(nl:any) {
  
    this.bahtServices.getLafdsByKlmb(nl).subscribe(data=>(this.lafdAyas=data));
  
    return of(this.lafdAyas);

  }
  OnPageChange(event:PageEvent):void{
    console.log(event)
    
    const pindex=(event.pageIndex), psize=event.pageSize;
    
    this.cde=(this.nl+'&page='+pindex.toString()+'&size='+psize.toString())
    console.log(this.cde)
    this.onGetAllLafdByKlmb(this.cde)
     
    }
}


  
  