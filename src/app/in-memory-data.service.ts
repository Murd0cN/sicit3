import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Product } from './products/product';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const products = [
      { id: 11, name: 'Armário 1' },
      { id: 12, name: 'Gaveta 1' },
      { id: 13, name: 'Gaveta 2' },
      { id: 14, name: 'Gaveta 3' },
      { id: 15, name: 'Gaveta 4' },
      { id: 16, name: 'Gaveta 5' },
      { id: 17, name: 'Gaveta 6' },
      { id: 18, name: 'Gaveta 7' },
      { id: 19, name: 'Gaveta 8' },
      { id: 20, name: 'Gaveta 9' }
    ];
    return { products };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(products: Product[]): number {
    return products.length > 0 ? Math.max(...products.map(product => product.id)) + 1 : 11;
  }
}
