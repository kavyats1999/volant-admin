import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit{
  
  product:any=[]

  constructor(private api: ApiService, private activatedRouterInstance:ActivatedRoute) { }
  ngOnInit(): void {

    this.activatedRouterInstance.params.subscribe((data:any)=>{
      console.log(data);
      const{id}=data
      console.log(id);
      
      this.getProductDetails(id)
    })
   
  }

  getProductDetails=(id:any)=>{
    this.api.viewProduct(id).subscribe({
      next:(res:any)=>{
        console.log(res);
        this.product=res
        
      }
    })
  }
}
