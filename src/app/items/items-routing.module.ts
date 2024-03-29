import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsModule } from './items.module';
import { ItemsListComponent } from './items-list/items-list.component';

const routes: Routes = [
  {
    path: '',
    component: ItemsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemsRoutingModule { }
