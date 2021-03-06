import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NavigationComponent} from './parts/navigation/navigation.component';
import {CardComponent} from './pages/card/card.component';
import {PaginationComponent} from './parts/pagination/pagination.component';
import {AppRoutingModule} from './app-routing.module';
import {LoginComponent} from './pages/login/login.component';
import {SignupComponent} from './pages/signup/signup.component';
import {SignMerchantComponent} from './pages/signup-merchant/signup-merchant.component';
import {DetailComponent} from './pages/product-detail/detail.component';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {CartComponent} from './pages/cart/cart.component';
import {CookieService} from 'ngx-cookie-service';
import {ErrorInterceptor} from './_interceptors/error-interceptor.service';
import {JwtInterceptor} from './_interceptors/jwt-interceptor.service';
import {OrderComponent} from './pages/order/order.component';
import {MerchantComponent} from './pages/merchant/merchant.component';
import {OrderDetailComponent} from './pages/order-detail/order-detail.component';
import {ProductsListComponent} from './pages/product-list/products-list.component';
import {ProductsMerchantListComponent} from './pages/product-list/products-merchant-list.component';
import {ProductsFeedsListComponent} from './pages/product-list/products-feeds-list.component';
import {UploadProductImageComponent} from './pages/merchant/admin-product/upload-product-image/upload-product-image.component';
import {UserDetailComponent} from './pages/user-edit/user-detail.component';
import {ProductEditComponent} from './pages/product-edit/product-edit.component';
import {AdminProductComponent} from './pages/merchant/admin-product/admin-product.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';


@NgModule({

    declarations: [
        AppComponent,
        NavigationComponent,
        CardComponent,
        PaginationComponent,
        LoginComponent,
        SignupComponent,
        SignMerchantComponent,
        DetailComponent,
        CartComponent,
        OrderComponent,
        MerchantComponent,
        OrderDetailComponent,
        ProductsListComponent,
        UserDetailComponent,
        ProductEditComponent,
        UploadProductImageComponent,
        AdminProductComponent,
        ProductsMerchantListComponent,
        ProductsFeedsListComponent,

    ],
    imports: [
        SweetAlert2Module.forRoot(),
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,

    ],
    providers: [CookieService,
        {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
        {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}],
    bootstrap: [AppComponent]
})
export class AppModule {
}
