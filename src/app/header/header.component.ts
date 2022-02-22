import { Component, OnInit } from '@angular/core';
import { ProductService } from '../Services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public totalItem : number = 0;
  constructor(private getProducts:ProductService) { }

  ngOnInit(): void {
    this.getProducts.getProduct().subscribe(res=>{
      this.totalItem = res.length;
    })
  }

}
