import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";



@Injectable({providedIn:"root"})

export class BahtServices{
  
  private host:string="http://localhost:8080";

  
  constructor(private http:HttpClient){ }
   
  public getAyahsByKlm(nl:String){

    return this.http.get(this.host+"/ayahs/search/chercher?mc="+nl)
  }
  public getSurahsByKlm(nl:String){

    return this.http.get(this.host+"/surahs/search/chercher?mc="+nl)
  }
  public getLafdsByKlm(nl:String){

    return this.http.get(this.host+"/lafdAyas/search/chercherPage?mc="+nl)
  }
  public getLafdsByKlmb(nl:String){

    return this.http.get(this.host+"/lafdAyas/search/chercherByKlm?mc="+nl)
  }
}
