import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopListComponent } from './top-list/top-list.component';
import {TopListingResolve} from './services/top.resolve.service';


const routes: Routes = [
  {
    path: '',
    component: TopListComponent,
    resolve:{
      listing:TopListingResolve
    }
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [],
  exports: [RouterModule]
})
export class ListingRoutesModule { }
