import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";


@Injectable({providedIn:"root"})

export class LafdServices{
  
  private host:string="http://localhost:8080";

  
  constructor(private http:HttpClient){ }

  public getLafds(){
        return this.http.get(this.host+"/lafdAyas")
  }
  
  public getQuranLafds(){
    return this.http.get(this.host+"/qlafds")
}
  public getLafdBySura(os:string){
    return this.http.get(this.host+"/lafdAyas/search/chercherId?id="+os)
  }
  public getLafdByHarf(idh:any){
    
    return this.http.get(this.host+"/lafdqs/search/chercherByHarf?id="+idh)
  }

  public getHhijas(){
    return this.http.get(this.host+"/hhijas")
}

}