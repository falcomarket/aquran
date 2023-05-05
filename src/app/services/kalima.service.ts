import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class KalimaServices {
  private host:string="http://localhost:8080";
  
  
  constructor(private http:HttpClient){ }

  public getKalima(){
    return this.http.get(this.host+"/kalimas")
  }

  public getKalimaBySura(os:any){
      return this.http.get(this.host+"/kalimas/search/chercherId?id="+os)
    }
}




