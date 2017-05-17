import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopListComponent } from './top-list/top-list.component';
import {ListingRoutesModule} from './routes'
import { TopListingResolve } from './services/top.resolve.service';
import {AppSharedModule} from '../shared-module/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ListingRoutesModule,
    AppSharedModule
  ],
  providers:[TopListingResolve],
  declarations: [TopListComponent]
})
export class ListingsModule { }
