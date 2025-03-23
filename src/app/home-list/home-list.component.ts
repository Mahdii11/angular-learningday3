<<<<<<< HEAD
import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { HomeGridComponent } from '../home-grid/home-grid.component';
import { PaginationComponent } from '../pagination/pagination.component';
import { FavouriteHomeComponent } from '../favourite-home/favourite-home.component';

@Component({
  selector: 'app-home-list',
  //zedna CommonModule
  imports: [HomeGridComponent , PaginationComponent, FavouriteHomeComponent],
=======
import { Component } from '@angular/core';
import { HomeGridComponent } from '../home-grid/home-grid.component';
import { PaginationComponent } from '../pagination/pagination.component';
import { FavouriteHomeComponent } from '../favourite-home/favourite-home.component';
@Component({
  selector: 'app-home-list',
  imports: [HomeGridComponent, PaginationComponent, FavouriteHomeComponent],
>>>>>>> 8669a295d4e1c47a794e08fe4aa9c5127b9faaf3
  templateUrl: './home-list.component.html',
  standalone: true,
  styleUrl: './home-list.component.css'
})
<<<<<<< HEAD
export class HomeListComponent {

  // Inject the service using the new inject function

  /*
  private homeService = inject(HomeService);



  homes = signal<Home[]>([]);
  isLoading = signal(true);
  error = signal<string | null>(null);

  // New signal for favorites
  private favoritesSignal = signal<number[]>([]);

  // Computed value based on homes signal
  hasHomes = computed(() => this.homes().length > 0);

  constructor() {
     // Load favorites from localStorage when component is created
     this.loadFavoritesFromStorage();
  }

  ngOnInit() {
    // We'll populate this from a service later
    this.loadHomes();
  }


  loadHomes() {
    this.isLoading.set(true);
    this.error.set(null);

    this.homeService.getAllHomes().subscribe({
      next: (homes) => {
        this.homes.set(homes);
        this.isLoading.set(false);
      },
      error: (err) => {
        this.error.set("Failed to load homes. Please try again later.");
        this.isLoading.set(false);
        console.error("Error fetching homes:", err);
      },
    });
  }
  refreshHomes() {
    this.loadHomes();
  }

  
  /**
   * Handle favorite toggle event from home card
   
  onToggleFavorite(homeId: number) {
    const currentFavorites = this.favoritesSignal();
    const index = currentFavorites.indexOf(homeId);

    if (index === -1) {
      // Add to favorites
      this.favoritesSignal.update((favorites) => [...favorites, homeId]);
    } else {
      // Remove from favorites
      this.favoritesSignal.update((favorites) => favorites.filter((id) => id !== homeId));
    }

    // Update homes with new favorite status
    const updatedHomes = this.addFavoriteStatus(this.homes());
    this.homes.set(updatedHomes);

    // Save to localStorage
    this.saveFavoritesToStorage();
  }

  /**
   * Add favorite status to homes based on favorites signal
   
  private addFavoriteStatus(homes: Home[]): Home[] {
    const favorites = this.favoritesSignal();

    return homes.map((home) => ({
      ...home,
      isFavorite: home.id ? favorites.includes(home.id) : false,
      //isFavorite: home.id ? favorites.includes(home.id) : false,
    }));
  }

  /**
   * Load favorites from localStorage
   
  private loadFavoritesFromStorage(): void {
    try {
      const storedFavorites = localStorage.getItem("favorites");
      if (storedFavorites) {
        const favorites = JSON.parse(storedFavorites);
        if (Array.isArray(favorites)) {
          this.favoritesSignal.set(favorites);
        }
      }
    } catch (error) {
      console.error("Error loading favorites from localStorage:", error);
    }
  }
  /**
   * 
   *  /**
   * Save favorites to localStorage
   
  private saveFavoritesToStorage(): void {
    try {
      localStorage.setItem("favorites", JSON.stringify(this.favoritesSignal()));
    } catch (error) {
      console.error("Error saving favorites to localStorage:", error);
    }

    */






  }





























  /*
  homes: Home[] = [];



  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.loadHomes();
  }

  loadHomes () {
    
    this.homeService.getAllHomes().subscribe((homes)=> {
      this.homes = homes;
    })
  }*/
 


=======
export class HomeListComponent {}
>>>>>>> 8669a295d4e1c47a794e08fe4aa9c5127b9faaf3
