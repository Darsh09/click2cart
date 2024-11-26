import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'] // Corrected from styleUrl to styleUrls
})
export class HomePageComponent {

}
