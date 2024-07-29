import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-boys-girls',
  templateUrl: './boys-girls.component.html',
  styleUrls: ['./boys-girls.component.css']
})
export class BoysGirlsComponent implements OnInit {

  isSidebarExpanded = false;

  toggleSidebar(): void {
    this.isSidebarExpanded = !this.isSidebarExpanded;
  }




  
  childrenproduct: any = []

  constructor(private api: ApiService) { }
  ngOnInit(): void {
    this.getchildrenProduct()

  }

  getchildrenProduct = () => {
    this.api.getallchildrenProduct().subscribe({
      next: (res: any) => {
        this.childrenproduct = res
        console.log(this.childrenproduct);

      },
      error: (err: any) => {
        console.log(err);

      }
    })
  }

  deleteProduct(id: any) {
    this.api.deletechildrensProduct(id).subscribe({
      next: (res: any) => {
        alert('product has been deleted successfully')
        window.location.reload()

      },
      error:(err:any)=>{
        console.log('error deleting product:',err);
        alert('failed to delete product')
        
      }
    })
  }
}
