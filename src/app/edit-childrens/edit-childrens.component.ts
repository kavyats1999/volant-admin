import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-edit-childrens',
  templateUrl: './edit-childrens.component.html',
  styleUrls: ['./edit-childrens.component.css']
})
export class EditChildrensComponent implements OnInit{
  childrensproduct={
    id: 0,
    title: '',
    price: 0,
    description: '',
    category: '',
    image: ''
  }

  constructor(private editaroute:ActivatedRoute,private api:ApiService,private navigate:Router){}
  ngOnInit(): void {
    this.editaroute.params.subscribe({
      next:(data:any)=>{
        const{id}=data;
        this.api.viewchildProduct(id).subscribe({
          next:(product:any)=>{
            this.childrensproduct=product
          },
          error:(err:any)=>{
            console.log(err);
            
          }
        })
      }
    })
  }


  updatechildrensProduct():void{
    this.api.editchildrensProduct(this.childrensproduct.id,this.childrensproduct).subscribe({
      next:(res:any)=>{
        alert("successfully updated")
        this.navigate.navigateByUrl('childrens')
      }
    })
  }

}
