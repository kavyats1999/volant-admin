import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  isSidebarExpanded = false;

  toggleSidebar(): void {
    this.isSidebarExpanded = !this.isSidebarExpanded;
  }

  productorder: any = []

  constructor(private api: ApiService) { }

  ngOnInit(): void {
  this.getallorder()
  }

  getallorder = () => {
    this.api.getallAddresses().subscribe({
      next: (res: any) => {
        this.productorder = res
        console.log(this.productorder);

      },
      error:(err:any)=>{
        console.log(err);
      }
        
      
    })
  }

}
