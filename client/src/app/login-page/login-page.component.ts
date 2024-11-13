import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {} // Inject the Router

  onSubmit() {
    console.log(this.username,this.password);
    if (this.username === 'admin' && this.password === 'admin') {
      alert('Login successful!');
      // Navigate to the home page
      this.router.navigate(['/home']);
    } else {
      alert('Invalid username or password');
    }
  }
}
