import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  SERVER_URL = 'https://e-commerce-backend-1-6cal.onrender.com'

  constructor(private http: HttpClient) { }

  getallproduct = () => {
    return this.http.get(`${this.SERVER_URL}/products/all`)
  }

  getallLadiesProduct = () => {
    return this.http.get(`${this.SERVER_URL}/ladies/all`)
  }

  getallchildrenProduct = () => {
    return this.http.get(`${this.SERVER_URL}/childrens/all`)
  }

  viewProduct = (id: any) => {
    return this.http.get(`${this.SERVER_URL}/products/view/${id}`)
  }

  viewLadyProduct = (id: any) => {
    return this.http.get(`${this.SERVER_URL}/ladies/view/${id}`)
  }

  viewchildProduct = (id: any) => {
    return this.http.get(`${this.SERVER_URL}/childrens/view/${id}`)
  }

  addgentsProduct=(gents:any)=>{
    return this.http.post(`${this.SERVER_URL}/gents`,gents)
  }

  editgentsProduct=(id:any,gents:any)=>{
    return this.http.put(`${this.SERVER_URL}/products-edit/${id}`,gents)
  }

  deletegentsProduct=(id:any)=>{
    return this.http.delete(`${this.SERVER_URL}/products-delete/${id}`)
  }

  addladiesProduct=(ladies:any)=>{
    return this.http.post(`${this.SERVER_URL}/ladies`,ladies)
  }

  addchildrensProduct=(children:any)=>{
    return this.http.post(`${this.SERVER_URL}/childrens`,children)
  }

  editladiesProduct=(id:any,ladies:any)=>{
    return this.http.put(`${this.SERVER_URL}/ladies-edit/${id}`,ladies)
  }


  editchildrensProduct=(id:any,childrens:any)=>{
    return this.http.put(`${this.SERVER_URL}/childrens-edit/${id}`,childrens)
  }

  deleteladiesProduct=(id:any)=>{
    return this.http.delete(`${this.SERVER_URL}/ladies-delete/${id}`)
  }

  deletechildrensProduct=(id:any)=>{
    return this.http.delete(`${this.SERVER_URL}/childrens-delete/${id}`)
  }

  addAdminLogin=(login:any)=>{
    return this.http.post(`${this.SERVER_URL}/admin/login`,login)
  }

  getallAddresses=()=>{
    return this.http.get(`${this.SERVER_URL}/get-addresses`)
  }

  getallcontacts=()=>{
    return this.http.get(`${this.SERVER_URL}/get-contacts`)
  }

}
