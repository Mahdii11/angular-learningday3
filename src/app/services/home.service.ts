<<<<<<< HEAD
import { HttpClient, HttpParams } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
=======
import { inject, Injectable, signal } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { finalize } from 'rxjs/operators';
>>>>>>> 8669a295d4e1c47a794e08fe4aa9c5127b9faaf3
import { Home } from '../models/home.type';
import { finalize, Observable } from 'rxjs';


<<<<<<< HEAD
const API_URL = 'http://localhost:4000/homes'


type PaginatedResponse<T> = {
  //data: T[],
  data: T,
  pages: number;
  items: number;
};
=======
type PaginatedResponse<T> = {
  data: T[];
  pages: number;
  items: number;
};

>>>>>>> 8669a295d4e1c47a794e08fe4aa9c5127b9faaf3
@Injectable({
  providedIn: 'root'
})
export class HomeService {
<<<<<<< HEAD
  paginatedHomes = signal<Home[]>([]);
  favoritesHomes = computed(() => this.paginatedHomes().filter((home) => home.isFavorite));
  totalHomes = signal<number>(0);
  totalPages = signal<number>(0);
  isLoading = signal<boolean>(false);
  error = signal<string | null>(null);

  private favoritesId: number[] = [];

  constructor(private http: HttpClient) {
    this.loadFavoritesFromStorage();
  }

  fetchHomes(page: number = 1, limit: number = 6) {
    let params = new HttpParams().set("_page", page.toString()).set("_per_page", limit.toString());

    this.isLoading.set(true);
    return this.http
      .get<PaginatedResponse<Home[]>>(API_URL, { params })
      .pipe(finalize(() => this.isLoading.set(false)))
      .subscribe({
        next: (response) => {
          this.paginatedHomes.set(this.addFavoriteStatus(response.data));
          this.totalHomes.set(response.items);
          this.totalPages.set(response.pages);
=======
  http = inject(HttpClient);
  paginatedHomes = signal<Home[]>([]);
  totalPages = signal<number>(0);
  totalItems = signal<number>(0);
  isLoading = signal<boolean>(false);
  error = signal<string | null>(null);
  favoritesHomes = signal<Home[]>([]);

  constructor() {
    this.loadFavoritesFromLocalStorage();
  }

  fetchHomes(page: number = 1, limit: number = 6) {
    this.isLoading.set(true);
    this.error.set(null);

    const params = new HttpParams()
      .set('_page', page.toString())
      .set('_per_page', limit.toString());

    return this.http
      .get<PaginatedResponse<Home>>(`${API_URL}/homes`, {
        params,
      })
      .pipe(finalize(() => this.isLoading.set(false)))
      .subscribe({
        next: (response) => {
          this.paginatedHomes.set(this.addToFavoritesStatus(response.data));
          this.totalPages.set(response.pages);
          this.totalItems.set(response.items);
>>>>>>> 8669a295d4e1c47a794e08fe4aa9c5127b9faaf3
        },
        error: (error) => {
          this.error.set(error.message);
        },
      });
  }

<<<<<<< HEAD
  toggleFavorite(homeId: number) {
    const selectedHome = this.paginatedHomes().find((home) => home.id === homeId);
  
    if (!selectedHome) {
      console.error(`Home with ID ${homeId} not found`);
      return;
    }
  
    const updatedHome = {
      ...selectedHome,
      isFavorite: !selectedHome.isFavorite
    };
  
    // Send HTTP PUT request to update the JSON server
    this.http.put(`${API_URL}/${homeId}`, updatedHome).subscribe({
      next: (response) => {
        console.log("Home updated successfully:", response);
  
        // Update local state
        this.paginatedHomes.update((homes) =>
          homes.map((home) =>
            home.id === homeId ? { ...home, isFavorite: !home.isFavorite } : home
          )
        );
  
        // Update localStorage
        if (updatedHome.isFavorite) {
          this.favoritesId.push(homeId);
        } else {
          this.favoritesId = this.favoritesId.filter((id) => id !== homeId);
        }
        this.saveFavoritesToStorage();
      },
      error: (error) => {
        console.error("Error updating home:", error);
      }
    });
  }
  
  private loadFavoritesFromStorage(): void {
    const storedFavorites = localStorage.getItem("favorites");
    this.favoritesId = storedFavorites ? JSON.parse(storedFavorites) : [];
  }

  private addFavoriteStatus(homes: Home[]): Home[] {
    return homes.map((home) => ({
      ...home,
      isFavorite: home.id ? this.favoritesId.includes(home.id) : false,
    }));
  }

  private saveFavoritesToStorage(): void {
    try {
      localStorage.setItem("favorites", JSON.stringify(this.favoritesId));
    } catch (error) {
      console.error("Error saving favorites to localStorage:", error);
=======
  toggleFavorite(home: Home) {
    if (this.favoritesHomes().some((h) => h.id === home.id)) {
      this.favoritesHomes.update((homes) =>
        homes.filter((h) => h.id !== home.id)
      );
    } else {
      this.favoritesHomes.update((homes) => [
        ...homes,
        { ...home, isFavorite: true },
      ]);
    }
    this.paginatedHomes.update((homes) =>
      homes.map((h) => {
        if (h.id === home.id) {
          return { ...h, isFavorite: !h.isFavorite };
        }
        return h;
      })
    );
    this.saveFavoritesToLocalStorage();
  }

  private addToFavoritesStatus(homes: Home[]): Home[] {
    return homes.map((home) => ({
      ...home,
      isFavorite: this.favoritesHomes().some((h) => h.id === home.id),
    }));
  }

  private saveFavoritesToLocalStorage() {
    localStorage.setItem('favorites', JSON.stringify(this.favoritesHomes()));
  }

  private loadFavoritesFromLocalStorage() {
    const favorites = localStorage.getItem('favorites');
    if (favorites) {
      this.favoritesHomes.set(JSON.parse(favorites));
>>>>>>> 8669a295d4e1c47a794e08fe4aa9c5127b9faaf3
    }
  }
}


















  //private apiUrl = "http://localhost:4000/homes";

  /*
  constructor(private http: HttpClient) {}
  /*
  getAllHomes() {
    return this.http.get<Home[]>(API_URL);
  }


    getAllHomes(): Observable<Home[]> {
      return this.http.get<Home[]>(this.apiUrl);
    }
    */

  

