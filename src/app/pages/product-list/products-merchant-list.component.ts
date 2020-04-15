import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-merchant-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsMerchantListComponent implements OnInit {
  products: Object;

  constructor(private userService: UserService, private route: ActivatedRoute, private service: ProductService) { }

  ngOnInit() {
    const account = this.userService.currentUserValue.account;
    console.log('products-merchant-list account:  ' + account);
    this.service.getProductsByMerchant(account).subscribe(
      data =>   {
        this.products = data;
        console.log(this.products);
      }
    );
  }

}
