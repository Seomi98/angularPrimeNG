import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ProductService } from 'src/app/services/product.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CrudPrimengComponent } from './crud-primeng.component';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { Observable, of, throwError } from 'rxjs';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { MultiSelectModule } from 'primeng/multiselect';
import { ContextMenuModule } from 'primeng/contextmenu';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { InputTextModule } from 'primeng/inputtext';
import { ToolbarModule } from 'primeng/toolbar';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DemoExModule } from 'demo-ex';

describe('CrudPrimengComponent', () => {
  const products = [{
    "id": "1000",
    "name": "Bamboo Watch",
    "description": "Product Description",
    "price": 65,
    "category": "Accessories",
  }];
  let component: CrudPrimengComponent;
  let fixture: ComponentFixture<CrudPrimengComponent>;
  const productService = jasmine.createSpyObj('productService', ['getItem', 'deleteItem', 'updateItem', 'createItem']);
  const messageService = jasmine.createSpyObj('messageService', ['add']);
  const confirmationService = jasmine.createSpyObj('confirmationService', ['confirm']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudPrimengComponent ],
      imports: [
        HttpClientTestingModule,
        ConfirmDialogModule,
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        TableModule,
        DialogModule,
        MultiSelectModule,
        ContextMenuModule,
        ButtonModule,
        ToastModule,
        InputTextModule,
        ToolbarModule,
        RadioButtonModule,
        InputNumberModule,
        ConfirmDialogModule,
        InputTextareaModule,
        DemoExModule
      ],
      providers: [
        { provide: ProductService, useValue: productService },
        { provide: MessageService, useValue: messageService },
        { provide: ConfirmationService, useValue: confirmationService }
        ],
      schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();
  });

  beforeEach(() => {
    productService.getItem.and.returnValue(of(products));
    fixture = TestBed.createComponent(CrudPrimengComponent);
    component = fixture.componentInstance;
    fixture.detectChanges()
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call openNew()', () => {
    component.openNew();
    expect(component.submitted).toBe(false);
    expect(component.productDialog).toBe(true);
  });

  it('should call editProduct()', () => {
    component.editProduct({category: "Accessories", description: "Product Description", id: "1000", name: "Bamboo Watch", price: 65});
    expect(component.product).toEqual({category: "Accessories", description: "Product Description", id: "1000", name: "Bamboo Watch", price: 65});
    expect(component.productDialog).toBe(true);
  });

  it('should call hideDialog()', () => {
    component.hideDialog();
    expect(component.submitted).toBe(false);
    expect(component.productDialog).toBe(false);
  });
});
