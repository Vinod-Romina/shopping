import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../service.service';
import {v4 as uuid} from 'uuid';
import { Router } from '@angular/router';
import {formatDate} from '@angular/common'

const myid= uuid();

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  imageform = new FormGroup({
    image: new FormControl(''),
    name : new FormControl(''),
    quantity: new FormControl(''),
    productid: new FormControl(''),
    rate: new FormControl(''),
    sessionid: new FormControl(myid),
    date:new FormControl(''),
    time:new FormControl(''),
    status: new FormControl('pending'),
  

  })

  constructor(private service:ServiceService, private router:Router) {
    this.get()
   }

  ngOnInit(): void {
  }

  collection:any;

  get(){
    return this.service.getdata().subscribe((result)=>{
      this.collection=result

    })
  }

// productquantity:number=1
// counter1(val:string){
//   if(this.productquantity<20 && val==='plus'){
//     this.productquantity+=1
//   } else if (this.productquantity>1 && val==='min'){
//     this.productquantity-=1
//   }
// }

sessid:any;
tm:any;

post(image:any, name:any, quantity:any, productid:any, rate:any,  ){
  this.tm=formatDate(Date(), 'hh:mm:ss a', 'en-US', '+0530')
    
  this.imageform = new FormGroup({
    image: new FormControl(image),
    name: new FormControl(name),
    quantity: new FormControl(quantity),
    productid: new FormControl(productid),
    rate: new FormControl(rate),
    
    sessionid: new FormControl(myid),
    date:new FormControl(Date().substring(4,15)),
    time: new FormControl(this.tm),
    status: new FormControl('pending'),
  })

  return this.service.postcart(this.imageform.value).subscribe((result)=>{
    alert('Item has been added to cart')
  })

}

gotocart(){
  return this.router.navigate(['cart/',myid])
}

options = {
  "key": "rzp_test_KYfYei4UniuoI4", // Enter the Key ID generated from the Dashboard
  "amount": "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
  "currency": "INR",
  "name": "Acme Corp", //your business name
  "description": "Test Transaction",
  "image": "https://example.com/your_logo",
  "order_id": "", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
  "callback_url": "https://eneqd3r9zrjok.x.pipedream.net/",
  "prefill": {
      "name": "Gaurav Kumar", //your customer's name
      "email": "gaurav.kumar@example.com",
      "contact": "9000090000"
  },
  "notes": {
      "address": "Razorpay Corporate Office"
  },
  "theme": {
      "color": "#3399cc"
  }

}

rzp1:any;

pay(){
  this.rzp1 = new this.service.nativeWindow.Razorpay(this.options);
  this.rzp1.open();
  
}





}
