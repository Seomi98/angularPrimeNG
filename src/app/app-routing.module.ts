import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddLibraryComponent } from './components/add-library/add-library.component';
import { CrudPrimengComponent } from './components/crud-primeng/crud-primeng.component';

const routes: Routes = [
  { path: '',
    redirectTo: 'crud-primeng',
    pathMatch: 'full' 
  },
  {
    path: "crud-primeng",
    component: CrudPrimengComponent,
  },
  {
    path: "add-library",
    component: AddLibraryComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
