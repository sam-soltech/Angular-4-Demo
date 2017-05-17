import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Router, Resolve, ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { BaseService } from '../../global-services/base.service';


@Injectable()
export class TopListingResolve implements Resolve<any> {
  private routeInfo: ActivatedRouteSnapshot;
  constructor(
    public router: Router,
    private route: ActivatedRoute
  ) {

  }
  resolve(route: ActivatedRouteSnapshot): Observable<[any]> | Observable<boolean> {
    let id = parseInt(route.params['id']);
    let sampleData = [
        {
          "id": 0,
          "name": "Emtrac Industry",
          "url": "http://placehold.it/100?text=enim",
          "active": false,
          "assginedTo": "Tom"
        },
        {
          "id": 1,
          "name": "Valreda LLC",
          "url": "http://placehold.it/100?text=proident",
          "active": true,
          "assginedTo": "Jane"
        },
        {
          "id": 2,
          "name": "Plasmosis Ventures",
          "url": "http://placehold.it/100?text=do",
          "active": true,
          "assginedTo": "Tommy"
        },
        {
          "id": 3,
          "name": "Bostonic Trust",
          "url": "http://placehold.it/100?text=Lorem",
          "active": false,
          "assginedTo": "Charlie"
        }
      ]
    return Observable.of(sampleData)
  }
}
