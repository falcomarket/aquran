import { Component, OnInit } from '@angular/core';
import {LafdServices} from "../../services/lafd.services";
import {Observable, of} from "rxjs";
import { RouterModule, Routes,ActivatedRoute,Params,ParamMap } from '@angular/router';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-lafdonesura',
  templateUrl: './lafdonesura.component.html',
  styleUrls: ['./lafdonesura.component.css']
})
export class LafdonesuraComponent implements OnInit {

  public lafdAyas:any;
  public os?:any;
  public cde?:string;
  constructor(private  lafdServices:LafdServices,private route: ActivatedRoute) { 

  }

  ngOnInit(): void {
    console.log(this.os);
    
    this.route.paramMap.subscribe(params=>{this.os=params.get('os')});
    console.log(this.os);
    this.onGetAllLafdBySura(this.os) 

  }
  onGetAllLafdBySura(os:any) {
  
    this.lafdServices.getLafdBySura(os).subscribe(data=>(this.lafdAyas=data));
  
    return of(this.lafdAyas);
  }
  OnPageChange(event:PageEvent):void{
    console.log(event)
    
    const pindex=(event.pageIndex), psize=event.pageSize;
    this.cde=(this.os.toString()+'&page='+pindex.toString()+'&size='+psize.toString())
    console.log(this.cde)
    this.onGetAllLafdBySura(this.cde)
     
    }
}
