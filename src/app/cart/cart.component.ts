import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


  cart = new FormGroup({
    sessionid: new FormControl(this.route.snapshot.paramMap.get('myid'))

  })

  updateform = new FormGroup({
    status: new FormControl('')
  })

  status(){
    this.updateform = new FormGroup({
      status: new FormControl('complete'),

    })
  
    this.service.statuschange(this.route.snapshot.paramMap.get('myid'), this.updateform.value).subscribe(()=>{
  
    })
    }
  

  total: any
  cartcollection:any

  gettotal(collection:any) {
    let subs = 0;
    for (const item of collection)
    subs += item.quantity * item.rate
    this.total = subs;
  }
  

  

  constructor(private service:ServiceService, private route:ActivatedRoute) {   }

  userid:any;
  collection:any;

  ngOnInit(): void {
    this.viewdata()   
  }

  viewdata(){
    this.userid=this.route.snapshot.paramMap.get('myid')
    this.service.getcart(this.userid).subscribe((result)=>{
      this.collection=result
    })
  }


  delete(name:any){
    this.service.deleteorder(name).subscribe((result)=>{
      console.warn(result)
      this.viewdata()
    })
  } 

  
  

  rzp1:any;

  pay(){
    this.rzp1 = new this.service.nativeWindow.Razorpay(this.options);
    this.rzp1.open();
  }



  options = {
    "key": "rzp_test_KYfYei4UniuoI4", // Enter the Key ID generated from the Dashboard
    "amount": "1", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
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







 
};






