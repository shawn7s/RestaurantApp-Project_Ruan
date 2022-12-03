import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';
import { menu } from '../menu';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})


export class CheckoutComponent implements OnInit {
  name: string | undefined;
  id: string | undefined;

      
  checkoutForm = this.fb.group ({
    firstName :  ['', Validators.required, {updateOn: 'blur'}],
    lastName :  ['', Validators.required, {updateOn: 'blur'}],
    email :  ['', Validators.required, {updateOn: 'blur'}],
    password :  ['', Validators.required, {updateOn: 'blur'}],
    address : this.fb.group ({
      state :  ['', Validators.required, {updateOn: 'blur'}],
      country :  ['', Validators.required, {updateOn: 'blur'}],
      city :  ['', Validators.required, {updateOn: 'blur'}],
      zip :  ['', Validators.required, Validators.minLength(6), Validators.maxLength(6), {updateOn: 'blur'}],
    })
  });
menu: any;
checkout: any;




  constructor(private fb: FormBuilder, private httpService: HttpClient) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  get form()
  {
      return this.checkoutForm.controls;
  }

  get firstName(){
    return this.checkoutForm.get('firstName');

  }
  get lastName(){
    return this.checkoutForm.get('lastName')
  }
  get email(){
    return this.checkoutForm.get('email')
  }
  get password(){
    return this.checkoutForm.get('password')
  }
  get state(){
    return this.checkoutForm.get('state')
  }
  get country(){
    return this.checkoutForm.get('country')
  }
  get street(){
    return this.checkoutForm.get('street')
  }
  get zip(){
    return this.checkoutForm.get('zip')
  }


  onSubmit(){
    console.warn(this.checkoutForm.value)
  }

}

function ngOnInit() {
  throw new Error('Function not implemented.');
}
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.




