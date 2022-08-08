import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthBasicGuard } from './guards/auth-basic.guard';
import { ListProductoComponent } from './pages/list-producto/list-producto.component';
import { LoginComponent } from './pages/login/login.component';
import { NewProductoComponent } from './pages/new-producto/new-producto.component';

const routes: Routes = [
  {path: "", component: ListProductoComponent},  
  {path: "products/list", component: ListProductoComponent, canActivate: [AuthBasicGuard]},
  {path: "products/new", component: NewProductoComponent, canActivate: [AuthBasicGuard]},
  {path: "login", component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
