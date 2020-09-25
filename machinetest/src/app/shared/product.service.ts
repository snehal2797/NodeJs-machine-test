import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { Observable } from 'rxjs';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/toPromise';
import{Product} from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  selectedProduct: Product;
  products: Product[];
  readonly baseURL = 'http://localhost:3000/productlists';

  constructor(private http: HttpClient) { }

  postProduct(product: Product) {
    return this.http.post(this.baseURL, product);
  }

  getProductList() {
    return this.http.get(this.baseURL);
  }

  putProduct(product: Product) {
    return this.http.put(this.baseURL + `/${product._id}`, product);
  }

  deleteProduct(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

}
  