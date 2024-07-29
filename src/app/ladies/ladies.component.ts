import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-ladies',
  templateUrl: './ladies.component.html',
  styleUrls: ['./ladies.component.css']
})
export class LadiesComponent implements OnInit{
  isSidebarExpanded = false;

  toggleSidebar(): void {
    this.isSidebarExpanded = !this.isSidebarExpanded;
  }


  
  ladiesproduct:any=[]

  constructor(private api:ApiService){}
  ngOnInit(): void {
    this.getLadiesProduct()
  }

  getLadiesProduct=()=>{
    this.api.getallLadiesProduct().subscribe({
      next:(res:any)=>{
        this.ladiesproduct=res
        console.log(this.ladiesproduct);
        
      },
      error:(err:any)=>{
        console.log(err);
        
      }
    })
  }

  deleteProduct(id:any){
    this.api.deleteladiesProduct(id).subscribe({
      next:(res:any)=>{
        alert('product has been deleted succesfully')
        window.location.reload()
      },
      error:(err:any)=>{
        console.log('error deleting product:',err);
        alert('failed to delete product')
        
      }
    })
  }

  

}
