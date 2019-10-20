import { Injectable } from '@angular/core';
import Product from '../products/product.model';

@Injectable()
export class ProductService {
    private products: Product[] = [
        {
          id: 100,
          name: 'Product 01',
          detail: 'Descripcion...',
          price: 20.00,
          stock: 1
        },
        {
          id: 101,
          name: 'Product 02',
          detail: 'Descripcion...',
          price: 30.00,
          stock: 1
        }
      ]
    constructor() {

    }

    getProducts(): Product[] {
        return this.products;
    }

    getProduct(id: number): Product {
      return this.products.filter(product => product.id === id)[0];
    }

    deleteProduct(id: number): boolean {
        // eliminar product por id
        this.products = this.products.filter(product => product.id !== id);
        console.log(this.products);
        return true;
    }

    updateProduct(product: Product) {
      
    }
}
