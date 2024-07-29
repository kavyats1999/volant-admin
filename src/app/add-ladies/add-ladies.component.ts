import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-ladies',
  templateUrl: './add-ladies.component.html',
  styleUrls: ['./add-ladies.component.css']
})
export class AddLadiesComponent {


  ladiesproduct={
    id:0,
    title:'',
    price:0,
    description:'',
    category:'',
    image:''
  }

  constructor(private api:ApiService , private navigate:Router){}

  submitForm(){
    this.api.addladiesProduct(this.ladiesproduct).subscribe({
      next:(res:any)=>{
        console.log(res);
        window.alert('product added succesfully')
        this.navigate.navigateByUrl('ladies')
        
      },
      error:(err:any)=>{
        console.log(err);
        window.alert('product id already exist.please try again')
        
      }
    })
  }

}
