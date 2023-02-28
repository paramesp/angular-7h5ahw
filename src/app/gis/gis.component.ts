import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-gis',
  templateUrl: './gis.component.html',
  styleUrls: ['./gis.component.css']
})
export class GISComponent {
  fsItems: any="";
  Object=Object;
  constructor(private cart:CartService){}
   showMapService(){
    this.cart.getMapService().subscribe((v) =>{
      this.fsItems=v;
    })
}
}
