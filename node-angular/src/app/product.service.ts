import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  async getProduct(): Promise<Product[]> {
    const response = await fetch(`http://localhost:3000`);
    if (response.ok) {
      return response.json()
    }
    return [];
  }
}
