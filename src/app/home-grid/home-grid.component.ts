<<<<<<< HEAD
import { HomeCardComponent } from '../home-card/home-card.component';
import { HomeService } from './../services/home.service';
import { Component, inject } from '@angular/core';
=======
import { Component, inject } from '@angular/core';
import { HomeService } from '../services/home.service';
import { HomeCardComponent } from '../home-card/home-card.component';
>>>>>>> 8669a295d4e1c47a794e08fe4aa9c5127b9faaf3

@Component({
  selector: 'app-home-grid',
  imports: [HomeCardComponent],
  templateUrl: './home-grid.component.html',
<<<<<<< HEAD
  styleUrl: './home-grid.component.css'
})
export class HomeGridComponent {
    homesService = inject(HomeService);
    homes = this.homesService.paginatedHomes.asReadonly();
    isLoading = this.homesService.isLoading.asReadonly();
    error = this.homesService.error.asReadonly();

    ngOnInit() {

      this.homesService.fetchHomes();
      console.log("***********" , this.homes());
    }
=======
  styleUrl: './home-grid.component.css',
})
export class HomeGridComponent {
  homesService = inject(HomeService);
  homes = this.homesService.paginatedHomes.asReadonly();
  isLoading = this.homesService.isLoading.asReadonly();
  error = this.homesService.error.asReadonly();

  ngOnInit() {
    this.homesService.fetchHomes();
  }
>>>>>>> 8669a295d4e1c47a794e08fe4aa9c5127b9faaf3
}
