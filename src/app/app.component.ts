import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit {
  items: any[] = [];

  constructor() { 
     }
     
  ngOnInit() {
    this.items = [
      {
          label:'Products list',
          icon:'pi pi-fw pi-calendar',
          routerLink: ["/"]
      },
      {
        label:'Add library',
        icon:'pi pi-fw pi-file',
        routerLink: ["/add-library"]
      }
  ];
  }
}
