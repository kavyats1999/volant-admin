import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-children',
  templateUrl: './add-children.component.html',
  styleUrls: ['./add-children.component.css']
})
export class AddChildrenComponent {

  childrensproduct={
    id: 0,
    title: '',
    price: 0,
    description: '',
    category: '',
    image: ''
  }

  constructor(private api:ApiService,private navigate:Router){}


  submitForm(){
    this.api.addchildrensProduct(this.childrensproduct).subscribe({
      next:(res:any)=>{
        console.log(res);
        window.alert('product added succesfully')
        this.navigate.navigateByUrl('childrens')
        
      },
      error:(err:any)=>{
        console.log(err);
        window.alert('product id already ExpressionStatement.please try again')
        
      }
    })
  }

}
