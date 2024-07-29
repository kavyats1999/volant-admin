import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  username: string = '';
  password: string = '';

  constructor(private apiService: ApiService, private router: Router) {}

  onLogin() {
    const loginData = {
      username: this.username,
      password: this.password
    };

    this.apiService.addAdminLogin(loginData).subscribe({
      next: (response: any) => {
        console.log('Login successful', response);
        window.alert('Login successful');
        this.router.navigateByUrl('home'); // Adjust the route as needed
      },
      error: (error) => {
        console.error('Login failed', error);
        window.alert('Login failed: ' + error.error.error);
      }
    });
  }
}
