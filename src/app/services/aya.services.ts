import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
;


@Injectable({providedIn:"root"})

export class AyaServices{
  
  private host:string="http://localhost:8080";

  
  constructor(private http:HttpClient){ }

  public getAyahs(){
        return this.http.get(this.host+"/ayahs")
  }
  public getAyahsBySura(os:Number){
    return this.http.get(this.host+"/ayahs/search/chercherId?id="+os)
  }
  
  public searchAyahs(keyword:string){
    return this.http.get(this.host+"/ayahs/search/chercher?mc="+keyword)
  }

}
