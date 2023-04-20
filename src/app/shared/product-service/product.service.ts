import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, tap, throwError, map } from 'rxjs';
import { IProduct } from 'src/app/models/product.model';


@Injectable({
  providedIn: 'root',
})
export class ProductService {
  public productUrl = 'http://localhost:3000/products';

  constructor(private http: HttpClient) {}


  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.productUrl).pipe(
      tap((data) => console.log('All: ', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }
  getProductById(id: number): Observable<IProduct | undefined> {
    return this.getProducts().pipe(
      map((products: IProduct[]) => products.find((p) => p.id === id))
    );
  }
  private handleError(err: HttpErrorResponse): Observable<never> {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `Errro: ${err.error.message}`;
    } else {
      errorMessage = `Errored code: ${err.status}, error is: ${err.message}`;
    }
    return throwError(() => errorMessage);
  }
addProduct(product: IProduct) {
 return this.http.post<IProduct>(this.productUrl, product)
}

deleteProduct(id: number): Observable<IProduct> {
  return this.http.delete<IProduct>(`${this.productUrl}/${id}`)
}
// updateProduct(product: IProduct): Observable<IProduct> {
// const headers = new HttpHeaders({'Content-Type': 'application/json'});
// const url = `${this.productUrl}/${product.id}`;
// return this.http.put<IProduct>(url, product, { headers })
// .pipe(
//   tap(() => console.log('updateProduct: ' + product.id)),
//   map(() => product),
//   catchError(this.handleError)
// )
// }
}
