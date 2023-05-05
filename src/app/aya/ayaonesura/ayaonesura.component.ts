import { Component, OnInit } from '@angular/core';
import {AyaServices} from "../../services/aya.services";
import {of} from "rxjs";
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-ayaonesura',
  templateUrl: './ayaonesura.component.html',
  styleUrls: ['./ayaonesura.component.css']
})
export class AyaonesuraComponent implements OnInit {

  public ayahs:any;
  public os?:any;

  constructor(private  ayaServices:AyaServices,private route: ActivatedRoute) { 
 
  }

  ngOnInit(): void {
   
    this.route.paramMap.subscribe(params=>{this.os=params.get('os')});
    
    this.onGetAllAyahsBySura(this.os) 
  }
 
  onGetAllAyahsBySura(os:any) {
  
    this.ayaServices.getAyahsBySura(os).subscribe(data=>(this.ayahs=data));
  
    return of(this.ayahs);
  }

}

