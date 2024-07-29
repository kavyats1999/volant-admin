import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-gents',
  templateUrl: './gents.component.html',
  styleUrls: ['./gents.component.css']
})
export class GentsComponent implements OnInit{

  isSidebarExpanded = false;

  toggleSidebar(): void {
    this.isSidebarExpanded = !this.isSidebarExpanded;
  }
gentsproduct:any=[]

constructor(private api:ApiService){}
  ngOnInit(): void {

    this.getGentsProduct()
   
  }


  getGentsProduct=()=>{
    this.api.getallproduct().subscribe({
      next:(res:any)=>{
        this.gentsproduct=res
        console.log(this.gentsproduct);
        
      },
      error:(err:any)=>{
        console.log(err);
        
      }
    })
  }

  deleteProduct(id: any) {
    this.api.deletegentsProduct(id).subscribe({
      next: (res: any) => {
        alert('Product has been deleted successfully');
        window.location.reload(); // Refresh the page
      },
      error: (err: any) => {
        console.error('Error deleting product:', err);
        alert('Failed to delete product');
      }
    });
  }
  
  
}
