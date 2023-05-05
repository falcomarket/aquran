import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";



@Injectable({providedIn:"root"})

export class SuraServices{
  
  private host:string="http://localhost:8080";

  
  constructor(private http:HttpClient){ }

  public getSurahs(){
        return this.http.get(this.host+"/surahs")
  }
  public getSuraByOrdre(os:any){
    return this.http.get(this.host+"/surahs/search/chercherId?id="+os)
  }
  public getSurahsPage(ip:any){
    return this.http.get(this.host+"/surahs?"+ip)
}
}