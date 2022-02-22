import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { DetailsComponent } from './products/details/details.component';
import { CartComponent } from './cart/cart.component';
import {ServiceComponent} from './service/service.component';
import {ContactUsComponent} from './contact-us/contact-us.component';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  {path:'',redirectTo:'/Home',pathMatch:'full'},
  {path:'Home',component:HomeComponent},
  {path:'Products',component:ProductsComponent},
  {path:'Product/:id',component:DetailsComponent},
  {path:'Cart',component:CartComponent},
  {path:'Services',component:ServiceComponent},
  {path:'Contact-Us',component:ContactUsComponent},
  {path:'Register',component:RegisterComponent},
  {path:'Login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
