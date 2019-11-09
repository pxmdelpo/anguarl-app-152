import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Product from '../../products/product.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  productForm;

  @Input() model: Product;
  @Output() completedform: EventEmitter<Product> = new EventEmitter<Product>();

  constructor() { }

  ngOnInit() {
    this.productForm = new FormGroup({
      name: new FormControl(this.model.name || '', [
        Validators.required, Validators.minLength(6)
      ]),
      detail: new FormControl(this.model.detail || '', [
        Validators.required, Validators.minLength(15)
      ]),
      price: new FormControl(this.model.price || '', [
        Validators.required, Validators.min(1),
        Validators.pattern(/^\d+(\.\d{1,2})?$/)
      ]),
      stock: new FormControl(this.model.stock || '', [
        Validators.required, Validators.min(0),
        Validators.pattern(/^\d+$/)
      ])
    });
  }

  onSubmit(e) {
    const { value } = this.productForm;
    this.completedform.emit(value);
  }

  onBack() {
    
  }

}
