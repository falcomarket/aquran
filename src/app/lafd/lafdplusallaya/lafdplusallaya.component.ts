import { Component, OnInit } from '@angular/core';
import {BahtServices} from "../../services/baht.services";
import {Observable, of} from "rxjs";
import { RouterModule, Routes,ActivatedRoute,Params,ParamMap, Router } from '@angular/router';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-lafdplusallaya',
  templateUrl: './lafdplusallaya.component.html',
  styleUrls: ['./lafdplusallaya.component.css']
})
export class LafdplusallayaComponent implements OnInit {

  public lafdAyas:any;
  public nl?:any;
  public cde?:string;
  
  displayedColumns:string[]=["nl","npa","cao","na","nsa"];
  
  //pageSlice:any;
  //pageSlice=this.lafdAyas.slice(0,15)

  constructor(private  bahtServices:BahtServices,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params=>{this.nl=params.get('nl')});
    this.onGetAllLafdByKlm(this.nl) 
  }
  onGetAllLafdByKlm(nl:any) {
  
    this.bahtServices.getLafdsByKlm(nl).subscribe(data=>(this.lafdAyas=data));
  
    return of(this.lafdAyas);

  }
 
  OnPageChange(event:PageEvent):void{
  console.log(event)
  
  const pindex=(event.pageIndex), psize=event.pageSize;
  
  this.cde=(this.nl+'&page='+pindex.toString()+'&size='+psize.toString())
  console.log(this.cde)
  this.onGetAllLafdByKlm(this.cde)
   
  }
  
}

