import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './modules/login/sign-in/sign-in.component';
import { ProductsComponent } from './modules/admin/products/products.component';
import { ProductNewComponent } from './modules/admin/product-new/product-new.component';
import { ProductEditComponent } from './modules/admin/product-edit/product-edit.component';

const routes: Routes = [
    {
        path: 'login',
        component: SignInComponent
    },
    {
        path: 'admin',
        component: ProductsComponent
    },
    {
        path: 'admin/products/new',
        component: ProductNewComponent
    },
    {
        path: 'admin/products/:id',
        component: ProductEditComponent
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'admin'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}