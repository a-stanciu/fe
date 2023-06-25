import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SfComponent } from './components/sf/sf.component';
import { SrpComponent } from './components/srp/srp.component';
import { PdpComponent } from './components/pdp/pdp.component';
import { CartComponent } from './components/cart/cart.component';
import { UserSettingsComponent } from './components/user-settings/user-settings.component';
import { ShirtTryOnComponent } from './components/shirt-try-on/shirt-try-on.component';
import { OrderHistoryComponent } from './components/order-history/order-history.component';
import { BlankComponent } from './components/blank/blank.component';
import { CheckoutComponent } from './components/checkout/checkout.component';

const routes: Routes = [
  { path: '', component: SfComponent },
  { path: 'srp', component: SrpComponent },
  { path: 'srp/:search', component: SrpComponent },
  { path: 'pdp/:id', component: PdpComponent },
  { path: 'cart', component: CartComponent },
  { path: 'settings', component: UserSettingsComponent },
  { path: 'shirt-try-on/:id', component: ShirtTryOnComponent },
  { path: 'settings', component: UserSettingsComponent },
  { path: 'order-history', component: OrderHistoryComponent },
  { path: 'blank', component: BlankComponent },
  { path: 'checkout', component: CheckoutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
