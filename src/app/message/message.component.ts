import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit{

  isSidebarExpanded = false;

  toggleSidebar(): void {
    this.isSidebarExpanded = !this.isSidebarExpanded;
  }

  allcontacts:any=[]

  constructor(private api:ApiService){ }
  ngOnInit(): void {
    this.getContacts()
  }

  getContacts=()=>{
    this.api.getallcontacts().subscribe({
      next:(res:any)=>{
        this.allcontacts=res
        console.log(this.allcontacts)
      },
      error:(err:any)=>{
        console.log(err);
        
      }
    })
  }




}
