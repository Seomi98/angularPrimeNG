import { Component, OnChanges, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { range, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-crud-primeng',
  templateUrl: './crud-primeng.component.html',
  styleUrls: ['./crud-primeng.component.scss'],
  providers: [ConfirmationService, MessageService]
})
export class CrudPrimengComponent implements OnInit {

  productDialog: boolean = false;
  products: Product[] = [];
  product: Product = {};
  selectedProducts: Product[] = [];
  submitted: boolean = false;
  statuses: any[] = [];

  constructor(private productService: ProductService,
     private messageService: MessageService,
     private confirmationService: ConfirmationService,) { 
     }
     
  // ngOnChanges() {
  //   this.products = this.productService.getProducts();
  // }

  ngOnInit() {
    this.productService.getItem().subscribe({
      next: (res) => {
        this.products = res;
      }});
    this.createId();
  }

  // open dialog create or update
  openNew() {
    this.product = {};
    this.submitted = false;
    this.productDialog = true;
  }

  // edit product
  editProduct(product: Product) {
    this.product = { ...product };
    this.productDialog = true;
  }

  // delete product
  deleteProduct(product: Product) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + product.name + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        const id = product.id ? product.id : '';
        this.productService.deleteItem(id).subscribe({
            next: (res) => {
              this.products = res;
              this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000 });
            }, error: (err) => {
              this.messageService.add({ severity: 'error', summary: 'Error', detail: err.error.message, life: 3000 });
            }
          }
        );
        this.product = {};
      }
    });
  }

  // close dialog
  hideDialog() {
    this.productDialog = false;
    this.submitted = false;
  }

  // add product
  saveProduct() {
    this.submitted = true;
    if (this.product.name && this.product.name.trim()) {
      if (this.product.id) {
        this.productService.updateItem(this.product).subscribe({ 
            next: (res) => {
            this.products = res;
            this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Updated', life: 3000 });
          }, error: (err) => {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: err.error.message, life: 3000 });
          }});
      } else {
        this.product.id = this.createId();
        this.productService.createItem(this.product).subscribe({ 
          next: (res) => {
            this.products = res
            this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Created', life: 3000 });
          }, error: (err) => {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: err.error.message, life: 3000 });
          }});
      }
      this.productDialog = false;
      this.product = {};
    }
  }

  // random id
  createId(): string {
    let id = '';
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const i = range(0,5);
    i.pipe(map(x => (Math.floor(Math.random() * chars.length)))).subscribe(x => id += chars.charAt(x));
    return id;
  }
}
