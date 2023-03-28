import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { IProduct } from 'src/app/products/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public productUrl = 'http://localhost:3000/products';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.productUrl)
    .pipe(
      tap(data => console.log('All: ',JSON.stringify(data)))
      );
  }
}
