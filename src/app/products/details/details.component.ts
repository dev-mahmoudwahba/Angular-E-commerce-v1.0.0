import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor(private getProduct:ProductService,private activatedRoute:ActivatedRoute,private router:Router) { }
  id:any;
  Product:any;
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params:ParamMap)=>{
      this.id=params.get("id");
      this.getProduct.getProductDetials(this.id).subscribe(product => {
        this.Product = product;
      })
    })
  }
  addtocart(item: any){
    this.getProduct.addtoCart(item);
  }

}
