<<<<<<< HEAD
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
=======
import { Component, Input, inject } from '@angular/core';
import {
  LucideAngularModule,
  MapPin,
  WavesLadder,
  Bed,
  Bath,
  Heart,
} from 'lucide-angular';
>>>>>>> 8669a295d4e1c47a794e08fe4aa9c5127b9faaf3
import { Home } from '../models/home.type';
import {LucideAngularModule, MapPin , WavesLadder, Bed, Bath , Heart ,} from 'lucide-angular';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
import { RouterLink } from '@angular/router';
import { HomeService } from '../services/home.service';

=======
import { HomeService } from '../services/home.service';
>>>>>>> 8669a295d4e1c47a794e08fe4aa9c5127b9faaf3
@Component({
  selector: 'app-home-card',
  imports: [CommonModule, RouterLink,LucideAngularModule ],
  templateUrl: './home-card.component.html',
  styleUrl: './home-card.component.css'
})
export class HomeCardComponent {
<<<<<<< HEAD
    @Input() home!: Home;
    homeService = inject(HomeService);

   // @Output() toggleFavorite = new EventEmitter<number>();
    // Icons list
    readonly WavesLadder = WavesLadder;
    readonly Bed = Bed;
    readonly Bath = Bath;
    readonly MapPin = MapPin;
    readonly Heart = Heart;
  //fakeArray =  Array(10).fill(0);
  //constructor injecation dependance , initialisation des composants
  /*ngOnChanges(changes : SimplesChanges):void {
    console.log(changes)
  }*/
    
    onFavoriteClick(): void {
      if (!this.home.id) {
        return;
      }
      this.homeService.toggleFavorite(this.home.id);
    }



=======
  @Input() home!: Home;
  homeService = inject(HomeService);
  // Icons list
  readonly MapPin = MapPin;
  readonly WavesLadderIcon = WavesLadder;
  readonly BedIcon = Bed;
  readonly BathIcon = Bath;
  readonly HeartIcon = Heart;

  onFavoriteClick() {
    this.homeService.toggleFavorite(this.home);
  }
>>>>>>> 8669a295d4e1c47a794e08fe4aa9c5127b9faaf3
}

