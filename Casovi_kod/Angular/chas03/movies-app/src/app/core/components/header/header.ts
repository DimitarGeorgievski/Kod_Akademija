import { Component, effect, inject, OnInit } from '@angular/core';
import { LoggerService } from '../../services/logger-service';
import { MoviesService } from '../../services/movies-service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header implements OnInit {
  // old school way of injecting dependencies in Anuglar
  // constructor(private loggerService: LoggerService){}
  // New way and preffered on injecting dependencies in Angular
  private loggerService = inject(LoggerService);
  private movieService = inject(MoviesService);

  totalLikes = this.movieService.totalLikes;
  avgRating = this.movieService.avgRating;

  constructor() {
    // Used for logging ro for doing side effects when a signal changes its value
    // Very similar to computed but it doesn't return and it needs to be used in the constructor
    // Avoid setting signals in effects, we have other tools to achieve that
    effect(() => {
      console.log('The value of total like is:', this.totalLikes());
    });
  }

  ngOnInit() {
    this.loggerService.logDetails('header');
  }
}
