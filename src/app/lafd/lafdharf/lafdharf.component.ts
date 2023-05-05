import { Component, OnInit } from '@angular/core';
import {LafdServices} from "../../services/lafd.services";
import {Observable, of} from "rxjs";
import { RouterModule, Routes,ActivatedRoute,Params,ParamMap } from '@angular/router';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-lafdharf',
  templateUrl: './lafdharf.component.html',
  styleUrls: ['./lafdharf.component.css']
})
export class LafdharfComponent implements OnInit {

  lafdqs:any;
  idh:any;
  cde?:string;
  constructor(private lafdServices:LafdServices,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params=>{this.idh=params.get('idh')});
    
    
    this.onGetAllLafdsByHarf(this.idh)
  }
  onGetAllLafdsByHarf(idh:any){
    this.lafdServices.getLafdByHarf(idh).subscribe(data=>(this.lafdqs=data));
           return of(this.lafdqs);
}
OnPageChange(event:PageEvent):void{
  console.log(event)
  
  const pindex=(event.pageIndex), psize=event.pageSize;
  
  this.cde=(this.idh+'&page='+pindex.toString()+'&size='+psize.toString())
  console.log(this.cde)
  this.onGetAllLafdsByHarf(this.cde)
   
  }

}

