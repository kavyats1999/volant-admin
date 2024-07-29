import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-gents',
  templateUrl: './add-gents.component.html',
  styleUrls: ['./add-gents.component.css']
})
export class AddGentsComponent {
  
  gentsproduct = {
    id: 0,
    title: '',
    price: 0,
    description: '',
    category: '',
    image: ''
  };

  constructor(private api: ApiService,private navigate:Router) {}

  submitForm() {
    this.api.addgentsProduct(this.gentsproduct).subscribe({
      next: (res: any) => {
        console.log(res);
        window.alert('Product added successfully!');
        this.navigate.navigateByUrl('gents')
      },
      error: (err: any) => {
        console.log(err);
        window.alert('product id already exist. Please try again.');
      }
    });
  }
}
