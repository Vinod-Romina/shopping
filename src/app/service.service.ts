import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

function _window():any {
  return window;
}

@Injectable({
  providedIn: 'root'
})
export class ServiceService {


  get nativeWindow():any {
    return _window();
  }
  
  constructor(private http:HttpClient) { 
    
  }

  postdata(data:any){
    let url="http://shopping12.ap-1.evennode.com/product"
    return this.http.post(url,data)
  }

  getdata(){
    let url="http://shopping12.ap-1.evennode.com/product"
    return this.http.get(url)
  }

  delete(name:string){
    let url='http://localhost:5000/admin';
    return this.http.delete(`${url}/?name=${name}`)
  }

  postcart(data:any){
    let url="http://localhost:5000/cart"
    return this.http.post(url,data)
  }

  getcart(sessionid:any,){
    let url="http://localhost:5000/cart"
    return this.http.get(`${url}/?sessionid=${sessionid}`)
  }

  deleteorder(name:any){
    let url="http://localhost:5000/cart"
    return this.http.delete(`${url}/?name=${name}`)
  }

  total(total:any){ 
    let url="http://localhost:5000/total"
    return this.http.post(url,total)
  }


  statuschange(sessionid:any, data:any){
    let url='http://localhost:5000/cart'
    return this.http.put(`${url}/?sessionid=${sessionid}`,data);
   }
 




}
