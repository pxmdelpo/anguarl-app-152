import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.css']
})
export class ProductNewComponent implements OnInit {

  constructor(
    private routing: Router,
    private productService: ProductService
  ) { }

  ngOnInit() {
  }

  onCreate(e) {
    this.productService.createProduct(e).subscribe(response => {
      this.routing.navigate(['/admin/products']);
    });
  }

}
