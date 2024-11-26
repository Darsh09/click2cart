import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private router: Router) {} // Inject the Router

  // Method for handling Profile button click
  onProfileClick(): void {
    console.log('Profile button clicked');
    this.router.navigate(['/profile']);
  }

  // Method for handling Wishlist button click
  onWishlistClick(): void {
    console.log('Wishlist button clicked');
    this.router.navigate(['/wishlist']);
  }

  // Method for handling Cart button click
  onCartClick(): void {
    console.log('Cart button clicked');
    this.router.navigate(['/cart']);
  }
}
