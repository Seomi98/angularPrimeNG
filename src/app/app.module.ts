import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductService } from './services/product.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { MultiSelectModule } from 'primeng/multiselect';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ToolbarModule } from 'primeng/toolbar';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputNumberModule } from 'primeng/inputnumber';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DemoExModule } from 'demo-ex';
import { CrudPrimengComponent } from './components/crud-primeng/crud-primeng.component';
import { AddLibraryComponent } from './components/add-library/add-library.component';
import { MenubarModule } from 'primeng/menubar';
import { createCustomElement } from '@angular/elements';
// import { RbnCommonLibModule } from 'rbn-common-lib';

@NgModule({
  declarations: [
    AppComponent,
    CrudPrimengComponent,
    AddLibraryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
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
    BrowserAnimationsModule,
    DemoExModule,
    MenubarModule,
    // RbnCommonLibModule
  ],
  providers: [ProductService, MessageService, ConfirmationService],
  bootstrap: [],
  entryComponents: [
    AppComponent
  ]
})
export class AppModule {
  constructor(private injector: Injector) {
    const el = createCustomElement(AppComponent, { injector: this.injector });
    customElements.define('demo-primeng', el);
  }
  ngDoBootstrap(): void { }
}

