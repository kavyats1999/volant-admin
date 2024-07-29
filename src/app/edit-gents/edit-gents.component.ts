import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-edit-gents',
  templateUrl: './edit-gents.component.html',
  styleUrls: ['./edit-gents.component.css']
})
export class EditGentsComponent implements OnInit {

  gentsproduct = {
    id: 0,
    title: '',
    price: 0,
    description: '',
    category: '',
    image: ''
  };

  constructor(
    private editroute: ActivatedRoute, 
    private api: ApiService, 
    private navigate: Router
  ) {}

  ngOnInit(): void {
    this.editroute.params.subscribe({
      next: (data: any) => {
        const { id } = data;
        this.api.viewProduct(id).subscribe({
          next: (product: any) => {
            this.gentsproduct = product;
          },
          error: (err: any) => {
            console.error(err);
            // Handle error
          }
        });
      }
    });
  }

  updateGentsproducts(): void {
    this.api.editgentsProduct(this.gentsproduct.id, this.gentsproduct).subscribe({
      next: (res: any) => {
        alert("Successfully updated");
        this.navigate.navigateByUrl('gents');
      },
      error: (err: any) => {
        console.error(err);
        // Handle error
      }
    });
  }
}
