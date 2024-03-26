import { Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { UserCrudComponent } from './admin/user-crud/user-crud.component';
import { ContactusComponent } from './contactus/contactus.component';
import { BuyerDashboardComponent } from './customer/buyer/buyer-dashboard/buyer-dashboard.component';
import { CheckoutComponent } from './customer/buyer/checkout/checkout.component';
import { SellerDashboardComponent } from './customer/seller/seller-dashboard/seller-dashboard.component';
import { SigninSignupComponent } from './customer/signin-signup/signin-signup.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { PageNotFoundComponent } from './shared/layout/page-not-found/page-not-found.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

export const routes: Routes = [
    {path:"",redirectTo:"/",pathMatch:"full"},
    {path:"",component:HomeComponent},
    {path:"my-profile",component:UserProfileComponent},
    {path:"contact-us",component:ContactusComponent},
    // admin
    {path:'', children:[
        {path:"admin-login",component:AdminLoginComponent}
    ]},
    {path:'', children:[
        {path:"admin-dashboard",component:AdminDashboardComponent},
        {path:"admin/user",component:UserCrudComponent},
        {path:"admin/product",component:ProductsComponent},
    ]},
    {path:'', children:[
        {path:"sign-in",component:SigninSignupComponent},
        {path:"sign-up",component:SigninSignupComponent},
    ]},
    {path:'', children:[
        {path:"seller-dashboard",component:SellerDashboardComponent},
        {path:"seller/product",component:ProductsComponent},
    ]},
    {path:'', children:[
        {path:"buyer-dashboard",component:BuyerDashboardComponent},
        {path:"checkout",component:CheckoutComponent},
    ]},
    {path:"**",component:PageNotFoundComponent},
];
