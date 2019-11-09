import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import Product from '../products/product.model';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  product: Product;

  constructor(
    private router: ActivatedRoute,
    private produdctService: ProductService
  ) { }

  ngOnInit() {
    const id = parseInt(this.router.snapshot.params.id, 10);
    this.produdctService.getProduct(id)
      .subscribe((product: Product) => {
        this.product = product;
      });
  }

  onUpdate(e) {
    this.produdctService.updateProduct(e).subscribe(response => {
       
    });
  }

}
