import { HttpClient, HttpHeaders } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../models/product.model';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    constructor(private http: HttpClient) {
        // const headers  = new HttpHeaders();
        // headers.set('Content-Type', 'application/json; charset=utf-8'); 
    }

    getProducts() {
        const data = localStorage.getItem('products') ? localStorage.getItem('products') : null;
        return data != null ? JSON.parse(data) : [];
    }

    setProducts(arr: Product[]) {
        localStorage.setItem('products', JSON.stringify(arr));
    }

    getItem(): Observable<Product[]> {
        return this.http.get<Product[]>(`http://localhost:3000/api/get`)
        .pipe(
            map(res => {
                return res;
            }
        ));
    }

    createItem(data: Product): Observable<Product[]> {
        return this.http.post<Product[]>(`http://localhost:3001/api/create`, JSON.stringify(data))
        .pipe(
            map(res => {
                return res;
            }
        ));
    }

    updateItem(data: Product): Observable<Product[]> {
        return this.http.put<Product[]>(`http://localhost:3002/api/update`, JSON.stringify(data))
        .pipe(
            map(res => {
                return res;
            }
        ));
    }

    deleteItem(id: string): Observable<Product[]> {
        return this.http.delete<Product[]>(`http://localhost:3003/api/delete?id=${id}`)
        .pipe(
            map(res => {
                return res;
            }
        ));
    }
}
