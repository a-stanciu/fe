import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SrpComponent } from './components/srp/srp.component';
import { SfComponent } from './components/sf/sf.component';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { CartComponent } from './components/cart/cart.component';
import { PdpComponent } from './components/pdp/pdp.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { MatCardModule } from '@angular/material/card';
import { ProductGridComponent } from './components/product-grid/product-grid.component';
import { SearchComponent } from './components/search/search.component';
import { MatRippleModule } from '@angular/material/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatBadgeModule } from '@angular/material/badge';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { PcpComponent } from './components/pcp/pcp.component';
import { CartConfirmationSnackbarComponent } from './components/cart-confirmation-snackbar/cart-confirmation-snackbar.component';
import { PcpDialogComponent } from './components/pcp-dialog/pcp-dialog.component';
import { ProductCheckoutCardComponent } from './components/product-checkout-card/product-checkout-card.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { AccountDialogComponent } from './components/account-dialog/account-dialog.component';
import { MatSelectModule } from '@angular/material/select';
import { UserSettingsComponent } from './components/user-settings/user-settings.component';
import { FooterComponent } from './components/footer/footer.component';
import { ShirtTryOnComponent } from './components/shirt-try-on/shirt-try-on.component';
import { WebcamModule } from 'ngx-webcam';
import { MatTooltipModule } from '@angular/material/tooltip';
import { OrderHistoryComponent } from './components/order-history/order-history.component';
import { BlankComponent } from './components/blank/blank.component';
import { ProductCheckoutGridComponent } from './components/product-checkout-grid/product-checkout-grid.component';
import { CheckoutComponent } from './components/checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SrpComponent,
    SfComponent,
    CartComponent,
    PdpComponent,
    ProductCardComponent,
    ProductGridComponent,
    SearchComponent,
    LoginComponent,
    RegisterComponent,
    PcpComponent,
    CartConfirmationSnackbarComponent,
    PcpDialogComponent,
    ProductCheckoutCardComponent,
    AccountDialogComponent,
    UserSettingsComponent,
    FooterComponent,
    ShirtTryOnComponent,
    OrderHistoryComponent,
    BlankComponent,
    ProductCheckoutGridComponent,
    CheckoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatFormFieldModule,
    MatMenuModule,
    MatCardModule,
    MatRippleModule,
    MatChipsModule,
    MatExpansionModule,
    MatDividerModule,
    MatSnackBarModule,
    MatBadgeModule,
    MatDialogModule,
    MatCheckboxModule,
    MatButtonToggleModule,
    HttpClientModule,
    MatSelectModule,
    WebcamModule,
    MatTooltipModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
