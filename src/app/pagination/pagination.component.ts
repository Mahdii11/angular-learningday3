import { Component, computed, inject } from '@angular/core';
import { HomeService } from '../services/home.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pagination',
  imports: [CommonModule],
  templateUrl: './pagination.component.html',
<<<<<<< HEAD
  styleUrl: './pagination.component.css'
})
export class PaginationComponent {
  homeService = inject(HomeService);
  currentPage = 1;
  totalPages = this.homeService.totalPages.asReadonly();
  totalHomes = this.homeService.totalHomes.asReadonly();
=======
  styleUrl: './pagination.component.css',
})
export class PaginationComponent {
  homeService = inject(HomeService);
  totalPages = this.homeService.totalPages.asReadonly();
  totalItems = this.homeService.totalItems.asReadonly();

  currentPage = 1;
>>>>>>> 8669a295d4e1c47a794e08fe4aa9c5127b9faaf3
  pages = computed(() => {
    return Array.from({ length: this.totalPages() }, (_, i) => i + 1);
  });

  onPageChange(page: number) {
    this.currentPage = page;
    this.homeService.fetchHomes(page);
  }
}
