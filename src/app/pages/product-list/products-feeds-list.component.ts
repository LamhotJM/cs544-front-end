import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-feeds-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsFeedsListComponent implements OnInit {
  products: Object;

  constructor(private service: ProductService) { }

  ngOnInit() {
    this.service.getProductsFeeds().subscribe(
      data =>   {
        this.products = data['data'];
        console.log(this.products);
      }
    );
  }

}
