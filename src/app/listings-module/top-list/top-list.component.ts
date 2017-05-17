import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ActivatedRouteSnapshot} from '@angular/router';
import { UserService } from '../../global-services/user.service';

@Component({
  selector: 'top-list',
  templateUrl: './top-list.component.html',
  styleUrls: ['./top-list.component.scss']
})
export class TopListComponent implements OnInit {
  listings:[any];
  title:string = "Hello Title";
  constructor(
    public route: ActivatedRoute
  ) {
    this.route.data.subscribe((data)=>{
      this.listings = data['listing'];
      console.log(data)
    });

  }

  ngOnInit(){
  }

  alertMe = (data:any) => {
    alert(data.name);
  }

}
