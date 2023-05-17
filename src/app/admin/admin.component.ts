import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

   admin = new FormGroup({
    image: new FormControl(''),
    name: new FormControl(''),
    productid: new FormControl(''),
    rate: new FormControl(''),
    quantity: new FormControl()
   

  })

  constructor(private service:ServiceService, private router:Router) { 
  
    this.getdata()
  }
  

  ngOnInit(): void {
  }

  resetform(){
    this.admin.reset()
  }


selectedfile:any;
  onfileselected(event:any){
    this.selectedfile= <any>event.target.files[0];
    console.log(event)
  }

  upload(name:string, rate:string, quantity:any, productid:any){
    const imgg=this.selectedfile.name
    this.admin = new FormGroup({
      name: new FormControl(name),
      productid: new FormControl(productid),
      image:new FormControl(imgg),
      rate:new FormControl(rate),
      quantity:new FormControl(quantity)
      
    })
    return this.service.postdata(this.admin.value).subscribe(()=>{
      this.resetform()
      this.getdata()
      
    })
    
  }

  savedata(){
    return this.service.postdata(this.admin.value).subscribe(()=>{
    this.resetform()
    })
  }


  collection:any;
  getdata(){
    return this.service.getdata().subscribe((result)=>{
      this.collection=result
    })
  }

  deletedata(name:any){
    this.service.delete(name).subscribe((result)=>{
      this.getdata()
    })

  }














}
