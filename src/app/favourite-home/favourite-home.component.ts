import { Component, inject } from '@angular/core';
import { HomeService } from '../services/home.service';
<<<<<<< HEAD
import { HomeCardComponent } from '../home-card/home-card.component';

@Component({
  selector: 'app-favourite-home',
  imports: [HomeCardComponent],
  templateUrl: './favourite-home.component.html',
  styleUrl: './favourite-home.component.css'
})
export class FavouriteHomeComponent {
  homeService = inject(HomeService);
  favoriteHomes = this.homeService.favoritesHomes;

=======
import { CommonModule } from '@angular/common';
import { HomeCardComponent } from '../home-card/home-card.component';
@Component({
  selector: 'app-favourite-home',
  imports: [CommonModule, HomeCardComponent],
  templateUrl: './favourite-home.component.html',
  styleUrl: './favourite-home.component.css',
})
export class FavouriteHomeComponent {
  homeService = inject(HomeService);
  favoritesHomes = this.homeService.favoritesHomes;
>>>>>>> 8669a295d4e1c47a794e08fe4aa9c5127b9faaf3
}
