import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../Services/product.service';
import { AllProduct } from '../Shared Classes/Interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public productList : any ;
  public filterCategory : any;
  searchKey:string ="";
  constructor(private getProducts:ProductService,private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getProducts.getProducts().subscribe(res=>{
      this.productList = res;
      this.filterCategory = res;
      this.productList.forEach((a:any) => {
        if(a.category ==="women's clothing" || a.category ==="men's clothing"){
          a.category ="fashion"
        }
      });
      this.getProducts.search.subscribe((val:any)=>{
        this.searchKey = val;
      })
    });
  }
  goToProduct(pro:any){
    this.router.navigate(["/Product",pro.id]);
  }

  addtocart(item: any){
    this.getProducts.addtoCart(item);
  }

  filter(category:string){
    this.filterCategory = this.productList
    .filter((a:any)=>{
      if(a.category == category || category==''){
        return a;
      }
    })
  }

  filterPrice(minPrice:number,maxPrice:number){

    this.filterCategory = this.productList
    .filter((a:any)=>{
      if(a.price > minPrice && a.price<maxPrice  ){
        return a;
      }
    })
  }

  filterRating(minRate:number,maxRate:number){
    this.filterCategory = this.productList
    .filter((a:any)=>{
      if(a.rating.rate > minRate && a.rating.rate<maxRate  ){
        return a;
      }
    })
  }
  public searchTerm !: string;
  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.getProducts.search.next(this.searchTerm);
  }
}
