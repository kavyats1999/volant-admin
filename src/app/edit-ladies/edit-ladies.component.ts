import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-edit-ladies',
  templateUrl: './edit-ladies.component.html',
  styleUrls: ['./edit-ladies.component.css']
})
export class EditLadiesComponent implements OnInit{

  ladiesproduct={
    id: 0,
    title: '',
    price: 0,
    description: '',
    category: '',
    image: ''
  }
  constructor(private editroute:ActivatedRoute,private api:ApiService,private navigate:Router){}
  ngOnInit(): void {
    this.editroute.params.subscribe({
      next:(data:any)=>{
        const{id}=data
        this.api.viewLadyProduct(id).subscribe({
          next:(product:any)=>{
            this.ladiesproduct=product
          },
          error:(err:any)=>{
            console.log(err);
            
          }
        })
      }
    })
  }

  updateLadiesproducts():void{
    this.api.editladiesProduct(this.ladiesproduct.id,this.ladiesproduct).subscribe({
      next:(res:any)=>{
        alert("succesfully updated")
        this.navigate.navigateByUrl('ladies')
      },
      error:(err:any)=>{
        console.log(err);
        
      }
    })
  }

}
