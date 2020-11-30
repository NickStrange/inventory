import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { InventoryComponent } from './inventory/inventory.component';

const routes: Routes = [
  {path: 'contacts', component:ContactComponent},
  {path: 'inventory', component:InventoryComponent},
  // { path:'**', component:ContactComponent}
];

@NgModule({ 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
