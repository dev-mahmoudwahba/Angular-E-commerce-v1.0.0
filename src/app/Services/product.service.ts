import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import {map} from 'rxjs/operators';
import { AllProduct } from '../Shared Classes/Interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http:HttpClient) { }

  getProducts(){
    return this.http.get<any>("https://fakestoreapi.com/products")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getProductDetials(id:number):Observable<AllProduct[]>{
    return this.http.get<AllProduct[]>(`https://fakestoreapi.com/products/${id}`).pipe(catchError((err)=>
    {
      return throwError(()=>err.message||"Server error")
    }))
  }

  public cartItemList : any =[]
  public productList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");
  getProduct(){
    return this.productList.asObservable();
  }
  setProduct(product : any){
    this.cartItemList.push(...product);
    this.productList.next(product);
  }
  addtoCart(product : any){
    if(this.cartItemList.indexOf(product) === -1){
      this.cartItemList.push(product);
      this.productList.next(this.cartItemList);
      this.getTotalPrice();
    }
  }
  getTotalPrice() : number{
    let grandTotal = 0;
    console.log(this.cartItemList);
    this.cartItemList.map((a:any)=>{
      grandTotal += a.total;
    })
    return grandTotal;
  }
  removeCartItem(product: any){
    this.cartItemList.map((a:any, index:any)=>{
      if(product.id=== a.id){
        this.cartItemList.splice(index,1);
      }
    })
    this.productList.next(this.cartItemList);
  }
  removeAllCart(){
    this.cartItemList = []
    this.productList.next(this.cartItemList);
  }
  /*getProductById(prodId:number){
    const product = this.Products.find(product => product.ID === prodId);
    if(!product || isNaN(prodId)) null;
    return product;
  }*/
}
