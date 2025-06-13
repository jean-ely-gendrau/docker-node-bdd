import { Component, inject, OnInit } from '@angular/core';
import { Product, ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  productService = inject(ProductService)
  products: Product[] = [];

  async ngOnInit(): Promise<void> {
    this.products = await this.productService.getProduct();
  }
}
