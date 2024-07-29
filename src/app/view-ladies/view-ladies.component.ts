import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-ladies',
  templateUrl: './view-ladies.component.html',
  styleUrls: ['./view-ladies.component.css']
})
export class ViewLadiesComponent implements OnInit{

  ladyproduct:any=[]

  constructor(private api:ApiService,private activateRouteInstance:ActivatedRoute){}
  ngOnInit(): void {
   this.activateRouteInstance.params.subscribe((data:any)=>{
    console.log(data);

    const{id}=data
    console.log(id);
    
    this.getLadyProductDetails(id)
    
   })
  }


  getLadyProductDetails=(id:any)=>{
    this.api.viewLadyProduct(id).subscribe({
      next:(res:any)=>{
        console.log(res);

        this.ladyproduct=res
        
      }
    })
  }

}
