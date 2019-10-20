import { Component, OnInit } from '@angular/core';
import Product from './product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  titles: string[] = ['#', 'nombre', 'detalle', 'precio', 'stock', 'acciones']
  products: Product[];

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  removeProduct(id: number) {
    const response = this.productService.deleteProduct(id);

    if (response) {
      this.products = this.products.filter(product => product.id !== id);
    }
  }

}
