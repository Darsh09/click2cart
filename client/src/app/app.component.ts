import { Component } from '@angular/core';
import { RouterOutlet,RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule,NavbarComponent],
  template: `
    <app-navbar></app-navbar>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css'] // Fixed styleUrl to styleUrls (plural)
})
export class AppComponent {
  title = 'client';
}
