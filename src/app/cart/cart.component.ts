import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  items = this.cart.getItems();
  fsItems: any="";
  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });
  constructor(private cart:CartService,private formBuilder: FormBuilder){

  }
  showCart(){
    this.cart.getItems()
  }
  onSubmit(): void {
    // Process checkout data here
    this.items = this.cart.clearCart();
    //console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }
  showMapService(){
      this.cart.getMapService().subscribe((v) =>{
        this.fsItems=v;
      })
  }
}
