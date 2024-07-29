import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-view-childrens',
  templateUrl: './view-childrens.component.html',
  styleUrls: ['./view-childrens.component.css']
})
export class ViewChildrensComponent implements OnInit {
  childrenproduct: any = []
  constructor(private activatedrouteInstance: ActivatedRoute, private api: ApiService) { }
  ngOnInit(): void {
    this.activatedrouteInstance.params.subscribe((data: any) => {
      console.log(data);
      const { id } = data
      console.log(id);

      this.getchildProductDetails(id)
    })

  }



  getchildProductDetails=(id:any)=>{
    this.api.viewchildProduct(id).subscribe({
      next:(res:any)=>{
        this.childrenproduct=res
      }
    })
  }

}
