import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ClientComponent } from './client/client.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {path:'admin',
  component:AdminComponent},

  {path:'client',
  component:ClientComponent,},

  {path:'cart/:myid',
  component:CartComponent,},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
