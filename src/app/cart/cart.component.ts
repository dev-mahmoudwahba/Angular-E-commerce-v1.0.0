import { Component, OnInit } from '@angular/core';
import { ProductService } from '../Services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private getProducts:ProductService) { }
  public products : any = [];
  public grandTotal: any;
  ngOnInit(): void {
    this.getProducts.getProduct()
    .subscribe(res=>{
      this.products = res;
      this.products.forEach((a:any) => {
        Object.assign(a,{quantity:1});
      });
    })
  }

  getTotel(item:any){
    for(const items of item){
      this.grandTotal += item.price * item.quantity;
    }
  }

  inc(item:any){
    item.quantity = item.quantity + 1;
  }

  dec(item:any){
    if(item.quantity !=1){
      item.quantity -= 1
    }
  }

  removeItem(item: any){
    this.getProducts.removeCartItem(item);
  }

  emptycart(){
    this.getProducts.removeAllCart();
  }

}
